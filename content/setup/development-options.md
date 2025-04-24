---
section: Setup and Configuration
nav_order: 3
title: Development Options
---

# Development Options for CollectionBuilder

CollectionBuilder offers two primary approaches to developing your digital collection: using GitHub's web interface or setting up a local development environment. Each approach has its advantages, and many users start with the web interface before transitioning to local development as their project and skills grow.

## Web Interface Development

The GitHub web interface allows you to create and modify your CollectionBuilder site entirely through your browser without installing any additional software. This approach is:

- **Accessible**: Requires only a web browser and GitHub account
- **Low barrier to entry**: No special software or technical setup needed
- **Convenient**: Make changes from any computer with internet access
- **Straightforward**: Direct editing of files in a visual interface

However, web interface development does have some limitations:
- Changes aren't visible until GitHub Pages builds your site (usually 1-2 minutes)
- More complex customizations can be cumbersome
- Limited ability to test changes before publishing

The [GitHub Web Interface Tutorial](github-web-interface.html) walks you through the entire process of building your collection using only your browser.

## Local Development Environment

Setting up a local development environment means installing software on your computer that allows you to run a complete version of your CollectionBuilder site locally. While this requires more initial setup, it offers significant advantages:

- **Immediate feedback**: See changes instantly without waiting for GitHub to process them
- **Faster iteration**: Quick refresh cycle lets you experiment more freely
- **Better debugging**: More detailed error messages and testing capabilities
- **Advanced features**: Easier access to more complex customizations
- **Valuable skills**: Learn tools and workflows used by web professionals
- **Platform independence**: Skills transfer to other static site projects

### Setting Up a Local Environment

To get started with local development, you'll need to install:

1. **Git**: Version control software
2. **Ruby**: Programming language that Jekyll is built with
3. **Jekyll**: Static site generator that powers CollectionBuilder

The CollectionBuilder documentation provides detailed guides for setting up these tools:

- [Installing Git](https://collectionbuilder.github.io/cb-docs/docs/software/git/)
- [Installing Ruby](https://collectionbuilder.github.io/cb-docs/docs/software/ruby/)
- [Installing Jekyll](https://collectionbuilder.github.io/cb-docs/docs/software/jekyll/)

Once these tools are installed, you can:

1. Clone your repository to your local machine
2. Make changes to files in your preferred text editor
3. Run `bundle exec jekyll serve` to preview your site locally
4. Use Git to commit and push changes to GitHub when ready

### Recommended Tools for Local Development

While not required, these tools can enhance your local development experience:

- **Visual Studio Code**: A free, powerful text editor with Git integration
- **GitHub Desktop**: A user-friendly interface for Git operations
- **Ruby Version Manager**: Helps manage Ruby versions (particularly important for macOS users)

## Combining Approaches

Many CollectionBuilder users adopt a hybrid approach:

- Start with the web interface to get comfortable with the basic concepts
- Transition to local development as your project grows more complex
- Use the web interface for quick text edits when away from your development machine
- Use local development for major redesigns or when adding multiple files

## Choosing Your Path

Consider these questions when deciding which approach to use:

- Are you new to web development? The web interface offers an easier starting point.
- Do you plan to heavily customize your site? Local development will be more efficient.
- How comfortable are you with installing technical software? Local development requires more setup.
- How frequently will you make changes? Local development shines with frequent iterations.

Regardless of which path you choose, CollectionBuilder's documentation supports both approaches, and you can always switch between them as your needs and skills evolve.