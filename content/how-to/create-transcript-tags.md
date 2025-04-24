---
section: How-To Guides
nav_order: 2
title: How to Create Transcript Tags
---

# How to Create and Apply Transcript Tags

This guide explains how to develop and apply tags to your transcript segments for visualization and analysis.

## When You Need This

- You want to visualize patterns across interview segments
- You need to categorize transcript content by topic
- You want to enable filtering and searching by theme

## Step 1: Create a Tagging Vocabulary

Before tagging transcript segments, establish a consistent vocabulary:

1. **Review your transcripts** to identify common themes
2. **Create a list of primary tags** (10-20 is usually sufficient)
3. **Establish tag formatting rules**:
   - Use lowercase terms
   - Avoid special characters
   - Use singular forms (e.g., "education" not "educational")
   - Consider creating hierarchical tags (e.g., "education-elementary")

   ![Example of a tag vocabulary list](SCREENSHOT_PLACEHOLDER)

## Step 2: Add Tags to Your Transcript CSV

1. **Open your transcript CSV** in a spreadsheet program
2. **Navigate to the "tags" column**
3. **Add relevant tags to each segment**:
   - Separate multiple tags with semicolons (e.g., "education; family; career")
   - Be consistent with terminology
   - Not every segment needs tags - focus on meaningful content

   ![Example of applied tags in a transcript CSV](SCREENSHOT_PLACEHOLDER)

## Step 3: Document Your Tag Vocabulary (Optional but Recommended)

Create a filters.csv file to document your tagging system:

1. **Create a new CSV file** named "filters.csv"
2. **Add a header row** with these columns: "field,display_name,values"
3. **List each tag** with descriptions:
   ```
   field,display_name,values
   tags,Education,education
   tags,Family Life,family
   tags,Career History,career
   ```
4. **Save in your _data folder**

## Tips for Effective Tagging

- **Be selective** - too many tags can be overwhelming
- **Focus on themes** rather than specific mentions
- **Consider audience needs** - what will users want to find?
- **Be consistent** across all transcripts in your collection
- **Review periodically** to ensure tags are applied uniformly

## How Tags Power Visualization

Once applied, tags enable:

- Color-coded transcript visualizations
- Interactive filtering of content
- Pattern identification across interviews
- Targeted searching within specific themes

## Next Steps

After tagging your transcripts:
- [Learn how to customize visualization colors](../customize/visualizations.html)
- [Configure your filters display](../customize/customization.html)
- [Test your visualization features](../customize/overview.html)