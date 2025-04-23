---
section: Advanced Topics
nav_order: 3
title: Troubleshooting
---

# Troubleshooting Guide

This guide addresses common issues you might encounter when working with Oral History as Data and provides solutions to resolve them.

## Site Build Issues

### Site Not Building on GitHub Pages

**Symptoms:** 
- The site shows a 404 error after activation
- GitHub Pages shows build errors in the Settings tab

**Common Causes and Solutions:**

1. **Invalid _config.yml**
   - YAML is sensitive to proper formatting
   - Check for indentation errors and missing colons
   - Validate your YAML with a tool like [YAML Lint](http://www.yamllint.com/)

2. **Missing Required Files**
   - Ensure you have all necessary files from the template
   - Check that your repository contains _config.yml, index.md, and all required folders

3. **Large Files in Repository**
   - GitHub Pages has a 1GB repository size limit
   - Check for and remove large media files
   - Use external hosting for audio/video content

### Jekyll Build Errors

**Symptoms:**
- You receive an email from GitHub about build failures
- The site builds locally but not on GitHub Pages

**Solutions:**

1. **Check the Build Logs**
   - Go to repository Settings > Pages
   - Look for error messages in the build log

2. **Liquid Syntax Errors**
   - Look for unclosed tags or quotes in your Liquid templating code
   - Check custom includes or layouts for syntax errors

3. **Front Matter Issues**
   - Ensure all pages have proper YAML front matter with three dashes (---)
   - Check for invalid characters or formatting in front matter

## Content Display Issues

### Transcripts Not Appearing

**Symptoms:**
- Interview page loads but transcript content is missing
- Error messages in the browser console

**Common Causes and Solutions:**

1. **CSV Naming Mismatch**
   - Ensure transcript CSV files match the objectid in metadata exactly
   - Check case sensitivity (smith_john.csv vs Smith_John.csv)

   ```
   Metadata objectid: smith_john
   Correct filename: smith_john.csv
   ```

2. **CSV Format Issues**
   - Check that your CSV has the required columns (speaker, words, tags)
   - Ensure the CSV is properly formatted with comma separators
   - Save CSV files with UTF-8 encoding

3. **Special Characters**
   - Special characters or quotes may cause parsing errors
   - Use the [Text Cleaner Tool](/assets/js/textcleaner.html) to sanitize text
   - Check for hidden characters or line breaks

### Visualization Problems

**Symptoms:**
- Tags don't appear with proper colors
- Clicking on tags doesn't filter the content
- Visualization appears broken or incomplete

**Solutions:**

1. **Filters.csv Issues**
   - Ensure your _data/filters.csv file exists and is properly formatted
   - Check that tag names in transcripts match exactly with the filters.csv

2. **JavaScript Errors**
   - Open browser developer tools (F12) and check the console for errors
   - Look for 404 errors that might indicate missing JavaScript files

3. **CSS Conflicts**
   - Custom CSS might override visualization styles
   - Check your _sass/_custom.scss file for conflicting rules

### Audio/Video Connection Issues

**Symptoms:**
- Media player doesn't appear or doesn't play
- Timestamp links don't navigate to the correct points in the recording

**Solutions:**

1. **URL Format**
   - Check that media URLs are correctly formatted and accessible
   - For YouTube/Vimeo, verify the video ID is correct

2. **Timestamp Format**
   - Ensure timestamps follow the correct format: [MM:SS] or [H:MM:SS]
   - Check for spaces or incorrect characters in timestamps

3. **CORS Issues**
   - Some media hosts restrict embedding through CORS policies
   - Check browser console for CORS errors
   - Use media hosting platforms that allow embedding

## Metadata and Navigation Issues

### Browse/Search Not Working

**Symptoms:**
- Search returns no results
- Browse pages show incomplete or incorrect information

**Solutions:**

1. **Metadata Format**
   - Check that your metadata CSV follows the CollectionBuilder-CSV format
   - Ensure required fields (objectid, title, date) are present and formatted correctly

2. **Index Generation**
   - The search index might not be generating properly
   - Check for JavaScript errors in the console
   - Rebuild the site after making metadata changes

3. **URL Configuration**
   - Make sure your site's URL is properly configured in _config.yml
   - Check the `baseurl` setting if your site is in a subdirectory

## Performance Issues

### Slow Page Loads

**Symptoms:**
- Pages take a long time to load
- Visualizations render slowly

**Solutions:**

1. **Reduce Media File Sizes**
   - Optimize images to reduce file size
   - Use external hosting for large media files

2. **Minimize Custom JavaScript**
   - Excessive custom JavaScript can slow down page rendering
   - Combine and minify JavaScript files

3. **Pagination for Large Collections**
   - For collections with many interviews, implement pagination
   - Split transcripts into logical sections for faster loading

## Advanced Troubleshooting

### Debugging Locally

For complex issues, setting up a local development environment can help:

1. **Install Jekyll locally**
   ```bash
   gem install bundler jekyll
   ```

2. **Clone your repository**
   ```bash
   git clone https://github.com/username/your-repository.git
   cd your-repository
   ```

3. **Install dependencies and run locally**
   ```bash
   bundle install
   bundle exec jekyll serve
   ```

4. **View detailed error messages**
   - Local builds provide more detailed error messages
   - Check the terminal output for specific errors

### Technical Support Resources

If you encounter persistent issues:

1. **GitHub Issues**
   - Check the [OHD GitHub Issues](https://github.com/oralhistoryasdata/oralhistoryasdata.github.io/issues) for similar problems
   - Search through closed issues for solutions

2. **Jekyll Documentation**
   - Many issues relate to underlying Jekyll functionality
   - Consult the [Jekyll documentation](https://jekyllrb.com/docs/)

3. **CollectionBuilder Community**
   - Since OHD is based on CollectionBuilder, check their [documentation](https://collectionbuilder.github.io/cb-docs/)
   - Join the CollectionBuilder community for assistance

## Common Error Messages and Solutions

| Error Message | Likely Cause | Solution |
|---------------|--------------|----------|
| "Liquid Exception: No such file or directory" | Missing include or layout file | Check file paths and names, ensure all template files are present |
| "Invalid date" | Incorrectly formatted date in metadata | Use YYYY-MM-DD format for dates |
| "undefined method" | Ruby/Jekyll plugin error | Check for plugin compatibility, update dependencies |
| "YAML Exception" | Syntax error in YAML files | Validate YAML syntax, check indentation |
| "404 - transcript.json not found" | Missing or incorrectly named transcript file | Check transcript CSV filename matches objectid |

Remember that most issues can be resolved by carefully checking file names, paths, and formatting. Taking a methodical approach to troubleshooting will help you identify and fix problems quickly.