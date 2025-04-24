---
nav_order: 2
title: Quick Start
---
This guide will help you set up your Oral History as Data project and understand the basic workflow.

## Prerequisites

Before you begin, you should have:

1. **GitHub Account**: A free account at [github.com](https://github.com/)
2. **Interview Content**: At least one interview transcript ready to work with
3. **Basic Familiarity**: Some understanding of spreadsheets and CSV files

## Quick Start

### 1. Set Up Your Repository

1. Go to the [Oral History as Data repository](https://github.com/learn-static/oral-history-as-data)
2. Click the green "Use this template" button
3. Name your new repository and click "Create repository from template"
4. Your repository is now ready to customize

### 2. Configure Your Project

1. Edit the `_config.yml` file to update:
   - Project title and description
   - Metadata CSV filename (defaults to `demo-ohd-metadata.csv`)
   - Other project details

### 3. Prepare Your CSV Files

You'll need a main CSV and transcript CSV files:

**Metadata File** (`demo-ohd-metadata.csv` or your custom name):
- Contains information about each interview using the [CollectionBuilder-CSV format](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv_metadata/)
- Each row represents one interview
- Required fields include: objectid, title, date
- Compatible with other CollectionBuilder projects
- Store this file in the root directory
- See our [examples/demo-ohd-metadata.csv](/examples/demo-ohd-metadata.csv) for a sample

**Transcript Files**:
- For each interview, create a CSV with four columns: speaker, words, tags, timestamp
- The timestamp field is optional but enables synchronization with audio/video
- Each row represents one segment of dialogue
- Store these in the `_data/transcripts/` directory
- Name each file to match the item's objectid in your metadata 
- Check our [examples folder](/examples/) for sample transcript files

### 4. Create Your Coding System

1. Create or edit `_data/filters.csv`
2. Define your tag codes and descriptions
3. Apply these codes in the "tags" column of your transcript files
4. You can also use our [Python scripts](https://journal.code4lib.org/articles/18286) to automatically tag your transcripts.

### 5. Publish Your Site

1. Go to Settings → Pages in your GitHub repository
2. In the Build and Deployment section, Select "GitHub Actions" from the dropdown options (change from "Deploy from a branch")
3. An option for "GitHub Pages Jekyll" will appear. Click "Configure"
4. A new page will open with a GitHub Action file opened 
5. Click the green "Commit Changes" button at the top right
6. A modal will appear: just click the green "Commit Changes" on the bottom right
7. Wait a few minutes for your site to build
8. Access your site at the URL provided

## Project Structure Overview

```
your-repository/
├── _data/
│   ├── your-metadata.csv     # Your collection metadata file
│   ├── filters.csv           # Your coding vocabulary
│   ├── theme.yml             # Your site configuration (basic customizations)
│   └── transcripts/          # Folder for transcript CSVs
│       └── example.csv       # Sample transcript
├── _config.yml               # Project configuration (title, metadata, etc.)
└── objects/                  # Folder for interview images
```

## More Detail

For more detail on the instructions above, explore the rest of this site:

1. **Explore the Prepare section** to learn how to format your transcripts
2. **Review the Coding section** for best practices in developing your controlled vocabulary
3. **Visit the Publish section** for details on customizing your site and sharing it publicly

{% include docs/button.html link="prepare/overview.html" text="Continue to Preparation" color="primary btn-lg mt-2 mb-4" %}