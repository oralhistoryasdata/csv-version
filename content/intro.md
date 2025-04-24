---
nav_order: 1
title: How OHD Works
---

OHD uses a CSV-driven approach to manage your collection. Rather than creating individual web pages for each interview, you'll manage all your interviews through a simple spreadsheet and let the system automatically generate the web presentation.

## Project Structure Overview

```
your-repository/
├── _data/
│   ├── your-metadata.csv     # Your collection metadata file
│   ├── filters.csv           # Your coding vocabulary
│   ├── theme.yml             # Your site configuration (basic customizations)
│   └── transcripts/          # Folder for transcript CSVs
│       └── transcript1.csv   # Sample transcript 1
│       └── transcript2.csv   # Sample transcript 2
├── _config.yml               # Project configuration (title, metadata, etc.)
└── objects/                  # Folder for interview images
```


## The Complete Workflow

**1. Setup Your Environment**
- Create a copy of the OHD GitHub Repository
- Configure your project settings

**2. Prepare Your Content**
- Transform interview transcripts into structured CSV files (see [examples](/examples/))
- Add metadata through a spreadsheet (based on [CollectionBuilder-CSV](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv_metadata/))
    - Connect transcripts with audio/video sources via Metadata (optional)
- Code Your Transcripts (Optional)**
    - Create a controlled vocabulary for coding
    - Apply thematic codes to your transcript content

**3. Customize Your Site**
- Configure theme settings and appearance
- Set up visualization options and coding structure

**4. Publish and Share**
- Publish your collection using GitHub Pages
- Or generate files and publish on your own or your org's server

**5. Analyze and Visualize**
- Explore your collection through interactive visualizations (requires coded/tagged transcripts)
- Identify patterns across multiple interviews

The entire process is designed to be flexible, allowing you to focus on the content and analysis rather than web development. Whether you're working with a single interview or a large collection, OHD scales to meet your needs.

At the end of the process, you'll have a professional-quality website that publishes your transcripts with powerful search, browse, and visualization features. The final product will enable both your research and public engagement with your interviews.

{% include docs/button.html link="https://oralhistoryasdata.github.io/demo" text="Check Out the OHD Demo Site" color="primary btn-lg mt-2 mb-4 ms-5"%}

### About Oral History as Data

Oral History as Data was first built in 2018, coming out of work at the University of Idaho Library's [Center for Digital Inquiry and Learning (CD?L)](https://cdil.lib.uidaho.edu/). 
The framework served as the foundation for several digital humanities projects, including [Voices of Gay Rodeo](https://www.voicesofgayrodeo.com/), [Idaho Queered](https://www.lib.uidaho.edu/queered/), and [CTRL+Shift](https://ctrl-shift.org/). 

The project is closely related to the [CollectionBuilder](https://collectionbuilder.github.io/) project, and the current iteration was built on top of a CollectionBuilder-GH template. 



