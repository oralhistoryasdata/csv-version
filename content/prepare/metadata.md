---
section: Prepare Your Content
nav_order: 1
title: Setting Up Your Metadata
---

# Configuring Your Interview Metadata

Before working with individual transcripts, you'll need to set up your project's metadata spreadsheet. This file serves as the central registry for all your interviews and provides the information needed to generate your site's pages.

Oral History as Data uses the [CollectionBuilder-CSV metadata format](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv_metadata/) as its foundation, which means it's compatible with other CollectionBuilder projects and follows established digital collection standards. If you've worked with CollectionBuilder before, you'll find the metadata structure familiar and straightforward.

## Understanding the Metadata CSV

The metadata spreadsheet contains information about each interview in your collection. Each row represents one interview, and columns represent different metadata fields. This structure is based on the CollectionBuilder-CSV metadata model, which follows digital collection standards used by libraries and archives.

### Key Fields

#### Required Fields
- **objectid**: A unique identifier for each interview (used for filenames and URLs)
- **title**: The title of the interview
- **date**: When the interview took place (YYYY-MM-DD format recommended)

#### Standard CollectionBuilder Fields
- **description**: A brief summary of the interview content
- **subject**: Topics covered in the interview (semicolon separated)
- **location**: Where the interview was conducted
- **latitude**: Geographic coordinate (if relevant)
- **longitude**: Geographic coordinate (if relevant)
- **format**: The format of the original interview (e.g., "Oral History Interview")
- **rights**: Copyright or usage rights statement
- **rightsstatement**: URL to a formal rights statement

#### Oral History as Data Specific Fields
- **interviewee**: Name of the person interviewed
- **interviewer**: Name of the person conducting the interview
- **object_location**: URL to audio/video (if available)
- **object_transcript**: Path to transcript file (if separate from main system)
- **bio**: Biographical information about the interviewee

The CollectionBuilder foundation means your metadata is structured according to best practices in digital collections, making it interoperable with other systems and easily migratable if needed in the future.

## Creating Your Metadata Spreadsheet

1. Start with a copy of the sample spreadsheet:
   - Download the [demo-ohd-metadata.csv](/examples/demo-ohd-metadata.csv) file
   - Open it in Google Sheets, or another spreadsheet program (*** Do NOT Open IT in EXCEL!)
   - Check out our [examples folder](/examples/) for complete sample files

   
2. Review the column structure:
   - Keep all the original column headers
   - You can add additional columns as needed
   
3. Add your interviews:
   - Create a new row for each interview
   - Fill in as many fields as possible
   - Ensure each interview has a unique objectid
   
4. When finished:
   - Save/export as a CSV file
   - If using Excel, choose "CSV UTF-8" format if available
   - Name according to your preference (e.g., `interviews.csv`)

## Configuring Your Site

After creating your metadata CSV, you need to tell your site to use it:

1. Open your `_config.yml` file
2. Look for or add the `metadata-csv` setting
3. Set it to your CSV filename (e.g., `metadata-csv: interviews.csv`)
4. Save the file

## Tips for Effective Metadata

- **Be consistent**: Use the same formatting and style across all entries
- **Be thorough**: Complete metadata improves searchability and context
- **Use standardized dates**: YYYY-MM-DD format is recommended
- **Check objectids**: These must be unique and contain no spaces or special characters
- **Consider privacy**: Only include information appropriate for public sharing

## Example Metadata Entry

```
objectid: smith_john
title: Interview with John Smith on Local Mining History
interviewee: John Smith
interviewer: Sarah Johnson
date: 2023-05-15
description: John Smith discusses his 40-year career in the Coalville mines, focusing on technological changes and safety improvements.
subject: mining; labor history; workplace safety
location: Coalville, PA
latitude: 41.4090
longitude: -75.6624
object_location: https://example.com/audio/smith_interview.mp3
bio: John Smith (b. 1945) worked as a miner from 1963-2003 and served as safety coordinator for the last decade of his career.
```

Each interview in your collection will follow this pattern, allowing the system to automatically generate pages for browsing and visualization.