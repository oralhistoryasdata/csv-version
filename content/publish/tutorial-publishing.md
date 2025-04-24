---
section: Publish Your Site
nav_order: 4
title: Tutorial - Publishing via GH Pages
---

# Tutorial: Publishing Your Site with GitHub Pages

This step-by-step tutorial shows you how to make your Oral History as Data collection publicly accessible on the web using GitHub Pages, GitHub's free hosting service.

## What You'll Accomplish

By the end of this tutorial, you'll have:
- A public website for your oral history collection
- A shareable URL that anyone can visit
- Automatic updates whenever you modify your content

## Before You Begin

Ensure you have:
- A GitHub repository created from the OHD template
- Your metadata and transcript files uploaded
- Basic configuration completed in _config.yml

## Step-by-Step Publishing Process

### Step 1: Access Repository Settings

1. **Go to your repository on GitHub**
   - Open your web browser
   - Navigate to your repository URL (https://github.com/your-username/your-repository)
   - Make sure you're logged in

2. **Click the "Settings" tab**
   - Find the top menu bar with options like "Code," "Issues," etc.
   - Click "Settings" (usually the rightmost option)
   
   {% include docs/bootstrap/figure.md img="howto/settings_button.png" caption="Settings tab location on GitHub" alt="Screenshot highlighting the Settings tab in the repository menu" class="w-75" %}

### Step 2: Configure GitHub Pages

1. **Navigate to Pages settings**
   - In the left sidebar, scroll down to find "Pages"
   - Click on "Pages" under the "Code and automation" section
   
   ![GitHub settings sidebar with Pages option highlighted](SCREENSHOT_PLACEHOLDER)

2. **Select build method**
   - Under "Build and Deployment", look for "Source"
   - Select "GitHub Actions" from the dropdown menu
   
   ![Build and deployment section with GitHub Actions selected](SCREENSHOT_PLACEHOLDER)

3. **Configure the workflow**
   - A "GitHub Pages Jekyll" option will appear
   - Click the "Configure" button
   - A new page will open with a workflow file
   
   ![GitHub Pages Jekyll option with Configure button](SCREENSHOT_PLACEHOLDER)

4. **Commit the workflow file**
   - Review the workflow file (you don't need to understand all the details)
   - Scroll to the bottom
   - Click the green "Commit changes..." button
   - A dialog will appear
   - Click "Commit changes" again
   
   ![Commit changes dialog for workflow file](SCREENSHOT_PLACEHOLDER)

### Step 3: Wait for Your Site to Build

1. **Monitor the build process**
   - After committing, GitHub will start building your site
   - This typically takes 2-5 minutes for the first build
   - You can see the progress by clicking on the "Actions" tab
   
   ![Actions tab showing build in progress](SCREENSHOT_PLACEHOLDER)

2. **Check deployment status**
   - A green checkmark will appear when the build succeeds
   - Your site will be deployed to: `https://[your-username].github.io/[repository-name]/`
   
   ![Successful deployment with green checkmark](SCREENSHOT_PLACEHOLDER)

### Step 4: Access and Share Your Site

1. **Visit your published site**
   - Use the URL format: `https://[your-username].github.io/[repository-name]/`
   - For example: `https://jsmith.github.io/my-oral-history/`
   - If you see a 404 error, wait a few more minutes and try again
   
   ![Browser showing published OHD site homepage](SCREENSHOT_PLACEHOLDER)

2. **Add the URL to your repository info**
   - Return to your repository's main page
   - Look for the "About" section on the right sidebar
   - Click the gear icon
   - Paste your site URL in the "Website" field
   - Click "Save"
   
   ![Repository About section with Website field completed](SCREENSHOT_PLACEHOLDER)

## Making Updates to Your Published Site

Whenever you make changes to your repository:

1. **Edit files** directly on GitHub or push changes from your computer
2. **GitHub Actions** automatically rebuilds your site
3. **Changes appear** on your site within a few minutes

This automatic process makes it easy to maintain and update your collection over time.

## Common Issues and Solutions

| Problem | Solution |
|---------|----------|
| **404 error when visiting site** | Wait 5-10 minutes; first build takes longer |
| **Build fails** | Check Actions tab for error details; often a YAML formatting issue |
| **Missing images or files** | Ensure paths are correct and files are in the repository |
| **Transcripts don't display** | Verify objectid in metadata matches transcript filename |
| **Slow loading** | Optimize image sizes; use external services for media files |

## What's Next?

Now that your site is published:

1. **Share your collection** with your audience
2. **Test thoroughly** on different devices and browsers
3. **Consider enhancements** like:
   - [Adding Google Analytics](../setup/configuration.html#analytics)
   - [Customizing the theme](../customize/customization.html)
   - [Adding more interviews](../prepare-metadata/tutorial-metadata.html)

{% include docs/bootstrap/alert.md text="GitHub Pages is a free service with some limitations: 1GB storage maximum, 100GB bandwidth per month, and 10 builds per hour." color="info" %}