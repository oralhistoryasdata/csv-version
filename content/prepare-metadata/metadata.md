---
section: Prepare Your Metadata
nav_order: 1
title: Creating Your Metadata
---

# Configuring Your Interview Metadata

Before working with individual transcripts, you'll need to set up your project's metadata spreadsheet. This file serves as the central registry for all your interviews and provides the information needed to generate your site's pages.

{% capture connectors %}
**Important Metadata Connectors:** 

The metadata file connects your transcript and AV source (if using) to the published webpage so it's important for all data points to be accurate/connected:


- Your transcript's filename must match the item's `objectid` value!!
- If using, your AV source link (mp3, YouTube, Soundcloud, or Vimeo) should be the item's `object_location` 
{% endcapture %}

{% include docs/alert.html text=connectors color="primary" %}


Oral History as Data uses the [CollectionBuilder-CSV metadata format](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv_metadata/) as its foundation, which means it's compatible with other CollectionBuilder projects and follows established digital collection standards. If you've worked with CollectionBuilder before, you'll find the metadata structure familiar and straightforward.

## Understanding the Metadata CSV

The metadata spreadsheet contains information about each interview in your collection. Each row represents one interview, and columns represent different metadata fields. This structure is based on the CollectionBuilder-CSV metadata model, which follows digital collection standards used by libraries and archives.

### Key Fields

#### Required Fields
- **objectid**: A unique identifier for each interview (used for filenames and URLs)
   - This should also match with the filename of the transcript your using!!
- **title**: The title of the interview
- **display_template**: The template for displaying the item described -- if it's an oral history, it should be `transcript`


#### Standard CollectionBuilder Fields
- **description**: A brief summary of the interview content
- **subject**: Topics covered in the interview (semicolon separated)
- **date**: When the interview took place (YYYY-MM-DD format recommended)
- **location**: Where the interview was conducted
- **latitude**: Geographic coordinate (if relevant)
- **longitude**: Geographic coordinate (if relevant)
- **format**: The format of the original interview (e.g. video/mp4)
- **rights**: Copyright or usage rights statement
- **rightsstatement**: URL to a formal rights statement
- **object_location**: URL to audio/video (if available)
- **image_small***: small image to represent item in the collection (if left blank, will default to bootstrap icon)
- **image_thumb**: thumbnail image to represent item in the collection (if left blank, will default to bootstrap icon)


#### Oral History as Data Specific Fields
- **interviewee**: Name of the person interviewed
- **interviewer**: Name of the person conducting the interview
- **pdf**: Path to transcript pdf file
- **bio**: Biographical information about the interviewee

The CollectionBuilder foundation means your metadata is structured according to best practices in digital collections, making it interoperable with other systems and easily migratable if needed in the future.


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

{% include docs/button.html text="Check out our Step by Step Tutorial to Learn More" color="outline-primary btn-lg" link="content/prepare-metadata/tutorial-metadata.html"%}