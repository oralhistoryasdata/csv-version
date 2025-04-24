---
section: How-To Guides
nav_order: 1
title: How to Clean Transcript Text
---

# How to Clean Transcript Text for Web Display

This guide explains how to properly clean interview transcript text to ensure it displays correctly on the web and works with the OHD system.

## When You Need This

- You have raw transcript text from Word, PDF, or another source
- Your text contains special characters like smart quotes, em dashes, etc.
- You need to prepare text for pasting into a spreadsheet

## Steps to Clean Your Text

1. **Access the text cleaner tool**
   - Navigate to the Transcript Preparation page in your OHD site
   - Locate the text cleaner tool near the top of the page

2. **Clean your text**
   - Copy your raw transcript text
   - Paste it in the top text box of the cleaner tool
   - Click the "Clean Text" button
   - Copy the cleaned version from the bottom box (Ctrl+A, then Ctrl+C)

   ![Text Cleaner Tool with text pasted in top box and cleaned text in bottom box](SCREENSHOT_PLACEHOLDER)

## What Gets Fixed

The text cleaner automatically fixes these common issues:

- **Smart/curly quotes** ("") → straight quotes ("")
- **Em dashes** (—) → double hyphens (--)
- **Special symbols** (©, ®, etc.) → plain text versions
- **Hidden formatting characters** → removed
- **Multiple spaces** → consolidated
- **Inconsistent line breaks** → normalized

## Why Cleaning Matters

1. **Prevents rendering issues**
   Certain characters like smart quotes won't display properly on the web.

2. **Avoids technical problems**
   Hidden characters from Word and other programs can cause errors in the CSV format.

3. **Ensures consistency**
   Different word processors add different special characters that need standardization.

## Advanced Cleaning (If Needed)

If the automatic cleaner doesn't fix all issues:

- Use a plain text editor (like Notepad, TextEdit, or VS Code)
- Search and replace problematic characters manually
- For extremely complex formatting issues, consider saving as plain text first

## Next Steps

After cleaning your text, proceed to [converting your transcript to CSV format](../prepare-transcripts/tutorial-transcript.html) for use in your OHD project.