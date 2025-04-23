---
section: Prepare Your Transcript
nav_order: 6
title: Polish Your Transcript
---


## Step 6: Polish Your Transcript

Now you'll need to read through your interview with three goals:

1. [Separating big blurbs of text into smaller chunks](#text)
2. [Correcting typos](#typos)
3. [Locating timestamps](#time)

{:.pt-3 #text}
### Separating Text

- If you encounter an especially large cell of text, you can create a new row below that cell and separate the text into two parts

- To separate a cell like this:

{% include docs/figure.html img="/prep/transcript10.png" caption="Large Cell of Text" alt="a screenshot of pasting text in google sheets" width="100%" %}

- Select the row so it's highlighted in blue

- Right click on that row and select `Insert 1 below`

{% include docs/figure.html img="/prep/transcript11.png" caption="Insert 1 below" alt="a screenshot of pasting text in google sheets" width="100%" %}

- Insert the speaker's initials into the new `speaker` cell

- Select and copy half the text from the original `words` cell, and paste it below into the cell you just created (make sure to also delete the text you just pasted from its original cell)

- Finished, your split cell should look like this:

{% include docs/figure.html img="/prep/transcript12.png" caption="Text Split Between Two Rows" alt="a screenshot of pasting text in google sheets" width="100%" %}


{:.pt-3 #typos}
### Correcting Typos

Google Sheets includes a spell checker to help you find misspellings. 

- Use the spell check feature by going to the `Tools` menu and selecting `Spelling > Spell check` 
- After you've corrected any misspellings, give the transcript a quick read to make sure there are no obvious typos or mistakes. 
- You will be analyzing the transcript for subject matter in the next section, so you will have time to further check your transcript then. 



{:.pt-3 #text}
### Locating and Moving Timestamps

{% include docs/bootstrap/alert.md text="Timestamps are optional, so if you don't have them just skip this step." %} 

- Timestamps may be located periodically throughout the interview at the end of the text in the `words` cells, or perhaps on their own line:

{% include docs/figure.html img="/prep/transcript13.png" caption="Timestamps" alt="a screenshot of pasting text in google sheets" width="100%" %}

- These need to be moved to the `timestamp` column

- When you come across a timestamp:

    - Change the datatype of the `timestamp` column to "Duration":

        - To do this, select the entire `timestamp` column, so it's highlighted. Then, in the Google Sheets menu select `Format` > `Number` > `Duration`

    {:.pt-3}
    - Copy and paste the timestamp you found into that row's `timestamp` cell

    - Surround the timestamp with brackets. If it's currently surrounded by parentheses, replace the parentheses (`()`) with brackets (`[]`)

    - Put it into the format `[HH:MM:SS]` where `H` = hour, `M` = minute, and `S` = second

        - **Example:** `(7:55)` should become `[00:07:55]`

{% include docs/figure.html img="/prep/transcript14.png" caption="Formatted Timestamps" alt="a screenshot of pasting text in google sheets" width="100%" %}
