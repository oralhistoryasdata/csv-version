---
section: Prepare Your Transcript
nav_order: 3
title: Transform Your Transcript Into a Google Sheet
---

{:.pt-4 .my-4}
## Step 3: Paste Your Transcript Into Google Sheets

- Go to your blank transcript template (now renamed!). 

- Click on the cell underneath `speaker` 

- Press CTRL+V on your keyboard to paste the contents of your clean transcript into the spreadsheet. 

- This should paste all the transcript text into the rows of the second column

- Alternatively, if you're using a Google Doc of your transcript: 
    - Open your transcript as a Google Doc
    - Copy all of the text of the transcript
    - Switch back to the Google Sheet you created
    - Click on the cell underneath `speaker` 
    - Click on `Edit` > `Paste Special` > `Paste Values Only`

{% include docs/figure.html img="/prep/transcript1.png" caption="Edit > Paste Special > Paste Values Only" alt="a screenshot of pasting text in google sheets" width="100%" %}

- **Note**: Your transcript rows should ***not*** have a space between them. If you *do* have spaces between your rows, see below.

{% capture spacing %}
### Removing Spacing Between Rows

If the text you paste into your Google Sheet looks like this...

{% include docs/figure.html img="/prep/transcript15.png" caption="Transcript With Spaces" alt="a screenshot showing how to edit a markdown file on GitHub" width="100%" %}

...you need to remove the space between paragraphs using a Google Doc. Follow the steps below:

{:.pt-3}
- Either return to the Google Doc version of your transcript or create a new google doc by clicking this link: [docs.new](https://docs.new)

{:.pt-1}
- Select all of the transcript text

{:.pt-1}
- In the top right of the screen, look for the `line spacing` button (three horizontal lines next to a vertical arrow). In the dropdown options, click on `Custom spacing`.

{% include docs/figure.html img="/prep/transcript16.png" caption="Line Spacing" alt="a screenshot showing how to edit a markdown file on GitHub" width="100%" %}

- A `Custom spacing` popup will appear. Make sure the text boxes to the right of `Before` and `After` have values of `0`. Click `Apply`:

{% include docs/figure.html img="/prep/transcript17.png" caption="Custom spacing" alt="a screenshot showing how to edit a markdown file on GitHub" width="100%" %}

- Now follow the steps above to copy and paste this text into your Google Sheet

{% endcapture %}

{% include docs/bootstrap/alert.md color="warning my-5" text=spacing%}
