---
section: Prepare Your Transcript
nav_order: 2
title: Formatting Your Transcripts
---

# Formatting Your Transcripts

Each interview transcript in Oral History as Data needs to be formatted as a CSV file with specific columns to ensure proper display and functionality. 

While the main project metadata follows the [CollectionBuilder-CSV format](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv_metadata/), the transcript format is specific to Oral History as Data and designed to enable the specialized visualization and navigation features.

## Transcript CSV Structure

Your transcript CSV files must include these columns (in this order):

1. **speaker**: The person speaking in this segment (interviewer or interviewee)
2. **words**: The text of what was said
3. **tags**: Your thematic codes for this segment (optional, but enables visualization)
4. **timestamp**: Timecode reference for audio/video syncing (optional)

The first row of your CSV file should contain these column headers.

{% include docs/bootstrap/alert.md text="The **timestamp** field enables synchronization between transcript text and audio/video recordings. When properly formatted, users can click on a timestamp to jump to that point in the recording." color="info" %}

## Example Transcript Format

Here's how a typical transcript segment looks:

```
speaker,words,tags,timestamp
Interviewer,Could you tell me about your early experiences?,background,[00:00]
Interviewee,"Yes, I grew up in a small town in the 1950s. It was quite different from today.",childhood; rural life,[00:15]
Interviewer,What was school like for you?,education,[01:32]
Interviewee,"School was challenging but rewarding. I particularly enjoyed mathematics and science classes.",education; academic interests,[01:45]
```

## Timestamp Format

The timestamp field accepts several formats:

- **[00:00]** - Minutes:Seconds
- **[0:00:00]** - Hours:Minutes:Seconds
- **[00:00.00]** - Minutes:Seconds.Milliseconds

When connecting to audio/video sources, these timestamps create clickable links that allow users to navigate directly to specific points in the recording.

## Sample Files

We've provided several example transcript files in our [examples folder](/examples/):

- [armantrout.csv](/examples/armantrout-transcript-example.csv)
- [gluck.csv](/examples/gluck-transcript-example.csv)
- [mohammad.csv](/examples/mohammad-transcript-example.csv)
- [wrigley.csv](/examples/wrigley-transcript-example.csv)

You can download and examine these files to better understand the format requirements.

## Tips for Creating Transcript CSVs

1. **Start with text**: Begin with a cleaned transcript in plain text
2. **Create segments**: Break the text into logical chunks by speaker
3. **Add speaker names**: Label who is speaking in each segment
4. **Apply coding**: Add relevant tags based on your controlled vocabulary
5. **Add timestamps**: If you have audio/video, note the time points

{% include docs/bootstrap/alert.md text="**Important:** Make sure your CSV files are encoded as UTF-8 to properly handle special characters." color="warning" %}

## CSV Naming Convention

Name your transcript CSV files to match the objectid in your metadata spreadsheet. For example, if your metadata contains an interview with objectid `smith_john`, name the transcript file `smith_john.csv`.

This naming convention is crucial because it connects your transcript files to the CollectionBuilder-CSV metadata system, allowing the platform to automatically link the right transcript with the right metadata entry. This integration between the metadata system and transcript files is one of the key features that makes Oral History as Data powerful and flexible.

{% include docs/button.html text="Check out our Step by Step Tutorial to Learn More" color="outline-primary btn-lg" link="content/prepare/tutorial-transcript.html"%}