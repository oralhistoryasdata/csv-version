---
section: Customize Your Site
nav_order: 2
title: OHD Customization
---

# Oral History as Data Configuration Options

The OHD framework provides several customization options in the `_data/theme.yml` file that control how transcripts and visualizations are displayed. Below are key settings you can modify:

### Transcript Page Options

The following options affect how individual transcript pages are displayed:

```yaml
transcript-fields: "description,date,location,interviewer,image"
```
This setting controls which metadata fields appear at the top of each transcript page. You can include any combination of these fields (comma-separated):
- `description` - Summary or abstract of the interview
- `date` - When the interview was conducted
- `location` - Where the interview took place
- `interviewer` - Name of the person conducting the interview
- `interviewee` - Name of the person being interviewed
- `bio` - Biographical information about the interviewee
- `image` - Featured image for the transcript

```yaml
media-scroll: true
```
- When set to `true`, the media player and visualization will remain visible in a fixed position on the right side as users scroll through longer transcripts
- Only applies on larger screens (minimum width 1024px)
- Set to `false` to keep media and visualization static at the top of the page

```yaml
search-and-filters: true
```
- When `true`, displays the search box and filter buttons above transcript text
- Set to `false` to hide these features

```yaml
search-and-filters-sticky: true
```
- When `true`, the search and filter options remain fixed at the top of the page as users scroll
- Set to `false` to let them scroll out of view with the content

### Visualization Page Options

These settings control the functionality of the visualization page that displays aggregated data across all interviews:

```yaml
as-data: true
```
- When `true`, shows an "As Data" button in the top right of the visualization page
- Clicking this button displays a modal with information about the data visualization

```yaml
transcript-contents: true
```
- When `true`, displays the actual filtered interview content below the visualization
- When `false`, only shows the visualization chart without transcript excerpts

```yaml
json-generation: false
```
- Controls whether JSON files are used for visualization features
- Default is `false` for simpler setup
- **Important note:** If you change this to `true`, you must run `rake generate_json` in your project terminal to create necessary JSON data files for your collection

### Accessibility Considerations

When customizing these options, keep accessibility in mind:

1. **Media scroll** - While convenient, fixed positioning can be disorienting for some screen reader users. Test thoroughly if enabled.

2. **Search and filters** - These provide important accessibility benefits by allowing users to find and focus on specific content.

3. **Transcript contents** - Displaying transcript text on the visualization page improves accessibility by providing the actual content that the visualization represents.

4. **Field selection** - Including descriptive metadata helps provide context that can benefit all users, particularly those using assistive technologies.
