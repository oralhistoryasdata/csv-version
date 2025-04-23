# frozen_string_literal: true

# CollectionBuilder-CSV helper tasks

require 'csv'
require 'fileutils'
require 'image_optim' unless Gem.win_platform?
require 'mini_magick'
# filepath: Rakefile
require 'rake'
require 'yaml'
require 'json'
require 'digest'
require 'time' # For iso8601

# --- Configuration Constants ---
CONFIG_FILE = '_config.yml'
SOURCE_DIR = File.dirname(__FILE__) # Project root
DATA_DIR = File.join(SOURCE_DIR, '_data')
# Assuming transcript CSVs are in a subdirectory named 'transcripts' within _data
TRANSCRIPTS_DATA_DIR = File.join(DATA_DIR, 'transcripts')
# Target directory for individual JSONs within the source 'assets'
ASSETS_TARGET_DIR = File.join(SOURCE_DIR, 'assets', 'data', 'transcripts')
# Support these file types (from generate_derivatives, keep it global if potentially reusable)
EXTNAME_TYPE_MAP = {
  '.jpeg' => :image,
  '.jpg' => :image,
  '.pdf' => :pdf,
  '.png' => :image,
  '.tif' => :image,
  '.tiff' => :image
}.freeze

###############################################################################
# TASK: deploy
###############################################################################

desc 'Build site with production env'
task :deploy do
  ENV['JEKYLL_ENV'] = 'production'
  system('bundle', 'exec', 'jekyll', 'build')
end

###############################################################################
# Helper Functions
###############################################################################

def prompt_user_for_confirmation(message)
  response = nil
  loop do
    print "#{message} (Y/n): "
    $stdout.flush
    response = case $stdin.gets.chomp.downcase
               when '', 'y' then true
               when 'n' then false
               end
    break unless response.nil?

    puts 'Please enter "y" or "n"'
  end
  response
end

def process_and_optimize_image(filename, file_type, output_filename, size, density)
  image_optim = ImageOptim.new(svgo: false) unless Gem.win_platform?
  if filename == output_filename && file_type == :image && !Gem.win_platform?
    puts "Optimizing: #{filename}"
    begin
      image_optim.optimize_image!(output_filename)
    rescue StandardError => e
      puts "Error optimizing #{filename}: #{e.message}"
    end
  elsif filename == output_filename && file_type == :pdf
    puts "Skipping: #{filename}"
  else
    puts "Creating: #{output_filename}"
    begin
      if file_type == :pdf
        inputfile = "#{filename}[0]"
        magick = MiniMagick::Tool::Convert.new
        magick.density(density)
        magick << inputfile
        magick.resize(size)
        magick.flatten
        magick << output_filename
        magick.call
      else
        image = MiniMagick::Image.open(filename)
        image.format('jpg')
        image.resize(size)
        image.flatten
        image.write(output_filename)
      end
      image_optim.optimize_image!(output_filename) unless Gem.win_platform?
    rescue StandardError => e
      puts "Error creating #{filename}: #{e.message}"
    end
  end
end

# --- Helper Function: Load CSV Data ---
# Reads a CSV file and returns an array of hashes, with symbol keys
def load_csv_data(filepath)
  data = []
  begin
    # Read with headers, convert headers to lowercase symbols
    CSV.foreach(filepath, headers: true, header_converters: :symbol, converters: :all) do |row|
      data << row.to_h
    end
    puts "Successfully loaded #{data.length} rows from #{filepath}"
  rescue Errno::ENOENT
    puts "Error: CSV file not found at #{filepath}"
  rescue => e
    puts "Error reading CSV file #{filepath}: #{e.message}"
  end
  data
end

###############################################################################
# TASK: generate_derivatives
###############################################################################

desc 'Generate derivative image files from collection objects'
task :generate_derivatives, [:thumbs_size, :small_size, :density, :missing, :compress_originals] do |_t, args|
  # set default arguments
  # default image size is based on max pixel width they will appear in the base template features
  args.with_defaults(
    thumbs_size: '450x',
    small_size: '800x800',
    density: '300',
    missing: 'true',
    compress_originals: 'false'
  )

  # set the folder locations
  objects_dir = 'objects'
  thumb_image_dir = 'objects/thumbs'
  small_image_dir = 'objects/small'

  # Ensure that the output directories exist.
  [thumb_image_dir, small_image_dir].each do |dir|
    FileUtils.mkdir_p(dir) unless Dir.exist?(dir)
  end

  # CSV output
  list_name = File.join(objects_dir, 'object_list.csv')
  field_names = 'filename,object_location,image_small,image_thumb'.split(',')
  CSV.open(list_name, 'w') do |csv|
    csv << field_names

    # Iterate over all files in the objects directory.
    Dir.glob(File.join(objects_dir, '*')).each do |filename|
      # Skip subdirectories and the README.md file.
      if File.directory?(filename) || File.basename(filename) == 'README.md' || File.basename(filename) == 'object_list.csv'
        next
      end

      # Determine the file type and skip if unsupported.
      extname = File.extname(filename).downcase
      file_type = EXTNAME_TYPE_MAP[extname]
      unless file_type
        puts "Skipping file with unsupported extension: #{filename}"
        csv << ["#{File.basename(filename)}", "/#{filename}", nil, nil]
        next
      end

      # Get the lowercase filename without any leading path and extension.
      base_filename = File.basename(filename, '.*').downcase

      # Optimize the original image.
      if args.compress_originals == 'true'
        puts "Optimizing: #{filename}"
        process_and_optimize_image(filename, file_type, filename, nil, nil)
      end

      # Generate the thumb image.
      thumb_filename = File.join(thumb_image_dir, "#{base_filename}_th.jpg")
      if args.missing == 'false' || !File.exist?(thumb_filename)
        process_and_optimize_image(filename, file_type, thumb_filename, args.thumbs_size, args.density)
      else
        puts "Skipping: #{thumb_filename} already exists"
      end

      # Generate the small image.
      small_filename = File.join([small_image_dir, "#{base_filename}_sm.jpg"])
      if (args.missing == 'false') || !File.exist?(small_filename)
        process_and_optimize_image(filename, file_type, small_filename, args.small_size, args.density)
      else
        puts "Skipping: #{small_filename} already exists"
      end
      csv << ["#{File.basename(filename)}", "/#{filename}", "/#{small_filename}", "/#{thumb_filename}"]
    end
  end
  puts "\e[32mSee '#{list_name}' for list of objects and derivatives created.\e[0m"
