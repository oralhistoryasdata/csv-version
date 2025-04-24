---
section: Prepare Your Transcript
nav_order: 7
title: Tutorial - Transcript Preparation
---

# Converting Interview Transcripts to CSV Format

This tutorial provides a streamlined process for converting standard interview transcripts into the structured CSV format required by Oral History as Data.

## Prerequisites

- An interview transcript (Word document, text file, etc.)
- A spreadsheet program (Google Sheets recommended)
- 20-30 minutes per transcript (varies with length)

## Quick Process Overview

1. Create a spreadsheet with the required columns
2. Clean your transcript text
3. Add text to spreadsheet, separating by speaker
4. Add timestamps and tags (optional)
5. Save as CSV with proper filename

## Step 1: Prepare Your Spreadsheet

1. **Create a new spreadsheet** in Google Sheets
2. **Add these column headers** in row 1:
   - **speaker** - Who is speaking in this segment
   - **words** - The actual transcript text
   - **tags** - Topic codes for visualization (optional)
   - **timestamp** - Time markers for audio/video sync (optional)

Alternatively, use our [template spreadsheet](https://docs.google.com/spreadsheets/d/1PZ4b1B8IlR9MGlYkCJFJBNGkCHGxzPPFMmUJ9QfwCE4/copy) (click "Make a copy").

## Step 2: Clean Your Transcript Text

Use the text cleaner tool to remove formatting artifacts:

{% include docs/wordcleaner.html %}

1. **Paste your raw transcript** in the top box
2. **Click "Clean Text"**
3. **Copy the cleaned text** from the bottom box (Ctrl+A, then Ctrl+C)

This removes problematic characters that can cause display issues.

## Step 3: Add Text to Spreadsheet

1. **Paste cleaned text** under the "words" column
2. **Separate by paragraph** - each paragraph should be in its own row
3. **Identify speakers** - add speaker names in the "speaker" column:
   - Be consistent with names (e.g., always use "Interviewer" or "Smith")
   - Each row should contain text from only one speaker

## Step 4: Add Optional Elements

Add these elements if applicable to your project:

**Timestamps** (for audio/video):
- Format as MM:SS or HH:MM:SS (e.g., 01:45 or 1:12:30)
- Add to the "timestamp" column for each segment

**Topic Tags** (for visualization):
- Add relevant topic keywords in the "tags" column
- Separate multiple tags with semicolons (e.g., "education; family; career")
- Use consistent terminology across your project

## Step 5: Save as CSV

1. **Review for errors**:
   - Check for missing speaker labels
   - Verify paragraph separation
   - Ensure consistent formatting

2. **Save as CSV**:
   - File > Download > Comma-separated values (.csv)
   - Name the file to match your metadata objectid (e.g., if metadata objectid is "smith2023", name file "smith2023.csv")

3. **Upload to your repository**:
   - Place in the _data/transcripts/ folder

## Example of Proper Format

```
speaker,words,tags,timestamp
Interviewer,What was your first teaching job?,career; education,00:15
John Smith,"I started at Lincoln Elementary in 1972. It was a challenging environment but rewarding.",education; career; 1970s,00:22
Interviewer,What subject did you teach?,education,01:05
John Smith,"I taught sixth grade math and science, though I preferred the science lessons.",education; science; mathematics,01:12
```

For complete examples, see our [sample files in the examples directory](/examples/).

Need more help? Check our [transcript format specifications](transcript-format.html) or [contact us](https://github.com/oralhistoryasdata/csv-version/issues).