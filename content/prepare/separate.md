---
section: Prepare Your Transcript
nav_order: 4
title: Separate Your Cells
---


## Separate Your Cells

{:.pt-4}
### Add a Separator
{:.pb-3}

- Open Find and Replace: 

    - Press `ctrl` + `f` (on PC) or `cmd` + `f` (on Mac)

    - A search box should appear in the top right of your screen. Click on the `More options` button to the right of the search box (three vertical dots). A box labeled `Find and replace` will appear in the middle of your screen.
    
{% include docs/figure.html img="/prep/transcript19.png" caption="More options" alt="a screenshot of pasting text in google sheets" width="75%" %}

{:.pt-2}
- In the `Find` box, enter the initials or name of the first speaker (ex. `RS` or `Rebecca Scofield`)
    - If you include a colon (`:`) after the name or initials, include that in the find box as well 

- In the `Replace` box, enter what you put in the Find box above, plus an asterisk (`*`) (ex. `RS*`). I
    - If there was a colon included, remove the colon and replace it with an asterisk (`*`).

{% include docs/figure.html img="/prep/transcript20.png" caption="Find and Replace" alt="a screenshot of pasting text in google sheets" width="75%" %}

- Click the `Replace all` button. Then click `Done`

- Repeat the steps above for the initials of the second speaker and the speakers' full names

- Your spreadsheet should now look like this:

{% include docs/figure.html img="/prep/transcript18.png" caption="Add a Separator" alt="a screenshot of pasting text in google sheets" width="100%" %}

{:.pt-4}
### Separate Your Cells (Split Text to Columns)
{:.pb-3}


- If they aren't selected already, select the cells you just pasted, so that your sheet looks like this:

{% include docs/figure.html img="/prep/transcript21.png" caption="Select Cells" alt="a screenshot of pasting text in google sheets" width="100%" %}

- Click on `Data` > `Split Text to Columns`

{% include docs/figure.html img="/prep/transcript22.png" caption="Data > Split Text to Columns" alt="a screenshot of pasting text in google sheets" width="100%" %}

- A little box labeled `Separator:` will appear near the bottom of your screen. Click on the arrows to the right of `Detect Automatically`

{% include docs/figure.html img="/prep/transcript23.png" caption="Separator" alt="a screenshot of pasting text in google sheets" width="100%" %}

- Select `Custom` from the list of choices that appears.

- A box should appear labeled `Custom separator`

- Enter an **asterisk (`*`) followed by a space (` `)** into this box.

{:.alert .alert-danger .text-center .mx-5}
Make sure **your asterisk is followed by a space**! Otherwise your transcript might not work right for the website.

{% include docs/figure.html img="/prep/transcript24.png" caption="Enter an asterisk (*) followed by a space ( )" alt="a screenshot of pasting text in google sheets" width="100%" %}

- The text should separate into a new column automatically:

{% include docs/figure.html img="/prep/transcript25.png" caption="Separated Text" alt="a screenshot of pasting text in google sheets" width="100%" %}




