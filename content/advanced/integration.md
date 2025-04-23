---
section: Advanced Topics
nav_order: 2
title: Integration Strategies
---

# Integration Strategies

Oral History as Data can be integrated with other digital platforms and tools to create more comprehensive research environments. This guide explores different approaches to incorporating OHD into larger digital ecosystems.

## Embedding OHD in Larger Websites

### Case Study: Taylor Wilderness Research Station

The [Taylor Wilderness Research Station Oral Histories](https://www.lib.uidaho.edu/digital/taylor-archive/oral_histories/) project demonstrates how OHD can be embedded within a larger digital collection. In this implementation:

- OHD is integrated as a component within a larger CollectionBuilder site
- The oral histories complement other archival materials
- A consistent design language ties all components together

{% include docs/bootstrap/figure.md img="examples/taylor-integration.jpg" caption="OHD integrated into the Taylor Wilderness Research Station digital collection" alt="Screenshot showing OHD integrated into a larger digital collection" class="w-75" %}

### Integration Methods

There are several approaches to embedding OHD in larger websites:

1. **Iframe Integration**
   - Host OHD on GitHub Pages
   - Embed specific interview visualizations in other sites using iframes
   - Example code:
   ```html
   <iframe src="https://your-ohd-site.github.io/subjects.html?id=interview1" 
     width="100%" height="600px" frameborder="0"></iframe>
   ```

2. **Subdirectory Installation**
   - Install OHD as a subdirectory within a larger Jekyll site
   - Customize shared headers/footers for consistent navigation
   - Example structure:
   ```
   your-main-site/
   ├── index.html
   ├── about.html
   └── oral-histories/  <-- OHD installed here
       ├── _data/
       ├── _includes/
       └── ...
   ```

3. **API Approach**
   - Use OHD's JSON endpoints to access interview data
   - Build custom interfaces in your main site
   - Example endpoint: `https://your-ohd-site.github.io/data/transcripts.json`

## Connecting with Other Digital Collection Platforms

### CollectionBuilder Integration

Since OHD uses the CollectionBuilder-CSV metadata format, there are natural integration points:

1. **Shared Metadata**
   - Use the same metadata CSV for both platforms
   - Extend the metadata schema with additional fields as needed
   - Link between platforms using consistent objectids

2. **Collection Relationships**
   - Create object relationships using the `parentid` field
   - Connect interviews to related artifacts, documents, and images
   - Build narrative paths through combined collections

### Omeka Integration

For institutions using Omeka or Omeka S:

1. **Cross-Platform Item References**
   - Create references to OHD interviews in Omeka items
   - Include URLs to specific interview segments
   - Use consistent identifiers across platforms

2. **Metadata Crosswalking**
   - Map OHD's CollectionBuilder-CSV metadata to Dublin Core
   - Create scripts to synchronize metadata between platforms
   - Example mapping:
   ```
   title → dc.title
   date → dc.date
   description → dc.description
   ```

## Data Export and Interchange

### Creating Portable Interview Data

OHD can serve as a publication platform while still allowing data portability:

1. **TEI Export**
   - Convert transcripts to TEI (Text Encoding Initiative) XML
   - Preserve speaker information, timestamps, and coding
   - Enable interchange with other digital humanities projects

2. **JSON API**
   - Access interview data in structured format through built-in endpoints
   - Build custom applications using this data
   - Example endpoint: `https://your-ohd-site.github.io/data/transcript-metadata.json`

### Integration with Analysis Tools

Connect OHD with qualitative data analysis software:

1. **ATLAS.ti / NVivo Export**
   - Create export scripts for qualitative analysis software
   - Maintain coding schemes across platforms
   - Import analysis results back into OHD visualizations

2. **R and Python Analysis**
   - Use the JSON API to pull data into analysis environments
   - Create custom visualizations and reports
   - Example R code:
   ```r
   library(jsonlite)
   ohd_data <- fromJSON("https://your-ohd-site.github.io/data/transcripts.json")
   # Analyze tag frequencies
   tag_counts <- table(unlist(strsplit(ohd_data$tags, ";")))
   ```

## Institutional Repository Connections

### Long-term Preservation Strategies

Ensure the long-term accessibility of your oral histories:

1. **Repository Deposit**
   - Export complete project data in preservation-friendly formats
   - Include raw audio/video, transcripts, and metadata
   - Create persistent identifiers and citations

2. **Metadata Harvesting**
   - Enable OAI-PMH harvesting of your collection metadata
   - Connect to institutional discovery systems
   - Create machine-readable dataset descriptions (e.g., DataCite)

## Advanced Example: Multi-Collection Research Environment

For comprehensive research projects spanning multiple collections:

1. Create a central research portal
2. Deploy multiple OHD instances for different interview collections
3. Implement cross-collection search and discovery
4. Build aggregate visualizations across all collections

{% include docs/bootstrap/figure.md img="examples/multi-collection.jpg" caption="Conceptual diagram of a multi-collection research environment" alt="Diagram showing multiple OHD instances connected to a central research portal" class="w-75" %}

## Resources and Further Reading

- [CollectionBuilder Documentation](https://collectionbuilder.github.io/cb-docs/)
- [Jekyll Integration Guide](https://jekyllrb.com/docs/plugins/installation/)
- [TEI Guidelines for Transcriptions](https://tei-c.org/release/doc/tei-p5-doc/en/html/TS.html)
- [APIs for Digital Humanities](https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask)