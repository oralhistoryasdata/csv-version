---
section: Publish Your Site
nav_order: 2
title: Publishing via GitHub Pages
---

# Publishing Your Site on GitHub Pages

After setting up your repository and configuring your project, you need to activate GitHub Pages to make your site publicly accessible on the web.

## About GitHub Pages

GitHub Pages is a free hosting service that publishes websites directly from GitHub repositories. It's perfect for project sites like Oral History as Data because:

- It's completely free
- It integrates seamlessly with your repository
- It automatically updates when you make changes
- It provides a reliable, secure web presence

## GitHub Actions

GitHub Actions allows you to use GitHub Pages to host an OHD site on GitHub that require custom plugins. This is important since the default GitHub Pages process doesn't support plugins needed by CB-CSV.

- **Setup**: Configure through repository Settings > Pages
- **Process**: Creates a workflow file (.github/workflows/jekyll.yml) that builds your site with the correct Jekyll version
- **Benefits**: Free hosting with the ability to use plugins
- **Documentation**: [GitHub Actions Guide](https://collectionbuilder.github.io/cb-docs/docs/deploy/actions/)


{% include docs/button.html text="Check out our Step by Step Tutorial to Learn More" color="outline-primary btn-lg" link="content/publish/tutorial-publishing.html"%}




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
