---
section: Prepare Your Metadata
nav_order: 6
title: Tutorial - Metadata Preparation
---

# Step-by-Step Tutorial: Preparing Collection Metadata

This tutorial will step you through the creation of the metadata for your collection.  

## Creating Your Metadata Spreadsheet

1. Start with a copy of the sample spreadsheet:
   - Download the [demo-ohd-metadata.csv](/examples/demo-ohd-metadata.csv) file
   - Open it in Google Sheets, or another spreadsheet program (*** Do NOT Open IT in EXCEL!)
   - Check out our [examples folder](/examples/) for complete sample files

2. Review the column structure:
   - Keep all the required column headers (objectid,title,display_template)
   - You can add additional columns as needed
   - You can remove columns that aren't needed
   
3. Add your interviews:
   - Create a new row for each interview
   - Ensure each interview has a unique objectid
   - Ensure your transcript's filename matches the `objectid` for the item, and that it is stored in the `_data/transcripts/` folder
   - Each interview should have the `display_template` of `transcript`
   
4. When finished:
   - Save/export as a CSV file
   - Do not use EXCEL!!
   - Name according to your preference (e.g., `john_doe.csv`) but make sure the filename and objectid match!


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
object_location: https://youtu.be/BX_bURONf78
bio: John Smith (b. 1945) worked as a miner from 1963-2003 and served as safety coordinator for the last decade of his career.
```

Each interview in your collection will follow this pattern, allowing the system to automatically generate pages for browsing and visualization.