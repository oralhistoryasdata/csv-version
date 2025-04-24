---
section: How-To Guides
nav_order: 5
title: How to Edit Files on GitHub
---

# How to Edit Files on GitHub's Web Interface

This guide shows you how to edit configuration files and content directly through GitHub's web interface, without needing to download or install anything.

## When You Need This

- You need to update your site configuration
- You want to edit page content like the About page
- You need to make quick changes to any text-based file

## Step 1: Navigate to the File You Want to Edit

1. **Go to your repository**
   - Open your GitHub repository in your web browser
   - You should see a list of files and folders

2. **Find the file to edit**
   - Click through folders to locate your file
   - Common files you'll need to edit:
     - `_config.yml`: Main site configuration
     - `_data/theme.yml`: Visual appearance settings
     - `pages/about.md`: About page content
     - `pages/index.md`: Home page content
   
   ![Repository file browser with file highlighted](SCREENSHOT_PLACEHOLDER)

## Step 2: Open the Editor

1. **Click on the file name** to view its contents
   - The file will open in a preview mode first
   
   ![File preview showing current content](SCREENSHOT_PLACEHOLDER)

2. **Click the pencil icon** (Edit this file)
   - Look for this icon in the upper right corner of the file view
   - This opens GitHub's built-in text editor
   
   ![Edit button highlighted in file preview](SCREENSHOT_PLACEHOLDER)

## Step 3: Make Your Changes

### For Configuration Files (YAML format)

When editing `_config.yml` or `_data/theme.yml`:

1. **Update key values**
   - For `_config.yml`, update fields like:
     ```yaml
     title: "Your Collection Title"
     tagline: "Brief description"
     description: "Longer description"
     author: "Your Name or Organization"
     metadata: "metadata" # must match your CSV filename (without .csv)
     ```
   
   - For `theme.yml`, update styling like:
     ```yaml
     # COLORS
     # primary color used in navbar, buttons, & links
     primary-color: "#4051a5"
     # accent color used in accents and highlights
     accent-color: "#f9c443"
     ```

2. **Preserve formatting**
   - Maintain proper indentation (usually 2 spaces)
   - Keep quotes around text values
   - Don't remove or comment out required fields
   
   ![YAML file being edited in GitHub editor](SCREENSHOT_PLACEHOLDER)

### For Content Files (Markdown format)

When editing pages like `about.md` or other content:

1. **Use Markdown formatting**
   - Headings use # symbols: `# Main Heading`, `## Subheading`
   - Links: `[Link text](URL)`
   - Bold: `**bold text**`
   - Italic: `*italic text*`
   - Lists: Start lines with `-` or `1.` for numbered lists

2. **Preserve front matter**
   - Don't change the section between `---` lines at the top
   - This contains page settings
   
   ![Markdown file being edited in GitHub editor](SCREENSHOT_PLACEHOLDER)

## Step 4: Save Your Changes

1. **Review your changes**
   - Check for errors or typos
   - GitHub will highlight your changes in green (additions) and red (deletions)

2. **Scroll to the bottom** to find the commit section

3. **Add a commit message**
   - Write a brief description of what you changed
   - Example: "Update site title and description" or "Add project information to About page"
   
   ![Commit section with commit message entered](SCREENSHOT_PLACEHOLDER)

4. **Click "Commit changes"**
   - Your changes are saved to the repository
   - The site will automatically rebuild with your changes (this takes a few minutes)

## Common Issues and Solutions

| Problem | Solution |
|---------|----------|
| **YAML syntax errors** | Check for proper indentation and quotes around text values |
| **Changes not appearing on site** | Wait 2-5 minutes for the site to rebuild |
| **Edit button not appearing** | Make sure you're logged into GitHub and have write access to the repository |
| **Commit button not working** | Check for error messages about invalid formatting |

## Next Steps

After editing your files:

- [Add your content files](upload-files-to-github.html) like metadata and transcripts
- [Check your site](../publish/tutorial-publishing.html) to verify your changes
- Consider [connecting media](connect-media-to-transcripts.html) to your interviews