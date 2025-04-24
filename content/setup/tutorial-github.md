---
section: Setup and Configuration
nav_order: 5
title: Tutorial - Working in Github
---

# GitHub Web Interface Tutorial

This guide walks you through the process of building your CollectionBuilder site entirely through GitHub's web interface without installing any software on your computer. While a [local development environment](development-options.html) offers more flexibility and immediate feedback, the web interface is an excellent way to get started.


### Configuring Your Site

#### Editing _config.yml

The _config.yml file contains the main configuration settings for your site:

1. **Navigate to _config.yml**
   - Return to the main repository page
   - Click on the "_config.yml" file

2. **Edit the file**
   - Click the pencil icon (Edit this file) in the upper right
   - Update the following key settings:
     - `title`: Your collection's title
     - `description`: A longer description used for SEO and footer description
     - `author`: Your name or organization
     - `metadata`: Verify this matches your CSV filename (without .csv extension)

3. **Commit your changes**
   - Add a commit message like "Update site configuration"
   - Click "Commit changes"

## Adding Content to Your Repository

After creating your repository from a CollectionBuilder template, you'll need to customize it with your own content and configuration.

### Adding Metadata

1. **Navigate to the _data folder**
   - Return to the main repository page
   - Click on the "_data" folder

2. **Upload your metadata CSV**
   - Follow the same upload process described above
   - Make sure your CSV follows the [CollectionBuilder metadata guidelines](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv/)
   - Name your file to match the metadata filename in _config.yml (typically "metadata.csv")

3. **Commit your changes**
   - Add a descriptive commit message
   - Click "Commit changes"


### Editing the About Page

The about.md file contains the content for your About page:

1. **Navigate to pages/about.md**
   - Go to the "pages" folder
   - Click on "about.md"

2. **Edit the file**
   - Click the pencil icon
   - The content uses Markdown formatting
   - Update the text with information about your collection
   - You can add links, images, and formatting using [Markdown syntax](https://www.markdownguide.org/basic-syntax/)

3. **Commit your changes**
   - Add a message like "Update about page content"
   - Click "Commit changes"
