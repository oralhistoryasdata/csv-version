---
section: Publish and Connect
nav_order: 3
title: Publishing Your Site
---

# Publishing Your Site on GitHub Pages

After setting up your repository and configuring your project, you need to activate GitHub Pages to make your site publicly accessible on the web.

## About GitHub Pages

GitHub Pages is a free hosting service that publishes websites directly from GitHub repositories. It's perfect for project sites like Oral History as Data because:

- It's completely free
- It integrates seamlessly with your repository
- It automatically updates when you make changes
- It provides a reliable, secure web presence

## Activate GitHub Pages

1. From your repository's homepage, click the "Settings" tab in the top menu bar
   
   {% include docs/bootstrap/figure.md img="howto/settings_button.png" caption="Settings button" alt="Location of the Settings tab on GitHub" class="w-75" %}

2. In the left sidebar, find the "Pages" option under "Code and automation"
   
3. Under "Source", change the dropdown from "None" to "main"
   
4. Keep the folder set as "/ (root)"
   
5. Click "Save"
   
6. After saving, the page will refresh with a notice containing your site's URL
   
   {% include docs/bootstrap/alert.md text="Note: It typically takes 1-5 minutes for your site to become available at the provided URL. If you visit too quickly, you'll see a 404 error." color="info" %}

## Add the URL to Your Repository Information

While waiting for your site to build, add the URL to your repository description:

1. Copy the URL GitHub provided (usually in the format `https://username.github.io/repository-name`)

2. Go back to your repository's main page

3. Look for the "About" section on the right sidebar

4. Click the gear icon next to "About"

5. Paste your URL into the "Website" field

6. Click "Save changes"

This makes it easy to find your site URL in the future and shows visitors where to view your project.

## Verify Your Site is Live

1. Wait 3-5 minutes for GitHub to build your site

2. Visit your site URL to confirm it's working properly

3. If you see a 404 error after waiting 5 minutes:
   - Double-check that you configured the GitHub Pages settings correctly
   - Ensure your repository is public, not private
   - Check for any error messages in the Settings > Pages section

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