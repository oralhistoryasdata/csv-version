---
section: Prepare Your Metadata
nav_order: 6
title: Tutorial - Metadata Preparation
---

# Creating Your Collection Metadata

This concise tutorial guides you through creating the metadata spreadsheet that drives your oral history collection.

## Quick Start Guide

1. **Download the template**: Get the [demo-ohd-metadata.csv](/examples/demo-ohd-metadata.csv) file
2. **Open in Google Sheets**: Avoid Excel, which can corrupt special characters
3. **Modify columns as needed**: Keep required fields, add others as desired
4. **Add one row per interview**: Each interview gets its own metadata entry
5. **Save as CSV**: Use UTF-8 encoding

## Required Fields

These three fields are **mandatory** for every interview:

| Field | Description | Example |
|-------|-------------|---------|
| **objectid** | Unique identifier (used for filename matching) | `smith_john` |
| **title** | Complete title of interview | `Interview with John Smith on Mining History` |
| **display_template** | Set to "transcript" for all interviews | `transcript` |

## Important Guidelines

- **Transcript filenames** must match the objectid (e.g., if objectid is "smith_john", the transcript file must be "smith_john.csv")
- **Place transcripts** in the `_data/transcripts/` folder
- **Metadata filename** should be set in `_config.yml` (typically "metadata.csv")
- **Save in CSV format**, not Excel format, to preserve special characters

## Recommended Fields

These additional fields enhance your collection:

| Field | Purpose | Example |
|-------|---------|---------|
| **interviewer** | Person conducting interview | `Sarah Johnson` |
| **interviewee** | Person being interviewed | `John Smith` |
| **date** | Interview date (ISO format) | `2023-05-15` |
| **description** | Brief content summary | `Discussion of mining career and safety improvements` |
| **subject** | Main topics (semicolon separated) | `mining; labor history; workplace safety` |
| **location** | Interview or subject location | `Coalville, PA` |
| **object_location** | Link to audio/video (YouTube etc.) | `https://youtu.be/BX_bURONf78` |

## Complete Example

Here's a complete metadata entry:

```
objectid,title,display_template,interviewer,interviewee,date,description,subject,location,object_location
smith_john,"Interview with John Smith on Mining History",transcript,"Sarah Johnson","John Smith",2023-05-15,"John Smith discusses his 40-year career in local mines, focusing on safety improvements.","mining; labor history; safety","Coalville, PA",https://youtu.be/BX_bURONf78
```

Once your metadata is ready, save it as "metadata.csv" and upload it to your repository's `_data` folder.