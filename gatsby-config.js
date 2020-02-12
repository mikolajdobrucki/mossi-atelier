module.exports = {
  siteMetadata: {
    title: 'Mossi Atelier',
    description:
      'Mossi Atelier - interdyscyplinarne studio projektowe, zajmująca się architekturą wnętrz, projektowaniem mebli oraz wykonywaniem hiperrealistycznych  wizualizacji. Mossi specjalizuje się w projektowaniu wnętrz prywatnych.',
    descriptionEn:
      'Mossi Atelier - an interdisciplinary design studio specializes in interior architecture, furniture design and creating hyperrealistic CG visualizations. Mossi specializes exclusively in designing residential  interiors. Creating beautiful spaces to cherish life.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/svg/`
        }
      }
    },
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 1000
      }
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
