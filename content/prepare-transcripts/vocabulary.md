---
section: Prepare Your Content
nav_order: 4
title: Creating Your Coding Vocabulary
---

# Developing an Effective Coding System

One of the most powerful features of Oral History as Data is the ability to apply thematic codes to your interview content. This coding creates a foundation for visualization, analysis, and discovery across your collection.

## The Filters.csv File

Your coding system is defined in a file called `filters.csv` that contains two simple columns:

1. **tag**: A short code or keyword (like a hashtag)
2. **description**: A more detailed explanation of what the tag represents

This file creates the connection between your codes and the visualization system.

{% include docs/bootstrap/figure.md img="howto/filters-example.png" caption="Example of a filters.csv file with research codes" alt="Screenshot of a CSV file with tag and description columns" class="w-75" %}

## Creating Your Coding Framework

There are several approaches to developing your coding system, depending on your research methodology:

### Deductive Approach (Theory-Driven)
- Start with pre-defined categories based on your research questions
- Codes are established before analysis begins
- Useful when working with specific theoretical frameworks

### Inductive Approach (Data-Driven)
- Begin with open coding while reviewing your transcripts
- Identify recurring themes and patterns
- Refine and organize codes into a structured system
- Beneficial for exploratory research

### Mixed Approach (Recommended)
- Start with some preliminary codes based on your research focus
- Add new codes as you discover unexpected themes
- Periodically review and refine your coding system

## Practical Implementation

### Option 1: Using a Spreadsheet Program

1. Create a new spreadsheet with two columns: "tag" and "description"
2. Enter your codes and their explanations
3. Save/export as CSV format with the filename `filters.csv`
4. Upload to the `_data` folder of your repository

{% include docs/bootstrap/alert.md text="You can start with our [template spreadsheet](https://docs.google.com/spreadsheets/d/1qPU-7LFZrIWcLiHuTqnlbnRD1869SJalJ5OCL7tGtzE/copy) to ensure your file has the correct format." color="info" %}

### Option 2: Direct GitHub Editing

1. Navigate to the `_data` folder in your repository
2. Edit the existing `filters.csv` file (or create it if it doesn't exist)
3. Ensure the first line contains the headers: `tag,description`
4. Add your codes, one per line
5. Commit your changes

## Best Practices for Coding

1. **Be consistent**: Use the same tags for the same concepts throughout your transcripts
2. **Be concise**: Keep your tags short and memorable
3. **Be specific**: Create codes that capture meaningful distinctions
4. **Be hierarchical**: Consider organizing related concepts with prefixes (e.g., emotion-joy, emotion-fear)
5. **Be flexible**: Add new codes as needed during your research
6. **Be documented**: Keep detailed descriptions of what each code means

## Example Coding Systems

Here are some common coding approaches for different types of oral history projects:

### Life History Project
```
childhood, education, career, family, community, beliefs, challenges, achievements
```

### Community Memory Project
```
places, events, people, traditions, changes, institutions, conflicts, cooperation
```

### Thematic Research Project
```
theme1, theme2, evidence, contradiction, anecdote, reflection, context
```

The visualization system will create a unique color for each tag, allowing you to see patterns across your interviews.

{% include docs/bootstrap/figure.md img="howto/visualization.png" caption="Example of visualization with color-coded tags" alt="Visualization of transcript with color highlighting" class="w-75" %}

Remember that your coding system can evolve as your research progresses. The `filters.csv` file can be updated at any time to add new codes or refine existing ones.