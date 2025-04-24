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
2. Matching them to the definitions in your filters.csv
3. Assigning colors to each tag category
4. Rendering an interactive interface where users can:
   - Filter by specific tags
   - Click on colored segments to read the associated text
   - Navigate between related content across interviews

{% include docs/bootstrap/figure.md img="examples/visualization-example.jpg" caption="The OHD visualization interface highlights coded segments" alt="Screenshot of the OHD visualization interface" class="w-75" %}

## Customizing the Visualization Interface

### Modifying Tag Colors

The color scheme for tags is defined in the `_data/filters.csv` file, but you can override these with custom CSS:

1. Create a file called `_sass/_custom.scss` in your repository
2. Add CSS targeting the tag classes:

```scss
/* Custom tag colors */
.film-writing {
  background-color: #8B4513 !important;
}
.technology {
  background-color: #4682B4 !important;
}
/* Add more custom colors as needed */
```

### Adjusting the Visualization Layout

To modify the layout of the visualization interface:

1. Override the subjects.html layout by creating a file at `_layouts/subjects.html`
2. Copy the original layout from the template as your starting point
3. Modify the HTML and Bootstrap classes to adjust:
   - Column widths
   - Button appearance
   - Spacing and margins
   - Header and footer elements

### Adding Custom Filters

The standard visualization allows filtering by individual tags, but you can create custom filter combinations:

1. Modify the `_includes/js/transcript-view.js` file
2. Add custom filter functions for tag combinations
3. Create new UI elements to trigger these filters

### Visualization Examples from Other Projects

The [Voices of Gay Rodeo](https://www.voicesofgayrodeo.com/) project includes several custom visualization enhancements:

- Custom color schemes related to the project's branding
- Modified layout with larger transcript text
- Additional navigation elements
- Integration with archival photographs

{% include docs/bootstrap/figure.md img="examples/vogr-visualization.jpg" caption="Custom visualization in Voices of Gay Rodeo" alt="Screenshot of a custom visualization in the Voices of Gay Rodeo project" class="w-75" %}

## Creating Custom Visualizations

Beyond modifying the built-in visualization, you can create entirely new ways to visualize your oral history data:

### Tag Co-occurrence Network

Visualize relationships between tags by creating a network diagram showing which tags commonly appear together:

1. Export your tag data using the built-in JSON endpoints
2. Use D3.js or a similar library to create a force-directed graph
3. Size nodes by tag frequency and links by co-occurrence strength

### Timeline Visualization

Create chronological views of your interviews:

1. Export timestamp data from your transcripts
2. Create a custom timeline interface using JavaScript libraries like TimelineJS
3. Integrate with your topic tags for filterable timelines

### Geographic Visualization

For interviews with location data:

1. Extract location information from your metadata
2. Create an interactive map using Leaflet or MapboxGL
3. Link map points to interview segments

## Advanced JavaScript Customization

For developers comfortable with JavaScript, the visualization system can be extensively customized:

1. Examine the core visualization code in `_includes/js/transcript-view.js`
2. Create a custom JavaScript file in your project's `assets/js/` directory
3. Override or extend the default behavior with your own functions
4. Link to your custom JavaScript in the site layout

## Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/) - OHD uses Bootstrap for its layout
- [D3.js](https://d3js.org/) - Powerful library for custom data visualizations
- [GitHub Pages and Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll) - Underlying technology for site customization