end

###############################################################################
# TASK: generate_json
###############################################################################

desc "Generate individual JSON files from transcript CSVs"
task :generate_json do
  puts "Starting JSON generation task..."

  # 1. Load Jekyll Configuration
  config = {}
  if File.exist?(CONFIG_FILE)
    config = YAML.load_file(CONFIG_FILE) || {}
    puts "Loaded configuration from #{CONFIG_FILE}"
  else
    puts "Warning: #{CONFIG_FILE} not found. Using default settings."
  end

  # 2. Determine Metadata File Path
  metadata_filename = config['metadata'] # Get metadata filename key from _config.yml
  metadata_path = nil
  if metadata_filename
    # Assume metadata file is directly in _data and is a CSV
    metadata_path = File.join(DATA_DIR, "#{metadata_filename}.csv")
  else
    puts "Warning: 'metadata' key not found in #{CONFIG_FILE}. Metadata will not be loaded."
  end

  # 3. Load Metadata
  metadata_collection = []
  if metadata_path && File.exist?(metadata_path)
    metadata_collection = load_csv_data(metadata_path)
  elsif metadata_path
    puts "Warning: Metadata file specified but not found at #{metadata_path}"
  end

  # 4. Load Transcript Data from CSVs
  transcripts = {}
  if Dir.exist?(TRANSCRIPTS_DATA_DIR)
    Dir.glob(File.join(TRANSCRIPTS_DATA_DIR, '*.csv')).each do |csv_file|
      # Use the CSV filename (without extension) as the transcript ID
      transcript_name = File.basename(csv_file, '.csv')
      transcript_content = load_csv_data(csv_file)
      if transcript_content.any?
         transcripts[transcript_name] = transcript_content
      else
         puts "Warning: No data loaded from #{csv_file}, skipping."
      end
    end
  else
    puts "Error: Transcripts data directory not found at #{TRANSCRIPTS_DATA_DIR}"
    puts "Please ensure your transcript CSV files are located in #{TRANSCRIPTS_DATA_DIR}"
    exit(1) # Exit task with an error code
  end

  if transcripts.empty?
    puts "No transcript CSV files were successfully loaded from #{TRANSCRIPTS_DATA_DIR}. Exiting."
    exit(1) # Exit task with an error code
  end

  # 5. Ensure Target Directories Exist
  FileUtils.mkdir_p(ASSETS_TARGET_DIR)
  FileUtils.mkdir_p(DATA_DIR) # For collection file

  # 6. Prepare Collection Data Structure
  collection_data = {
    'metadata': {
      'title': 'Complete Oral History Collection',
      'description': config['description'] || 'Oral history transcripts',
      'date_generated': Time.now.utc.iso8601,
      'transcript_count': transcripts.keys.length
    },
    'transcripts': {}
  }

  # 7. Process Each Transcript
  puts "Processing #{transcripts.keys.length} transcripts..."
  transcripts.each do |transcript_name, transcript_data|
    puts "  Processing: #{transcript_name}"

    # Find corresponding metadata (using symbol :objectid key from CSV helper)
    metadata = metadata_collection.find { |item| item[:objectid]&.to_s == transcript_name } || {}

    # Build JSON structure for the individual transcript
    json_data = {
      'title' => metadata[:title] || transcript_name,
      'interviewee' => metadata[:interviewee] || metadata[:title] || transcript_name,
      'interviewer' => metadata[:interviewer],
      'date' => metadata[:date],
      'subjects' => metadata[:subject]&.to_s&.split(';')&.map(&:strip)&.reject(&:empty?), # Ensure string before split
      'segments' => []
    }

    # Add segments (using symbol keys from CSV helper)
    transcript_data.each_with_index do |item, index|
        tags = item[:tags]&.to_s&.split(';')&.compact&.map(&:strip)&.reject { |t| t.nil? || t.strip.empty? } || []
        json_data['segments'] << {
            'id' => "#{transcript_name}_#{index}",
            'index' => index,
            'speaker' => item[:speaker],
            'words' => item[:words],
            'tags' => tags,
            'timestamp' => item[:timestamp]
        }
    end

    # Add transcript metadata (using symbol keys from CSV helper)
    json_data['metadata'] = {
        'totalSegments' => transcript_data.length,
        'description' => metadata[:description],
        'location' => metadata[:location],
        'source' => metadata[:source]
    }

    # Add this transcript's full data to the collection object
    collection_data[:transcripts][transcript_name] = json_data

    # Write individual JSON file to the source assets directory
    individual_path = File.join(ASSETS_TARGET_DIR, "#{transcript_name}.json")
    begin
      File.open(individual_path, 'w') do |file|
        file.write(JSON.pretty_generate(json_data))
      end
      # puts "    Successfully wrote individual file: #{individual_path}" # Optional: reduce verbosity
    rescue => e
      puts "    Error writing individual file #{individual_path}: #{e.message}"
    end
  end
  puts "Finished processing individual transcripts."
end

# Optional: Make this the default task when running `rake`
# task default: :generate_json