const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Luis/git/gatsby-wordpress-test/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Luis/git/gatsby-wordpress-test/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Luis/git/gatsby-wordpress-test/src/pages/index.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/Luis/git/gatsby-wordpress-test/src/templates/page.js"))),
  "component---src-templates-portfolio-js": hot(preferDefault(require("/Users/Luis/git/gatsby-wordpress-test/src/templates/portfolio.js"))),
  "component---src-templates-portfolio-under-content-js": hot(preferDefault(require("/Users/Luis/git/gatsby-wordpress-test/src/templates/portfolioUnderContent.js")))
}

