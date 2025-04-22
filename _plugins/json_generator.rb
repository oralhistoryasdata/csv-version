# Create this file as _plugins/json_generator.rb

require 'fileutils'
require 'json'
require 'digest'

module Jekyll
  class JsonGenerator < Generator
    safe true
    priority :low

    def generate(site)
      # Create destination directory for transcript JSONs
      FileUtils.mkdir_p(File.join(site.dest, 'assets', 'data', 'transcripts'))
      
      # Get all transcript data from site.data.transcripts
      transcripts = site.data['transcripts']
      return if transcripts.nil?
      
      # Get metadata from site configuration
      metadata_collection = site.data[site.config['metadata']] || []
      
      # Create a comprehensive collection object
      collection_data = {
        'metadata': {
          'title': 'Complete Oral History Collection',
          'description': site.config['description'] || 'Oral history transcripts',
          'date_generated': Time.now.utc.iso8601,
          'transcript_count': transcripts.keys.length
        },
        'transcripts': {}
      }
      
      # For each transcript, create a JSON file and add to comprehensive collection
      puts "Found #{transcripts.keys.length} transcripts to process." # Added log
      transcripts.each do |transcript_name, transcript_data|
        puts "Processing transcript: #{transcript_name}" # Added log
        
        # Find metadata for this transcript
        metadata = metadata_collection.find { |item| item['objectid'] == transcript_name } || {}
        
        # Build JSON structure
        json_data = {
          'title' => metadata['title'] || transcript_name,
          'interviewee' => metadata['interviewee'] || metadata['title'] || transcript_name,
          'interviewer' => metadata['interviewer'],
          'date' => metadata['date'],
          'subjects' => metadata['subject']&.split(';')&.map(&:strip),
          'segments' => []
        }
        
        # Add each segment
        transcript_data.each_with_index do |item, index|
          # Process tags
          tags = item['tags']&.to_s&.split(';')&.compact&.map(&:strip)&.reject { |t| t == "" || t == " " } || []
          
          # Add segment data
          json_data['segments'] << {
            'id' => "#{transcript_name}_#{index}",
            'index' => index,
            'speaker' => item['speaker'],
            'words' => item['words'],
            'tags' => tags,
            'timestamp' => item['timestamp']
          }
        end
        
        # Add transcript metadata
        json_data['metadata'] = {
          'totalSegments' => transcript_data.length,
          'description' => metadata['description'],
          'location' => metadata['location'],
          'source' => metadata['source']
        }
        
        # Add to the comprehensive collection
        collection_data[:transcripts][transcript_name] = json_data
        
        # Define the target directory within the source folder
        target_dir = File.join(site.source, 'assets', 'data', 'transcripts')
        # Ensure the target directory exists
        FileUtils.mkdir_p(target_dir)
        
        # Write individual JSON file to the source directory
        path = File.join(target_dir, "#{transcript_name}.json") # Changed site.dest to target_dir
        puts "Attempting to write individual file to source: #{path}" # Updated log message
        begin
          File.open(path, 'w') do |file|
            file.write(JSON.pretty_generate(json_data))
          end
          puts "Successfully wrote to source: #{path}" # Updated log message
        rescue => e
          puts "Error writing file to source #{path}: #{e.message}" # Updated log message
        end
      end
      
      # Create a combined index JSON with basic information about all transcripts
      index_data = transcripts.keys.map do |transcript_name|
        metadata = metadata_collection.find { |item| item['objectid'] == transcript_name } || {}
        {
          'id' => transcript_name,
          'title' => metadata['title'] || transcript_name,
          'interviewee' => metadata['interviewee'] || metadata['title'] || transcript_name,
          'date' => metadata['date'],
          # Update the URL to reflect that the files will be copied by Jekyll
          'url' => "/assets/data/transcripts/#{transcript_name}.json" 
        }
      end
      
      # Write index JSON file to the destination directory (this one should go to _site)
      index_path = File.join(site.dest, 'assets', 'data', 'transcripts', 'index.json')
      # Ensure the destination directory for the index exists
      FileUtils.mkdir_p(File.dirname(index_path)) 
      File.open(index_path, 'w') do |file|
        file.write(JSON.pretty_generate(index_data))
      end
      puts "Successfully wrote index file to destination: #{index_path}" # Added log for index
      
      # Store collection file in the source directory's _data folder
      # Note: Changed the path logic slightly here from previous attempts for clarity
      data_dir = File.join(site.source, '_data') # Target the _data directory
      data_path = File.join(data_dir, 'transcript-collection.json') # Path within _data
      
      # Add timestamp check
      should_write = true
      if File.exist?(data_path)
        file_age = Time.now - File.mtime(data_path)
        should_write = file_age > 60 # Only write if more than 1 minute has passed
        
        if should_write
          existing_content = File.read(data_path)
          new_content = JSON.pretty_generate(collection_data)
          existing_hash = Digest::SHA256.hexdigest(existing_content)
          new_hash = Digest::SHA256.hexdigest(new_content)
          should_write = (existing_hash != new_hash)
        end
      end
      
      # Only write if content is different, to avoid regeneration loops
      if should_write
        FileUtils.mkdir_p(data_dir) # Ensure _data directory exists
        File.open(data_path, 'w') do |file|
          file.write(JSON.pretty_generate(collection_data))
        end
        puts "Updated #{data_path} with new content" # Updated log message
      else
        puts "No changes to #{data_path}, keeping existing file" # Updated log message
      end
    end
  end
end