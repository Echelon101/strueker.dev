const extConfig = require("./config")

module.exports = {
    siteMetadata: {
        title: extConfig.siteName,
        author: extConfig.siteAuthor,
        siteUrl: extConfig.siteURL,
        keywords: extConfig.siteKeywords
      },
    assetPrefix: "/assets",
    plugins: [
        {
            resolve: "gatsby-plugin-asset-path"
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./content/`,
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: extConfig.siteName,
                short_name: extConfig.siteName,
                start_url: `/`,
                background_color: `#000710`,
                theme_color: `#000710`,
                display: `minimal-ui`,
                icon: extConfig.iconPath, // This path is relative to the root of the site.
                cache_busting_mode: 'none',
            },
        },
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: ["/", "/en", "/en/projects", "/de", "/de/projects"],
                workboxConfig: {
                    globPatterns: ['**/*']
                }
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
              path: `${__dirname}/locales`,
              languages: extConfig.languages,
              defaultLanguage: null,
              siteUrl: extConfig.siteURL,
              i18nextOptions: {
                interpolation: {
                  escapeValue: false // not needed for react as it escapes by default
                },
                keySeparator: false,
                nsSeparator: false
              },
              pages: [
                  {
                      matchPath: '/:lang/projects/:urlname',
                      getLanguageFromPath: true,
                      excludeLanguages: extConfig.languages
                  }
              ]
            }
          }
    ]
}