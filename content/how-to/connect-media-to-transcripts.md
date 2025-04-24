---
section: How-To Guides
nav_order: 3
title: How to Connect Media to Transcripts
---

# How to Connect Audio/Video to Transcripts

This guide explains how to link your interview transcripts with their corresponding audio or video recordings.

## When You Need This

- You have audio/video recordings of your interviews
- You want viewers to be able to listen to/watch interviews while reading
- You want to create timestamps for synchronization

## Option 1: External Media Services (Recommended)

### Step 1: Upload to a Media Platform

1. **Choose a platform**:
   - **YouTube** for video files
   - **Vimeo** for video files (alternative to YouTube)
   - **SoundCloud** for audio files
   - **Internet Archive** for public domain content

2. **Upload your media file**:
   - Create an account if needed
   - Follow the platform's upload process
   - Set appropriate privacy settings

   ![Example of uploaded media on YouTube](SCREENSHOT_PLACEHOLDER)

3. **Get the media ID or URL**:
   - **YouTube**: Use the ID from the URL (e.g., "dQw4w9WgXcQ" from youtube.com/watch?v=dQw4w9WgXcQ)
   - **Vimeo**: Use the ID number
   - **SoundCloud**: Use the track URL
   - **Internet Archive**: Use the item identifier

### Step 2: Add Media Reference to Your Metadata

1. **Open your metadata CSV**
2. **Add the media reference** to the `object_location` field:
   - For YouTube: `https://youtu.be/YOUR_VIDEO_ID`
   - For Vimeo: `https://vimeo.com/YOUR_VIDEO_ID`
   - For SoundCloud: `https://soundcloud.com/USER/TRACK_NAME`

   ![Example of metadata with object_location field](SCREENSHOT_PLACEHOLDER)

## Option 2: Direct Hosting (For Smaller Files)

1. **Prepare your media file**:
   - Keep files under 50MB when possible
   - Use MP3 format for audio
   - Use MP4 format for video

2. **Upload to your repository**:
   - Place files in the `objects/` directory
   - Consider compressed versions for better performance

3. **Reference in metadata**:
   - Use the file path in the `object_location` field
   - Example: `objects/smith_interview.mp3`

## Adding Timestamps for Synchronization

To sync transcript segments with specific points in your media:

1. **Open your transcript CSV**
2. **Add timestamps in the "timestamp" column**:
   - Use MM:SS format (e.g., "05:42")
   - Use HH:MM:SS for longer recordings (e.g., "1:12:36")
   - Match timestamps to the actual recording
   - Not every segment needs a timestamp

   ![Example of transcript with timestamps](SCREENSHOT_PLACEHOLDER)

## Testing Your Media Connection

1. **Publish your site** or preview locally
2. **Navigate to the interview page**
3. **Verify media player appears** and functions correctly
4. **Test timestamp synchronization** if applicable

## Troubleshooting

- **Media doesn't appear**: Check the URL/ID format in metadata
- **Player appears but won't play**: Verify media permissions on hosting platform
- **Timestamps don't work**: Ensure format follows MM:SS or HH:MM:SS
- **Slow loading**: Consider reducing media file size or using external services

## Next Steps

- [Learn about customizing the media player](../customize/customization.html)
- [Set up advanced visualization features](../customize/visualizations.html)