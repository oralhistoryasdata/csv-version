---
section: Publish and Connect
nav_order: 3
title: Generate Interview Pages
---

## Using CSV Metadata to Generate Pages

Oral History as Data now uses a CSV metadata file to automatically generate interview pages, making the process more streamlined for researchers working with multiple interviews.

### About the Metadata Spreadsheet

The system uses a CSV file (like the included `/_data/demo-ohd-metadata.csv`) with the following key fields:

- **objectid**: A unique identifier for each interview (used to link to transcript files)
- **title**: The title of the interview
- **interviewee**: Name of the person being interviewed
- **interviewer**: Name of the person conducting the interview
- **date**: Date the interview took place
- **description**: A brief description of the interview content
- **subject**: Keywords or subjects covered in the interview
- **location**: Where the interview was conducted
- **object_transcript**: Path to the transcript file
- **object_location**: URL to audio/video (if available)
- **bio**: Biographical information about the interviewee

{% include docs/bootstrap/figure.md img="howto/metadata-spreadsheet.png" caption="Example of the metadata spreadsheet format" alt="Sample CSV metadata file" class="w-75" %}

### Setting Up Your CSV File

1. **Create your metadata file**:
   - Use a spreadsheet program (Excel, Google Sheets, etc.) to create your metadata
   - Ensure all required columns are included
   - Save/export the file as CSV format
   - Name it something descriptive (e.g., `project-interviews.csv`)

2. **Add your CSV file to your project**:
   - Upload the CSV file to the root directory of your repository
   - The file should be placed at the same level as the `_config.yml` file

3. **Update Configuration**:
   - Open your `_config.yml` file
   - Locate or add the `metadata-csv` setting and set it to your CSV filename
   - Example: `metadata-csv: project-interviews.csv`

### Field Requirements and Best Practices

{:.alert .alert-info .mb-5}
The **objectid** field is crucial for connecting your metadata to transcript files. It must match the name of your transcript file in the `_data/transcripts` folder (without the .csv extension).

{% capture csv_requirements %}
**Critical fields**:
- **objectid**: Must be unique and match your transcript filename (without extension)
- **title**: Should be descriptive and include interviewee name
- **object_transcript**: If using transcripts, this should be the path to the transcript file
- **object_location**: If using audio/video, this should be the URL to the media file

**Media notes**: If you're not including audio or video, you can leave the object_location field blank.
{% endcapture %}

{% include docs/bootstrap/alert.md color="warning" text=csv_requirements %}

### How Page Generation Works

When you build your site:

1. The system reads your CSV metadata file
2. For each row in the CSV, it creates a page with a URL based on the objectid
3. The page displays the metadata and links to any associated transcripts or media
4. All styling and formatting is handled automatically

This approach eliminates the need to manually create individual markdown files for each interview, making it easier to manage larger collections of oral histories.

