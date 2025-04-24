---
section: Setup and Configuration
nav_order: 5
title: Tutorial - Working in Github
---

# Getting Started with GitHub's Web Interface

This tutorial walks you through setting up and configuring your Oral History as Data project entirely through GitHub's web interface, without installing any software on your computer.

## Initial Setup 

### 1. Create Your Repository

1. **Start with the template**
   - Go to the [OHD GitHub Repository](https://github.com/oralhistoryasdata/csv-version)
   - Click the green "Use this template" button
   - Select "Create a new repository"
   - Name your repository (e.g., "my-oral-history-project")
   - Add a short description
   - Choose "Public" visibility
   - Click "Create repository from template"

2. **Familiarize yourself with the structure**
   - Your new repository will contain all necessary files
   - Key directories include:
     - `_data/` for metadata and configuration
     - `_includes/` and `_layouts/` for templates
     - `pages/` for website pages

## Essential Configuration

### 2. Edit _config.yml

1. **Navigate to _config.yml**
   - From your repository's main page, click on the "_config.yml" file
   - Click the pencil icon (Edit) in the upper right corner

2. **Update key settings**
   - `title`: Your collection name (e.g., "Rural Teaching Oral Histories")
   - `tagline`: A brief description
   - `description`: A longer description for SEO and footer
   - `author`: Your name or organization
   - `metadata`: Set to match your CSV filename (without extension)

3. **Save changes**
   - Scroll down and add a commit message like "Update site configuration"
   - Click "Commit changes"

### 3. Add Your Metadata

1. **Create/Edit your metadata file**
   - Go to the "_data" folder
   - If adding a new file:
     - Click "Add file" → "Create new file"
     - Name it (e.g., "metadata.csv")
     - Paste your prepared CSV content
   - If uploading:
     - Click "Add file" → "Upload files"
     - Drag your CSV file or use the file selector

2. **Commit your changes**
   - Add a message like "Add collection metadata"
   - Click "Commit changes"

### 4. Add Transcript Files

1. **Navigate to _data/transcripts/**
   - Create this folder if it doesn't exist:
     - Go to "_data" folder
     - Click "Add file" → "Create new file"
     - Type "transcripts/sample.csv" in the name field (this creates the folder)
   
2. **Add each transcript file**
   - Go to "_data/transcripts/"
   - Click "Add file" → "Upload files" or "Create new file"
   - Add your prepared transcript CSV files
   - Ensure filenames match your metadata objectids

## Customize Your Site

### 5. Edit Key Pages

1. **About page**
   - Navigate to "pages/about.md"
   - Click the pencil icon to edit
   - Update with information about your project
   - Use [Markdown formatting](https://www.markdownguide.org/basic-syntax/) for headings, links, etc.

2. **Home page**
   - Edit "pages/index.md" to customize your home page content

3. **Additional pages**
   - Other pages in the "pages" directory can be customized as needed

### 6. Visual Customization

1. **Theme settings**
   - Edit "_data/theme.yml" to change colors, fonts, and other visual elements
   - Changes to this file immediately affect your site's appearance

## Next Steps

After these initial configurations, proceed to [publishing your site](../publish/tutorial-publishing.html) using GitHub Pages.

Remember that any edits you make will be reflected in your site after the build process completes (typically a few minutes).
