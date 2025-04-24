---
section: Prepare Your Metadata
nav_order: 6
title: Tutorial - Metadata Preparation
---

# Step-by-Step: Creating Your Collection Metadata

This tutorial walks you through creating the metadata spreadsheet that organizes your oral history collection and enables its display on the web.

## What You'll Create

By the end of this tutorial, you'll have:
- A complete metadata CSV file that catalogs all your interviews
- Proper connections between transcripts and media files
- Information that powers browsing, search, and display features

## Before You Begin

Gather these materials:
- Information about each interview (dates, participants, locations, etc.)
- Any media URLs (YouTube, SoundCloud, etc.) if applicable
- 15-20 minutes of time

## Tutorial Steps

### Step 1: Get Started with a Template

1. **Download the template spreadsheet**
   - Click to download the [demo-ohd-metadata.csv](/examples/demo-ohd-metadata.csv) file
   - Save it to your computer
   
   ![Example metadata CSV file downloaded to computer](SCREENSHOT_PLACEHOLDER)

2. **Open in Google Sheets**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Click File → Import → Upload
   - Select the downloaded template file
   - Choose "Import data" when prompted
   
   ![Google Sheets import screen with file being uploaded](SCREENSHOT_PLACEHOLDER)

3. **Examine the structure**
   - Review the column headers in the first row
   - Note the example entries in subsequent rows
   - These show the format for each field

   ![Google Sheet showing metadata template with column headers](SCREENSHOT_PLACEHOLDER)

### Step 2: Understand Required Fields

Every interview in your collection needs these three essential fields:

1. **objectid**
   - A unique identifier for each interview
   - Use simple lowercase names with underscores (e.g., "smith_john")
   - **Important**: This MUST match your transcript filename
   
2. **title**
   - The complete title of the interview
   - Be descriptive and consistent
   - Example: "Interview with John Smith on Mining History"

3. **display_template**
   - Controls how the item displays
   - Always set to "transcript" for interviews
   
   ![Spreadsheet highlighting the three required fields](SCREENSHOT_PLACEHOLDER)

### Step 3: Add Your Interviews

1. **Create a new row for each interview**
   - Delete the example rows once you understand the format
   - Add a new row for each interview in your collection
   
   ![Empty spreadsheet with just the header row](SCREENSHOT_PLACEHOLDER)

2. **Fill in the required fields**
   - Add the objectid, title, and display_template for each interview
   - Make objectid values simple and URL-friendly
   
   ![Spreadsheet with basic required information added](SCREENSHOT_PLACEHOLDER)

3. **Add recommended fields**
   - Complete additional fields for better display and searchability:
     - **interviewer**: Person conducting the interview
     - **interviewee**: Person being interviewed
     - **date**: Interview date (YYYY-MM-DD format)
     - **description**: Brief content summary (1-2 sentences)
     - **subject**: Main topics (separated by semicolons)
     - **location**: Where the interview took place
   
   ![Spreadsheet with all recommended fields completed](SCREENSHOT_PLACEHOLDER)

### Step 4: Connect Media (Optional)

If you have audio or video recordings:

1. **Prepare your media links**
   - For YouTube videos: Copy the video URL or ID
   - For SoundCloud: Copy the track URL
   - For local files: Note the filename

2. **Add to object_location field**
   - YouTube format: `https://youtu.be/VIDEO_ID`
   - SoundCloud format: `https://soundcloud.com/USER/TRACK_NAME`
   - Local file format: `objects/filename.mp3`
   
   ![Spreadsheet showing completed object_location field with media URLs](SCREENSHOT_PLACEHOLDER)

### Step 5: Finalize and Save

1. **Review all entries**
   - Check that all required fields are completed
   - Verify spelling and formatting
   - Ensure objectids match your transcript filenames

2. **Save as CSV file**
   - Click File → Download → Comma-separated values (.csv)
   - Name the file according to your preference (typically "metadata.csv")
   
   ![File download menu showing CSV option](SCREENSHOT_PLACEHOLDER)

3. **Upload to your repository**
   - Place the CSV file in the `_data/` folder
   - Update `_config.yml` to reference this filename if needed
   
   ![GitHub interface showing file being uploaded to _data folder](SCREENSHOT_PLACEHOLDER)

## Example of a Complete Metadata File

Here's how a properly formatted metadata file might look with multiple entries:

```
objectid,title,display_template,interviewer,interviewee,date,description,subject,location,object_location
smith_john,"Interview with John Smith on Mining History",transcript,"Sarah Johnson","John Smith",2023-05-15,"John Smith discusses his 40-year career in local mines, focusing on safety improvements.","mining; labor history; safety","Coalville, PA",https://youtu.be/BX_bURONf78
garcia_maria,"Maria Garcia on Immigration and Education",transcript,"David Lee","Maria Garcia",2023-06-10,"Maria Garcia shares her experience immigrating to the US as a child and later becoming an educator.","immigration; education; family","Phoenix, AZ",https://soundcloud.com/user/maria-garcia-interview
taylor_robert,"Robert Taylor: Civil Rights Activism in the 1960s",transcript,"Emily Wong","Robert Taylor",2023-04-22,"Robert Taylor recounts his participation in civil rights demonstrations and community organizing.","civil rights; activism; history","Atlanta, GA",
```

## What's Next?

After completing this tutorial:
1. [Prepare your transcript files](../prepare-transcripts/tutorial-transcript.html)
2. [Configure your site settings](../setup/configuration.html)
3. [Publish your collection](../publish/tutorial-publishing.html)

Need more help? See our [metadata specifications](metadata.html) or [contact us](https://github.com/oralhistoryasdata/csv-version/issues).