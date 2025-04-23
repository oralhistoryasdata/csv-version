---
section: Prepare Your Content
nav_order: 4
title: Tutorial - Transcript Preparation
---

# Step-by-Step Tutorial: Preparing Interview Transcripts

This tutorial guides you through the detailed process of transforming a raw interview transcript into a properly formatted CSV file ready for use with Oral History as Data. Follow these steps if you're starting with a plain text transcript and need detailed guidance.

## Before You Begin

You should have:
- A raw interview transcript (text file, Word document, etc.)
- A spreadsheet program (Google Sheets recommended)
- Basic understanding of CSV file format

## Tutorial Outline

1. [Copy the Template](#step-1-copy-the-template)
2. [Clean Your Text](#step-2-clean-your-text)
3. [Transform into Spreadsheet](#step-3-transform-into-spreadsheet)
4. [Separate by Speaker](#step-4-separate-by-speaker)
5. [Check for Errors](#step-5-check-for-errors)
6. [Polish the Final Transcript](#step-6-polish-the-final-transcript)

## Step 1: Copy the Template

Start by creating a copy of our transcript template:

1. Open [this Google Sheets template](https://docs.google.com/spreadsheets/d/1PZ4b1B8IlR9MGlYkCJFJBNGkCHGxzPPFMmUJ9QfwCE4/copy)
2. Click "Make a copy"
3. Rename your copy to match your interview's objectid (e.g., "smith_john.csv")
4. Note the column headers: **speaker**, **words**, **tags**, **timestamp**

## Step 2: Clean Your Text

Before copying your transcript into the spreadsheet, clean it to remove problematic characters:

## Step 2: Clean Your Transcript 

We clean text before we use it in order to stave off later problems. Smart quotes, single character ellipses, and other artifacts won't render correctly on the web so it's best to clean your text before you transform it for the tool. 

Microsoft Word and Excel both add additional encoded characters (some of which are invisible!!) that will lead an application like ours to crash or that will cause web pages to render text incorrectly. 

Cleaner text also enables easier transfer between formats. By using the forms below, your text should should also be put in a format that is easier to nicely paste into a spreadsheet. 

So please clean your transcript by pasting your transcript in the upper form and pushing the clean button below the lower form: 

{% include docs/wordcleaner.html%}


- Copy the clean version of your transcript from the bottom form by selecting all the text in the form: 
    - Click into the form. 
    - Push CTRL+A on your keyboard to select all of the text in the from. (You will see the contents become highlighted)
    - Push CTRL+C to copy the text to your clipboard. 
- You will paste your clean transcript into the blank transcript starter in the next step. 

Common issues to fix on your own:
- Smart/curly quotes (", ")
- Em dashes (—)
- Special symbols (©, ®, etc.)
- Hidden formatting characters

## Step 3: Transform into Spreadsheet

Now add your transcript to the spreadsheet:

1. Go to your blank transcript template
2. Click the cell under the "words" header
3. Paste your cleaned transcript text
4. If your text has paragraph breaks:
   - Each paragraph should be in its own row
   - If text appears with unwanted spaces between rows, use these steps:
     - Copy all text to a Google Doc
     - Select all text
     - Click the line spacing button
     - Select "Custom spacing"
     - Set "Before" and "After" values to 0
     - Apply and copy the text again

## Step 4: Separate by Speaker

Next, identify and label each speaker:

1. Look at your transcript to identify speaker changes
2. In the "speaker" column, enter the name or identifier for each segment
3. Common conventions:
   - Use consistent names (e.g., "Interviewer", "Subject")
   - For multiple interviewers, use names or initials ("JD", "AS")
   - For anonymous segments, use a blank cell or placeholder

## Step 5: Check for Errors

Review your transcript for common problems:

1. Scan for any missing speaker labels
2. Check for paragraphs that should be split (multiple speakers in one cell)
3. Look for special characters that might cause rendering issues
4. Verify that dialogue flows logically between segments

## Step 6: Polish the Final Transcript

Add finishing touches to your transcript:

1. Add timestamps if you have audio/video:
   - Format: [MM:SS] or [H:MM:SS]
   - Place in the "timestamp" column
   - Match to actual recording times
   
2. Add tags for visualization (can be done later):
   - Use semicolons between multiple tags (e.g., "education; family; career")
   - Follow your project's controlled vocabulary
   
3. Final check and save:
   - File > Download > Comma-separated values (.csv)
   - Ensure filename matches the objectid in your metadata
   - Save using UTF-8 encoding

## Example of Completed Transcript

Here's a small sample of a properly formatted transcript:

```
speaker,words,tags,timestamp
Interviewer,Could you tell me about your childhood?,background,[00:00]
John Smith,"I grew up in Chicago in the 1960s. It was a different time then.",childhood; urban life,[00:15]
Interviewer,What about your education?,education,[01:23]
John Smith,"I attended Lincoln Elementary, then Washington High School.",education; schools,[01:35]
```

For complete examples, check our [sample transcript files](/examples/).

---

*Note: This tutorial provides a detailed walkthrough for preparing transcripts from scratch. If you already have structured transcripts or are working with a team that handles transcript preparation, you may only need the core documentation on [Transcript Format](transcript-format.html) and [Metadata Setup](metadata.html).*