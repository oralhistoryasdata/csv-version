# Oral History as Data - CSV Version

This is an in-transition state of Oral History as Data (OHD), one that uses [CollectionBuilder-CSV](https://github.com/CollectionBuilder/collectionbuilder-csv) as its guts (so to speak) with the design and oral history elements of Oral History as Data. Eventually, it will replace the current version of OHD. 

To use it, click the "Use This Template" button at the top right of the repository's main page. Then replace the demonstration data and transcripts contained within with your transcripts and data. 




## Brief Overview of Building an OHD Collection

The [CollectionBuilder Docs](https://collectionbuilder.github.io/cb-docs/) contain detailed information about building a CollectionBuilder collection from start to finish--including installing software, using Git/GitHub, preparing digital objects, and formatting metadata. That documentation is all pertinent to using this repository. 

There are a few additions to the collection-building process for this Oral History as Data repository:
- You will add "transcript" as your display template for any oral history/interview/text you add to the collection as an item
- The `object_location` field should point to the audio or video of your transcript
- Your transcripts' filenames should match the objectid for the item in your collection to which it corresponds ... or, you should input the filename into a field in your metadata called `object-transcript`
- Your transcripts should be stored in the `/transcripts/` folder in the `/_data/` folder. 
    - This [Prepare Your Transcript](https://learn-static.github.io/oral-history-as-data/content/prepare/overview.html) section provides instructions on how to set your transcript up to work with OHD
    - These sections are also helpful:  
        - [Code Your Transcript](https://learn-static.github.io/oral-history-as-data/content/code/code.html)
        - [Download and Rename Your Spreadsheets](https://learn-static.github.io/oral-history-as-data/content/code/download.html)
- There are also sections in the [_data/theme.yml](https://github.com/oralhistoryasdata/csv-version/blob/main/_data/theme.yml#L85) file that pertain specifically to how transcripts will look on the page and what features appear on the visualization page. 

Otherwise, you will follow the conventions of any CollectionBuilder process and you can use that project's [documentation](https://collectionbuilder.github.io/cb-docs/) and [discussion](https://github.com/orgs/CollectionBuilder/discussions) section to troubleshoot and ask questions. 



Here is a super quick overview of the process:

- Make your own copy of this template repository by clicking the green "Use this Template" button on GitHub (see [repository set up docs](https://collectionbuilder.github.io/cb-docs/docs/repository/)). This copy of the template is the starting point for your "project repository", i.e. the source code for your digital collection site!
- Prepare your transcripts as described above, upload them to the `_data/transcripts/` folder and make sure their filenames either match the objectid value of the items in your metadata spreadsheet or the filename is listed in the `object-transcript` field.
- Prepare your collection metadata following the CB-CSV template (see our demo [metadata template on Google Sheets](https://docs.google.com/spreadsheets/d/1nN_k4JQB4LJraIzns7WcM3OXK-xxGMQhW1shMssflNM/edit?usp=sharing) and [metadata docs](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv_metadata/)). Your metadata will include links to your digital files (images, pdfs, videos, etc) and thumbnails wherever they are hosted.
- Add your metadata as a CSV to your project repository's "_data" folder (see [upload metadata docs](https://collectionbuilder.github.io/cb-docs/docs/metadata/uploading/)).
- Edit your project's "_config.yml" with your collection information (see [site configuration docs](https://collectionbuilder.github.io/cb-docs/docs/config/)). Additional customization is done via a theme file, configuration files, CSS tweaks, and more--however, once your "_config.yml" is edited your site is ready to be previewed. 
- Generate your site using Jekyll! (see docs for how to [use Jekyll locally](https://collectionbuilder.github.io/cb-docs/docs/repository/generate/) and [deploy on the web](https://collectionbuilder.github.io/cb-docs/docs/deploy/))




## About Oral History as Data

Oral History as Data (OHD) provides a static web framework for users to publish and analyze coded oral history and qualitative interviews on the web. 

Oral History as Data was first built in 2018, coming out of work at the University of Idaho Library's [Center for Digital Inquiry and Learning (CD?L)](https://cdil.lib.uidaho.edu/). 
The framework served as the foundation for several digital humanities projects, including [Voices of Gay Rodeo](https://www.voicesofgayrodeo.com/), [Idaho Queered](https://www.lib.uidaho.edu/queered/), and [CTRL+Shift](https://ctrl-shift.org/). 

The look for OHD is different than CollectionBuilder. Check out the [a demo site](https://oralhistoryasdata.github.io/) to see the differences.


## About CollectionBuilder-CSV

CollectionBuilder-CSV is a robust and flexible "stand alone" template for creating digital collection and exhibit websites using Jekyll and a metadata CSV.
Driven by your collection metadata, the template generates engaging visualizations to browse and explore your objects.
The resulting static site can be hosted on any basic web server (or built automatically using GitHub Actions).

Visit the [CollectionBuilder Docs](https://collectionbuilder.github.io/cb-docs/) for step-by-step details for getting started and building collections!

Please feel free to ask questions in the main [CollectionBuilder discussion forum](https://github.com/CollectionBuilder/collectionbuilder.github.io/discussions).       

----------

## CollectionBuilder 

<https://collectionbuilder.github.io/>

CollectionBuilder is a project of University of Idaho Library's [Digital Initiatives](https://www.lib.uidaho.edu/digital/) and the [Center for Digital Inquiry and Learning](https://cdil.lib.uidaho.edu) (CDIL) following the [Lib-Static](https://lib-static.github.io/) methodology. 
Powered by the open source static site generator [Jekyll](https://jekyllrb.com/) and a modern static web stack, it puts collection metadata to work building beautiful sites.

The basic theme is created using [Bootstrap](https://getbootstrap.com/).
Metadata visualizations are built using open source libraries such as [DataTables](https://datatables.net/), [Leafletjs](http://leafletjs.com/), [Spotlight gallery](https://github.com/nextapps-de/spotlight), [lazysizes](https://github.com/aFarkas/lazysizes), and [Lunr.js](https://lunrjs.com/).
Object metadata is exposed using [Schema.org](http://schema.org) and [Open Graph protocol](http://ogp.me/) standards.

Questions can be directed to **collectionbuilder.team@gmail.com**

## License

CollectionBuilder documentation and general web content is licensed [Creative Commons Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/). 
This license does *NOT* include any objects or images used in digital collections, which may have individually applied licenses described by a "rights" field.
CollectionBuilder code is licensed [MIT](https://github.com/CollectionBuilder/collectionbuilder-csv/blob/master/LICENSE). 
This license does not include external dependencies included in the `assets/lib` directory, which are covered by their individual licenses.
