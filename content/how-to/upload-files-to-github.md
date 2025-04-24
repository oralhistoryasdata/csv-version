---
section: How-To Guides
nav_order: 6
title: How to Upload Files to GitHub
---

# How to Upload Files to GitHub

This guide shows you how to add CSV files and other content to your GitHub repository using the web interface.

## When You Need This

- You need to upload your metadata CSV file
- You want to add transcript files to your project
- You need to upload images or other media files

## Step 1: Navigate to the Correct Directory

1. **Go to your repository**
   - Open your GitHub repository in your web browser

2. **Navigate to the destination folder**
   - For metadata: Click on the `_data` folder
   - For transcripts: Navigate to `_data`, then create or enter the `transcripts` folder
   - For images: Click on the `objects` folder
   
   ![Repository main page with _data folder highlighted](SCREENSHOT_PLACEHOLDER)

## Step 2: Upload Your Files

### Option A: Upload Existing Files

1. **Click "Add file" button** at the top of the file list
   - A dropdown menu will appear
   
   ![Add file dropdown menu](SCREENSHOT_PLACEHOLDER)

2. **Select "Upload files"** from the dropdown menu
   - The file upload interface will appear
   
   ![Upload files interface](SCREENSHOT_PLACEHOLDER)

3. **Add your files**
   - Drag and drop files from your computer onto the upload area
   - OR click "choose your files" to select files using your file browser
   - You can upload multiple files at once
   
   ![Files being dragged onto upload area](SCREENSHOT_PLACEHOLDER)

4. **Commit your changes**
   - Scroll down to the "Commit changes" section
   - Add a descriptive commit message
     - Example: "Add metadata and transcript files" or "Upload interview images"
   - Click "Commit changes"
   
   ![Commit section with message entered](SCREENSHOT_PLACEHOLDER)

### Option B: Create a New File

This is useful for creating small files like CSV files directly on GitHub:

1. **Click "Add file" button** at the top of the file list

2. **Select "Create new file"** from the dropdown menu
   - A text editor will open
   
   ![Create new file interface](SCREENSHOT_PLACEHOLDER)

3. **Name your file**
   - Type the filename in the field at the top
   - Include the proper extension (e.g., `.csv`, `.md`)
   - For transcripts, type `transcripts/filename.csv` to create in the transcripts subfolder
   
   ![Filename field being completed](SCREENSHOT_PLACEHOLDER)

4. **Add your content**
   - Type or paste your file content in the main editor area
   - For CSV files, ensure comma-separated formatting is maintained
   
   ![CSV content being entered in the editor](SCREENSHOT_PLACEHOLDER)

5. **Commit your new file**
   - Scroll down to the "Commit new file" section
   - Add a descriptive commit message
   - Click "Commit new file"

## Step 3: Verify Your Upload

1. **Check that your files appear** in the directory
   - GitHub will return you to the folder view
   - Your newly uploaded or created files should appear in the list
   
   ![Directory listing showing newly added files](SCREENSHOT_PLACEHOLDER)

2. **Click on a file** to verify its contents
   - CSV files will be displayed in a formatted table view
   - Images will be displayed as previews
   
   ![CSV file preview showing table format](SCREENSHOT_PLACEHOLDER)

## Important Tips for OHD Files

### Metadata File

- Upload to the `_data` directory
- Filename should match what's in your `_config.yml` (typically `metadata.csv`)
- Ensure it has all required fields (objectid, title, display_template)

### Transcript Files

- Upload to the `_data/transcripts` directory
- Filenames must match the objectid values in your metadata
- Example: If objectid is "smith_john", filename must be "smith_john.csv"

### Creating the Transcripts Folder

If the `transcripts` folder doesn't exist yet:

1. Click "Add file" → "Create new file"
2. Type "transcripts/placeholder.csv" in the name field
3. Add some sample content
4. Commit the file to create the folder
5. You can delete this placeholder file later

## Common Issues and Solutions

| Problem | Solution |
|---------|----------|
| **File too large** | GitHub has a 100MB file size limit; consider external hosting for large media |
| **Upload failing** | Try uploading fewer files at once |
| **CSV displaying incorrectly** | Verify your CSV format; avoid Excel and use Google Sheets or plain text editors |
| **Transcripts not showing on site** | Check that filenames exactly match objectids in metadata |

## Next Steps

After uploading your files:

1. [Configure your site](edit-github-files.html) if you haven't already
2. [Publish your site](../publish/tutorial-publishing.html) to make it accessible online
3. [Test your site](../publish/tutorial-publishing.html#common-issues-and-solutions) to ensure everything works correctly