---
section: Setup and Configuration
nav_order: 2
title: Configuration
---

# Configuring Your Project

After creating your repository, you need to customize it for your specific project. This is done by editing the `_config.yml` file, which controls the site's settings and appearance.

## Accessing the Configuration File

1. From your repository's homepage, locate and click on the `_config.yml` file
   
   {% include docs/bootstrap/figure.md img="howto/configscreen.png" caption="Location of _config.yml file" alt="Screenshot showing the _config.yml file in the repository file list" class="w-75" %}

2. Click the pencil icon in the top right to edit the file
   
   {% include docs/bootstrap/figure.md img="howto/edit_pencil.png" caption="Edit button" alt="Screenshot showing the edit pencil icon" class="w-75" %}

## Essential Settings to Update

The configuration file contains many settings, but these are the most important ones to customize:

### Site Information

```yaml
# Site title appears in the header
title: Your Project Title
# Title icon (from bootstrap-icons folder)
title-icon: soundwave
# Description appears in the footer
description: "Description of your oral history project"
# Keywords for search engines
keywords: "oral history, your topics, interviews"
```

### Authorship and Rights

```yaml
# Author name, displayed in credits
author: Your Name
# Year or date published
publication_year: 2023
# Your GitHub repository URL
source-code: https://github.com/username/repository-name
# Content license
content_license: "CC BY-SA"
```

### Theme Customization (Optional)

You can customize the site's appearance by uncommenting and modifying these lines:

```yaml
# These options tweak CSS values
header-background: "#17a2b8"
header-text-color: "#ffffff" 
link-color: "#17a2b8"
text-color: "#333333"
```

### Metadata Configuration

Oral History as Data uses a metadata system based on [CollectionBuilder-CSV](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv_metadata/), which means it's compatible with CollectionBuilder projects and follows established digital collection standards.

In your _config.yml, specify your metadata file:

```yaml
# CSV file containing interview metadata (CollectionBuilder-CSV format)
metadata-csv: your-metadata-filename.csv
```

This approach allows you to:
- Use the same metadata across different CollectionBuilder projects
- Follow established metadata standards for digital collections
- Easily migrate your collection to other systems in the future

## Configuration Tips

1. **YAML Syntax**: The configuration file uses YAML format, which is sensitive to:
   - Indentation (use spaces, not tabs)
   - Quotation marks around values with special characters
   - Colons followed by a space

2. **Comments**: Lines starting with `#` are comments and don't affect the site

3. **Testing Changes**: After saving changes, wait a few minutes then refresh your site

## Advanced Configuration

The template includes additional configuration options that you may explore as your project matures:

- **Google Analytics**: Add tracking code if you need site analytics
- **Custom Navigation**: Modify the site structure
- **Collection Settings**: Adjust how materials are displayed

## Saving Your Changes

1. Scroll to the bottom of the page
2. Add a brief description of your changes in the "Commit changes" box
3. Click the green "Commit changes" button

Your site will automatically rebuild with your new configuration. This process typically takes 1-2 minutes.

## Next Steps

After configuring your site, you're ready to [publish it on GitHub Pages](publishing.html).