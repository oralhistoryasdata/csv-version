---
section: Publish and Connect
nav_order: 1
title: Adding Content to GitHub
---

# Adding Content to Your Repository

After setting up your repository and preparing your content, you're ready to add your interview materials to your project. This page explains how to upload files to GitHub.

## Uploading Transcripts to GitHub

1. From your repository's homepage, navigate to the `_data/transcripts` folder
   - First click on the `_data` folder
   - Then click on the `transcripts` folder

2. Click the "Add file" button in the upper right, then select "Upload files"

3. Either drag and drop your transcript CSV files or use the file browser to select them
   - Remember that transcript filenames should match the objectid in your metadata
   - Example: For an interview with objectid "smith_jane", the file should be "smith_jane.csv"

4. After selecting your files, scroll down to the "Commit changes" section

5. Add a brief description of what you're uploading, such as "Add interview transcripts for Smith and Jones"

6. Click the green "Commit changes" button

{% include docs/bootstrap/alert.md text="GitHub has a file size limit of 25MB per file for web uploads. If your files are larger, you'll need to use Git on your local computer to push changes." color="warning" %}

## Understanding GitHub's Role

GitHub serves dual purposes in your Oral History as Data project:

1. **Version Control**: GitHub tracks all changes to your files, creating a complete history of your project
2. **Web Publishing**: Through GitHub Pages, your repository content is transformed into a website

Your transcript files are stored in the repository but processed by the system to create the interactive visualizations and web pages.

## Collaborative Work

If you're working with a team on your oral history project:

1. Add collaborators through your repository Settings > Collaborators
2. Create a clear workflow for who adds what content
3. Consider using branches for major changes or experimental features
4. Always include clear commit messages when adding or changing files

{% include docs/bootstrap/alert.md text="For more advanced Git and GitHub workflows, check out the [Git/GitHub Learning Module](https://github.com/learn-static/foundations-0-github/blob/main/intro-github.md)." color="secondary" %}

## Next Steps

After uploading your transcript files, you can [connect audio or video sources](av.html) to enhance your interviews.

