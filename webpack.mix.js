const mix = require("laravel-mix");
// import { mix } from "laravel-mix";

mix.js("resources/js/app.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css", []);

// mix.js(
// ["resources/js/app.js", "node_modules/bootstrap/dist/js/bootstrap.js"],
// "public/js"
// )
// .vue()
// .copy("node_modules/bootstrap/dist/css/bootstrap.css", "public/css");
// .postCss("resources/css/app.css", "public/css", []);

// mix.webpackConfig({
//     resolve: {
//         extensions: [".js", ".vue"],
//         alias: {
//             "@": __dirname + "/resources",
//         },
//     },
// });
