---
section: Publish Your Site
nav_order: 3
title: Other Publishing Options
---

# Publishing in Other Ways

OHD sites, like any static generated website, can be deployed in several ways beyond GitHub Pages. Each option has different benefits depending on your needs and technical requirements.

## Local Development

Regardless of your deployment choice, you can develop and test your site locally if you've installed the [requisite software](https://collectionbuilder.github.io/cb-docs/docs/software/):

Use `bundle exec jekyll s` to start a local development server that lets you view your site in a browser while making changes.

Remember to check the terminal for messages that might help debug issues with your site.


## Self-Hosting (Build and Deploy)

After building your site with Jekyll, you can copy the contents of the "_site" folder to any web server. This is a common method for production sites at formal organizations.

- **Process**: Run `JEKYLL_ENV=production bundle exec jekyll build` (or `rake deploy` shortcut)
- **Deployment Options**:
  - Network drive or shared folder
  - SFTP to upload files to a server
  - cPanel web interface (such as Reclaim Hosting)
- **Benefits**: Complete control over hosting environment
- **Documentation**: [Jekyll Build Guide](https://collectionbuilder.github.io/cb-docs/docs/deploy/build/)

## Render

Render offers a free static site service that connects to your GitHub repository, builds your site with Jekyll, and hosts it at an "onrender.com" URL.

- **Setup**: Create a static site on Render and connect to your GitHub repository
- **Configuration**: Set build command to `bundle exec jekyll build`
- **Note**: Leave url and baseurl blank in "_config.yml" for Render sites
- **Documentation**: [Third Party Services](https://collectionbuilder.github.io/cb-docs/docs/deploy/thirdparty/)



## Other Options

- **GitLab Pages**: Similar to GitHub Pages but with GitLab repositories
- **Cloudflare Pages**: Free static site hosting with global CDN
- **Amazon S3**: Store static files that can be served as a website
- **Azure Static Web Apps**: Microsoft's offering for static site hosting

## Choosing the Right Option

Consider these factors when selecting a deployment method:

1. **Technical requirements**: Does your site use plugins? (If yes, use GitHub Actions, Netlify, Render, or self-hosting)
2. **Collection size**: Are you approaching GitHub's 1GB repository limit? (If yes, consider hosting objects separately)
3. **Custom domain**: Do you need a specific URL? (Most services support this)
4. **Long-term maintenance**: Who will manage updates? (Self-hosting requires more maintenance)
5. **Budget**: All options listed have free tiers available

