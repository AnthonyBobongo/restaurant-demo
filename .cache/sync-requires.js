const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/test/Desktop/restaurant-demo/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/test/Desktop/restaurant-demo/src/pages/404.js"))),
  "component---src-pages-hours-and-location-page-js": hot(preferDefault(require("/Users/test/Desktop/restaurant-demo/src/pages/hours-and-location-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/test/Desktop/restaurant-demo/src/pages/index.js"))),
  "component---src-pages-join-us-js": hot(preferDefault(require("/Users/test/Desktop/restaurant-demo/src/pages/join-us.js"))),
  "component---src-pages-menu-page-js": hot(preferDefault(require("/Users/test/Desktop/restaurant-demo/src/pages/menu-page.js")))
}

