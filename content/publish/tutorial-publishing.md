---
section: Publish Your Site
nav_order: 4
title: Tutorial - Publishing via GH Pages
---

## Step by Step Instructions - Publishing Your Site Via GitHub Pages

1. From your repository's homepage, click the "Settings" tab in the top menu bar
   
   {% include docs/bootstrap/figure.md img="howto/settings_button.png" caption="Settings button" alt="Location of the Settings tab on GitHub" class="w-75" %}

2. In the left sidebar, find the "Pages" option under "Code and automation"


3. In the Build and Deployment section, Select "GitHub Actions" from the dropdown options (change from "Deploy from a branch")
  - An option for "GitHub Pages Jekyll" will appear. Click "Configure"
  - A new page will open with a file appear ("jekyll-gh-page.yml")
  - Click the green "Commit Changes" button at the top right
  - A modal will appear, and you can then describe the change or just click the green "Commit Changes" on the bottom right

4. Wait a few minutes for your site to build
   - See below to learn how to add your new url to your GitHub Repo's information while waiting

5. Access your site at the URL provided
   
   {% include docs/bootstrap/alert.md text="Note: It typically takes 1-5 minutes for your site to become available at the provided URL. If you visit too quickly, you'll see a 404 error." color="info" %}

## Add the URL to Your GitHub Repository Information

While waiting for your site to build, add the URL to your repository description:

1. Copy the URL GitHub provided (usually in the format `https://username.github.io/repository-name`)

2. Go back to your repository's main page

3. Look for the "About" section on the right sidebar

4. Click the gear icon next to "About"

5. Paste your URL into the "Website" field

6. Click "Save changes"

This makes it easy to find your site URL in the future and shows visitors where to view your project.


## GitHub Pages Usage Guidelines

GitHub Pages is intended for documentation and small project sites. Keep these guidelines in mind:

- Sites should be less than 1GB in total size
- Monthly bandwidth limit is 100GB
- Build limits: 10 builds per hour

{% capture media_note %}
### Hosting Media Files

**Options for audio/video files:**

1. **External Services (Recommended):**
   - YouTube or Vimeo for video files
   - SoundCloud for audio files
   - Other dedicated media hosting platforms

2. **Direct Hosting (Limited):**
   - Small audio files (MP3) can be stored in your repository
   - Keep individual files under 50MB when possible
   - Be mindful of the 1GB total repository size limit

**Note:** For extensive media collections, consider using dedicated media hosting services rather than storing large files directly in your repository.
{% endcapture %}

{% include docs/bootstrap/alert.md text=media_note color="secondary" %}

## Next Steps

Now that your site is published, you're ready to [prepare your content](../prepare/overview.html) for the site.