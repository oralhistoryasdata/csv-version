---
section: Prepare Your Transcript
nav_order: 7
title: Tutorial - Transcript Preparation
---

# Complete Tutorial: Converting a Transcript to CSV Format

This beginner-friendly tutorial guides you through converting a standard interview transcript into the structured CSV format used by Oral History as Data. Follow this step-by-step process to prepare your first transcript.

## What You'll Create

By the end of this tutorial, you'll have:
- A properly formatted transcript CSV file
- Content ready for upload to your OHD site
- A file that can be visualized and searched

## Before You Begin

Gather these materials:
- A raw interview transcript (Word document, text file, etc.)
- Access to Google Sheets (recommended) or another spreadsheet program
- 30-45 minutes of time (less for subsequent transcripts)

## Tutorial Steps

### Step 1: Create Your Spreadsheet

1. **Open Google Sheets** in your web browser
   - Go to [sheets.google.com](https://sheets.google.com)
   - Click "Blank" to create a new spreadsheet
   
   ![New blank Google Sheet with spreadsheet grid visible](SCREENSHOT_PLACEHOLDER)

2. **Set up your column headers**
   - In cell A1, type: **speaker**
   - In cell B1, type: **words**
   - In cell C1, type: **tags**
   - In cell D1, type: **timestamp**

   ![Google Sheet with column headers added in row 1](SCREENSHOT_PLACEHOLDER)

   **Tip:** Alternatively, use our [template spreadsheet](https://docs.google.com/spreadsheets/d/1PZ4b1B8IlR9MGlYkCJFJBNGkCHGxzPPFMmUJ9QfwCE4/copy) and click "Make a copy".

### Step 2: Clean Your Transcript Text

1. **Open your transcript document**
   - Open your interview transcript in Word, Google Docs, or another program
   - Select all text (Ctrl+A or Cmd+A) and copy it (Ctrl+C or Cmd+C)

2. **Use the text cleaner tool**
   - Paste your text in the top box below
   - Click the "Clean Text" button
   - The cleaned version will appear in the bottom box

   {% include docs/wordcleaner.html %}

3. **Copy the cleaned text**
   - Click in the bottom box
   - Select all text (Ctrl+A or Cmd+A) 
   - Copy it (Ctrl+C or Cmd+C)

   ![Text cleaner tool with text in both boxes and highlighted selection](SCREENSHOT_PLACEHOLDER)

### Step 3: Structure Your Transcript

1. **Paste text into your spreadsheet**
   - Click in cell B2 (under the "words" column)
   - Paste your cleaned text (Ctrl+V or Cmd+V)
   - The text will appear in a single cell

   ![Spreadsheet with all text pasted into a single cell in column B](SCREENSHOT_PLACEHOLDER)

2. **Separate text by paragraph**
   - If your text appears in a single cell, follow these steps:
     - Select the cell with your text
     - Click Data → Split text to columns
     - In the separator options, choose "Custom" and enter a paragraph mark (usually \n)
     - Click "Split"
   - Each paragraph should now be in its own row

   ![Spreadsheet showing text split into multiple rows](SCREENSHOT_PLACEHOLDER)

3. **Identify speakers**
   - In column A, add the speaker name for each segment of text
   - For example:
     - "Interviewer" for questions
     - "John Smith" for the interviewee's responses
   - Be consistent with names throughout

   ![Spreadsheet with speaker names added in column A](SCREENSHOT_PLACEHOLDER)

### Step 4: Add Optional Information

1. **Add timestamps** (if you have audio/video)
   - In column D, add timestamps for key segments
   - Format as MM:SS (e.g., 01:45) or HH:MM:SS (e.g., 1:12:30)
   - Match to the corresponding points in your recording

   ![Spreadsheet with timestamps added in column D](SCREENSHOT_PLACEHOLDER)

2. **Add topic tags** (for visualization)
   - In column C, add relevant topic keywords
   - Use semicolons between multiple tags (e.g., "education; family; career")
   - Be consistent with terminology across segments

   ![Spreadsheet with topic tags added in column C](SCREENSHOT_PLACEHOLDER)

### Step 5: Finalize and Save

1. **Review your spreadsheet**
   - Ensure each row has a speaker identified
   - Check that text is properly separated (one speaker segment per row)
   - Verify any timestamps or tags are correctly formatted

2. **Save as CSV file**
   - Click File → Download → Comma-separated values (.csv)
   - Name your file to match the objectid in your metadata
   - Example: If your interview has objectid "smith_john" in metadata, name the file "smith_john.csv"

   ![File download menu showing CSV option](SCREENSHOT_PLACEHOLDER)

3. **Upload to your repository**
   - Place the CSV file in the _data/transcripts/ folder
   - For GitHub users:
     - Navigate to the _data/transcripts/ folder in your repository
     - Click "Add file" → "Upload files"
     - Drag your CSV file or use the file selector
     - Commit the changes

   ![GitHub upload interface with file being added](SCREENSHOT_PLACEHOLDER)

## Example of Completed Transcript

Here's how a properly formatted transcript CSV should look:

```
speaker,words,tags,timestamp
Interviewer,What was your first teaching job?,career; education,00:15
John Smith,"I started at Lincoln Elementary in 1972. It was a challenging environment but rewarding.",education; career; 1970s,00:22
Interviewer,What subject did you teach?,education,01:05
John Smith,"I taught sixth grade math and science, though I preferred the science lessons.",education; science; mathematics,01:12
```

## What's Next?

After completing this tutorial:
1. [Create metadata for your interview](../prepare-metadata/tutorial-metadata.html)
2. [Connect audio/video to your transcript](../how-to/connect-media-to-transcripts.html)
3. [Explore more advanced tagging techniques](../how-to/create-transcript-tags.html)

Need more help? See our [sample files](/examples/) or [contact us](https://github.com/oralhistoryasdata/csv-version/issues).