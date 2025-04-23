---
section: Setup and Configuration
nav_order: 1
title: Repository Setup
---

# Creating Your Repository

The first step in building your Oral History as Data project is to create a GitHub repository using our template. This gives you your own copy of all the necessary files and structure.

## Create a GitHub Account

If you already have a GitHub account, you can skip this step.

1. Go to [github.com](https://github.com/)
2. Click "Sign up" and follow the registration process
3. Verify your email address when prompted
4. Sign in to your new account

## Use the OHD Template

1. Go to the [Oral History as Data repository](https://github.com/oralhistoryasdata/oralhistoryasdata.github.io){:target="_blank"}

2. Click the green "Use this template" button in the upper right corner of the page

   {% include docs/bootstrap/figure.md img="howto/ohd_template.png" caption="Use this template button" alt="Screenshot showing the green Use this template button on GitHub" class="w-75" %}

3. Name your repository
   - Choose a descriptive name related to your project 
   - Keep it concise and use lowercase letters with hyphens instead of spaces
   - Example: "vietnam-veterans-oral-history" or "community-memory-project"

   {% include docs/bootstrap/figure.md img="howto/name_repository.png" caption="Naming your repository" alt="GitHub form for naming a new repository" class="w-75" %}

4. Make sure the repository is set to "Public" (required for GitHub Pages)

5. Click "Create repository from template"
   - This copies all the files from the template into your new repository
   - Unlike a fork, it doesn't maintain connection to the original repository

   {% include docs/bootstrap/figure.md img="howto/create_repository_button.png" caption="Create repository button" alt="Button to create repository from template" class="w-75" %}

## Repository Organization Options

You have two main options for hosting your repository:

### Personal Account (Simplest)
- Host directly from your personal GitHub account
- Simple to manage as a single researcher or small team
- URL will be: `username.github.io/repository-name`

### Organization Account (For Teams/Institutions)
- Create a GitHub organization for more formal projects
- Better for collaborative institutional projects
- Provides a consistent home if project maintainers change
- URL will be: `organization-name.github.io/repository-name`

If you want to create an organization:
1. Go to your GitHub profile settings
2. Select "Organizations" from the sidebar
3. Click "New organization"
4. Follow the prompts to set up your organization
5. Then create your repository within the organization

## Next Steps

After creating your repository, you're ready to customize it for your project by [configuring the settings](configuration.html) in the _config.yml file.