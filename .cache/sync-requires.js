const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-single-boat-js": hot(preferDefault(require("D:\\Users\\Karlo\\Desktop\\FAKS\\SET_SAIL\\HCI\\src\\templates\\singleBoat.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("D:\\Users\\Karlo\\Desktop\\FAKS\\SET_SAIL\\HCI\\src\\templates\\blog_post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Users\\Karlo\\Desktop\\FAKS\\SET_SAIL\\HCI\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Users\\Karlo\\Desktop\\FAKS\\SET_SAIL\\HCI\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("D:\\Users\\Karlo\\Desktop\\FAKS\\SET_SAIL\\HCI\\src\\pages\\about.js"))),
  "component---src-pages-account-js": hot(preferDefault(require("D:\\Users\\Karlo\\Desktop\\FAKS\\SET_SAIL\\HCI\\src\\pages\\account.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("D:\\Users\\Karlo\\Desktop\\FAKS\\SET_SAIL\\HCI\\src\\pages\\blog.js"))),
  "component---src-pages-boats-js": hot(preferDefault(require("D:\\Users\\Karlo\\Desktop\\FAKS\\SET_SAIL\\HCI\\src\\pages\\boats.js"))),
  "component---src-pages-crew-js": hot(preferDefault(require("D:\\Users\\Karlo\\Desktop\\FAKS\\SET_SAIL\\HCI\\src\\pages\\crew.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Users\\Karlo\\Desktop\\FAKS\\SET_SAIL\\HCI\\src\\pages\\index.js"))),
  "component---src-pages-motorboatpage-js": hot(preferDefault(require("D:\\Users\\Karlo\\Desktop\\FAKS\\SET_SAIL\\HCI\\src\\pages\\motorboatpage.js"))),
  "component---src-pages-catamaranpage-js": hot(preferDefault(require("D:\\Users\\Karlo\\Desktop\\FAKS\\SET_SAIL\\HCI\\src\\pages\\catamaranpage.js"))),
  "component---src-pages-monohullpage-js": hot(preferDefault(require("D:\\Users\\Karlo\\Desktop\\FAKS\\SET_SAIL\\HCI\\src\\pages\\monohullpage.js")))
}

