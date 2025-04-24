---
section: Customize Your Site
nav_order: 4
title: Customizing Visualizations
---

# Understanding and Customizing Visualizations

The visualization system is a core feature of Oral History as Data, enabling researchers and users to visually explore coded interview content. This guide explains how the visualization system works and how you can customize it for your specific needs.

## How OHD Visualizations Work

Oral History as Data creates interactive visualizations by:

1. Reading the tags from your transcript CSV files
2. Matching them to the color definitions generated from your `_data/filters.csv` file
3. Rendering colored segments that represent the coded sections of each interview
4. Providing an interactive interface where users can:
   - Filter by specific tags to see only relevant content
   - Click on colored segments to view the associated transcript text
   - Navigate between related content across multiple interviews

The visualizations are displayed at the top of the page, with filterable transcript content below.

{% include docs/bootstrap/figure.md img="examples/visualization-example.jpg" caption="The OHD visualization interface highlights coded segments" alt="Screenshot of the OHD visualization interface" class="w-75" %}

## Customizing the Visualization System

### 1. Modifying Tag Colors

Colors for transcript tags are automatically assigned in the `_includes/transcript/style/filter-style.html` file using a color cycle. To customize these colors:

**Option A: Edit filter-style.html (Recommended)**

1. Create a copy of `_includes/transcript/style/filter-style.html` in your repository
2. Modify the color cycle list with your preferred colors:

```html
{% raw %}
<style>
  {% for n in site.data.filters %}
  {% capture color %}{% cycle '#e6194b','#3cb44b','#ffe119','#4363d8','#f58231','#911eb4','#46f0f0','#f032e6' %}{% endcapture %}
  .{{ n.tag | slugify }} { 
    fill: {{color}};
    border-color: {{color}};
  }
  .{{ n.tag | slugify }}.primary-{{ n.tag | slugify }}{ 
    fill: {{color}} !important;
  }
  {% endfor %}
</style>
{% endraw %}
```

**Option B: Override with Custom CSS**

1. Create a file called `_sass/_custom.scss` (or edit if it exists)
2. Add CSS targeting the tag classes with `!important` to override default styling:

```scss
/* Custom tag colors */
.education { 
  fill: #8B4513 !important;
  border-color: #8B4513 !important;
}
.technology {
  fill: #4682B4 !important;
  border-color: #4682B4 !important;
}
```

### 2. Enabling JSON-based Lazy Loading

OHD 2025 version includes an optimized visualization system that lazily loads transcript content for better performance. This is ideal for larger collections:

1. In `_config.yml`, ensure the JSON generation is enabled:

```yaml
# in _config.yml
theme:
  json-generation: true
```

2. This activates the `viz-json.html` system that:
   - Loads transcript data only when a user selects a filter
   - Caches data to avoid repeated network requests
   - Shows a loading indicator during data retrieval
   - Offers better performance for large collections

### 3. Customizing the Visualization Layout

To modify the layout of the visualization page:

1. **Create a custom layout file**:
   - Copy `_layouts/visualization.html` to your repository
   - Edit to adjust spacing, column widths, and other layout elements

2. **Modify key visualization components**:
   - The filter legend circles are defined in `_includes/visualization-filter-legend.html`
   - The transcript content display is in the visualization layout file
   - Bootstrap grid classes can be adjusted to change column layouts

Example of modifying the filter legend columns:

```html
<!-- Change the column layout from 4 filters per row to 3 -->
{% raw %}
{% for n in site.data.filters %}
<div class="col-md-4 col-6"> <!-- Changed from col-md-3 col-4 -->
  <svg class="legend" width="100%" height="25px" data-id="{{ n.tag | slugify }}">
    <!-- Content remains the same -->
  </svg>
</div>
{% endfor %}
{% endraw %}
```

## Real-World Customization Examples

### Voices of Gay Rodeo Project

The [Voices of Gay Rodeo](https://www.voicesofgayrodeo.com/) project shows several customization approaches:

- **Custom color palette** aligned with the project branding
- **Modified layout** with larger transcript display
- **Enhanced navigation** between transcript segments

### CTRL+Shift Poetry Project

[CTRL+Shift](https://ctrl-shift.org/) demonstrates:

- **Custom filter organization** by grouping related tags
- **Project-specific typography** for better poetry display
- **Content organization** tailored to literary analysis

## Advanced Customization Options

### Modifying JavaScript Behavior

The visualization system uses JavaScript to handle filtering and user interactions:

1. **For lazy loading visualization** (default in 2025 version):
   - Core functionality is in `_includes/transcript/js/viz-json.html`
   - This manages asynchronous loading and filtering

2. **For standard visualization**:
   - Core functionality is in `_includes/transcript/js/viz-base.html`
   - This processes all transcript data at page load

To customize behavior:
1. Copy the appropriate file to your repository
2. Modify the JavaScript functions to change filtering behavior
3. Test thoroughly to ensure compatibility

### Creating Custom Visualizations with JSON Data

The OHD system generates JSON files of your transcript data that can be used to create custom visualizations:

1. **Access the data**:
   - Transcript JSON is available at `/assets/data/transcripts/[transcript-id].json`
   - Filter definitions at `/assets/data/filters.json`

2. **Example uses**:
   - Create tag frequency charts with D3.js
   - Build custom filtering interfaces 
   - Develop alternative visualization layouts

## Resources and Tools

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/) - OHD uses Bootstrap for layout
- [JSON Documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) - For working with OHD data
- [Jekyll Documentation](https://jekyllrb.com/docs/) - For understanding the site structure
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - For inspecting and debugging customizations