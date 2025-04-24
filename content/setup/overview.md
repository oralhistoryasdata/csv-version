---
section_id: Setup and Configuration
nav_order: 4
title: Project Setup
---

# Setting Up Your OHD Project

The first step in creating an Oral History as Data site is setting up your GitHub repository and configuring basic project settings. This section provides a streamlined guide to get your project infrastructure ready.

## What You'll Learn

- How to create a GitHub repository from the OHD template
- How to configure essential project settings
- How to prepare your development environment

## The Setup Process

1. **Create repository** - Generate your own copy of the OHD template on GitHub
2. **Configure project** - Set your collection title, description, and basic settings
3. **Prepare environment** - Choose between web-based editing or local development

This initial setup takes approximately 15-20 minutes and requires no programming knowledge.

## Key Configuration Files

| File | Purpose |
|------|---------|
| **_config.yml** | Main project settings (title, metadata filename, etc.) |
| **_data/theme.yml** | Visual appearance settings (colors, navigation options) |
| **_data/config-*.csv** | Feature-specific settings for various site functions |

Each configuration file is documented with inline comments explaining available options.

## Documentation & Resources

| Resource | Purpose |
|----------|---------|
| [GitHub Repository Setup](repository.html) | Step-by-step guide to creating your repository |
| [Configuration Options](configuration.html) | Detailed explanation of all settings |
| [Development Options](development-options.html) | Choose between web-based or local development |
| [GitHub Tutorial](tutorial-github.html) | Hands-on tutorial for GitHub beginners |

{% include docs/bootstrap/button.md color="success btn-lg" text="Start Setup" link="repository.html" %}