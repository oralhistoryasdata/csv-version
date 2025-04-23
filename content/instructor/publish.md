---
section: For Instructors
nav_order: 5
title: Publish Your Site on GitHub Pages
---

We will be publishing our collections using a GitHub feature called [GitHub Pages](https://guides.github.com/features/pages/). GitHub Pages provides free static web hosting from any repository. There are *soft* limits and guidelines for gh-pages usage, so if you're planning on also publishing audio or video files with your project, click the button below for more information. 


{% capture modal-publishing%}
### Publishing Audio and Video of Your Interviews:

OHD is built to publish and connect transcripts to videos hosted by YouTube or Vimeo, mp3 files hosted on Soundcloud, or mp3s stored locally. **This is not a requirement!** It's just an option for those that have recorded their interviews and want to publish the recordings online. 

Gh-pages is intended to host relatively simple sites for your GitHub portfolio, project, or documentation. While OHD sites can serve MP3 files stored in the GitHub repository, the project is not set up to serve MP4 or other video files that way. 

That's because there are *soft* limits and guidelines for gh-pages usage: sites should be < 1GB, use < 100GB bandwidth per month, and make < 10 builds per hour. If your site exceeds these quotas, GitHub will send you a notice asking you to modify the repository.{% endcapture %}

{% include docs/bootstrap/modal.md button="Information on Connecting Audio/Video Recordings of Your Interviews" title="Interviews A/V on GitHub Pages" text=modal-publishing color="primary mb-4" %}

## Step 1. Activate GitHub Pages

You've copied the repository and edited the config file. Now you're going to actually "turn on" your website by telling GitHub to generate a website from your repository.

1. On your project repository's homepage, click the "Settings" button (appears on the right, towards the top of the page, just above the green "code" button).
2. On the "Settings" page, locate the "Code and automation" section of the menu on the left.
3. Under "Code and automation," click on "Pages." This will take you to a page titled "GitHub Pages."
4. Underneath the title "GitHub Pages," locate the section titled "Source." Change the dropdown button from "none" to "main."
5. Leave the other dropdown button just as it is (it should say "/(root)"), then click the "Save" button.
6. Once saved, the page will refresh with a green alert that provides the URL where your site will appear. 

**Note that it takes a few minutes for your site to go live, so if you click on the URL right away, you'll only see a 404 webpage.** 
***This is normal!***
Proceed to the next section while you're waiting for your site to build.

## Step 2. Add your new URL to the homepage of your GitHub repository

While you're waiting for your site to build, we will set up our new site URL to display on your GitHub repository homepage, to make it easier for you to access in the future:

1. Copy the URL that GitHub created for you.
2. Go to repository's homepage (if you ever are confused about how to get back to the homepage, click on the "<> Code" tab in the top left section of the screen).
3. On the right side of the code area, to the right of the green "Code" button, look for the word "About". Click the cog icon to the right of "About." A box titled "Edit repository details" will pop up.
4. In the "Edit repository details" popup, paste your URL into the "Website" section, then click the green "Save changes" button. This will post your URL underneath the "About" section on your GitHub repository's homepage, making it easy to access the site in the future!

Now click on your URL again to see if your site is live yet.
If you still get the 404 page, don't worry--sometimes it can take up to five minutes.
Refresh your browser every minute or so to check to see if it's live.

If after five minutes it's still not live, make sure you've followed the steps above, and if you're still having trouble reach out to Professor Wikle who can help you troubleshoot.

**Need a visual? Follow along with the video below:**

{% include docs/video-embed.html youtubeid="d2I6Z3u8_Tc" caption="Turn on GitHub Pages" %}

## Step 3. Celebrate!

Congratulations! 
Today you created a website. 
