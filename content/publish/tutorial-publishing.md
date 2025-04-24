---
section: Publish Your Site
nav_order: 4
title: Tutorial - Publishing via GH Pages
---

# Publishing Your OHD Site with GitHub Pages

This quick guide shows you how to activate GitHub Pages to make your oral history collection publicly accessible on the web.

## One-Time Setup Process

1. **Access settings**
   - Go to your repository on GitHub
   - Click the "Settings" tab in the top menu
   
   {% include docs/bootstrap/figure.md img="howto/settings_button.png" caption="Settings button" alt="Settings tab location on GitHub" class="w-50" %}

2. **Configure GitHub Pages**
   - In the left sidebar, click "Pages" under "Code and automation"
   - Under "Build and Deployment", select "GitHub Actions" from the dropdown 
   - Click "Configure" on the "GitHub Pages Jekyll" option
   - Click "Commit Changes" to activate the build workflow

3. **Wait for deployment** (typically 2-5 minutes)
   - GitHub will build your site automatically
   - You'll see a deployment notification when complete
   - Your site will be available at `https://[username].github.io/[repository-name]`

## Add Site URL to Repository Info

Make your site URL easy to find:

1. From your repository's main page, locate the "About" section (right sidebar)
2. Click the gear icon
3. Paste your site URL in the "Website" field
4. Click "Save"

## Media Integration Tips

When adding media to your collection:

### External Media (Recommended)
- Use YouTube or Vimeo for video content
- Use SoundCloud for audio recordings
- Link via the `object_location` field in your metadata

### Local Media (Limited)
- Only for small files under 50MB
- Store in the objects/ directory
- GitHub has a 1GB total repository size limit

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 error after publishing | Wait 5-10 minutes for site to propagate |
| Build failures | Check _config.yml for syntax errors |
| Missing content | Verify filenames match metadata objectids |

## Next Steps

1. Share your URL with collaborators and audience
2. Consider adding [Google Analytics](../setup/configuration.html#analytics) for visitor tracking
3. Update content by editing files in your repository

{% include docs/bootstrap/alert.md text="GitHub Pages is free but has usage limits: 100GB bandwidth per month and 10 builds per hour." color="info" %}