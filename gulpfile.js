const gulp = require('gulp');
const watch = require('gulp-watch');
const gulpShopify = require('gulp-shopify-upload');
const jsyaml = require('js-yaml');
const fs = require('fs');
const themeConfig = jsyaml.load(fs.readFileSync("config.yml"), "utf8")
const {argv} = require('yargs');
const themeName = "development";
const env = argv.env || themeName;
const themeSettings = themeConfig[env];


gulp.task('shopifywatch', function(cb) {
    return watch(
      "./+(assets|layout|config|snippets|templates|locales)/**"
    ).pipe(
      gulpShopify(
        "",
        themeSettings.password,
        themeSettings.store,
        themeSettings.theme_id
      ),
      cb
    );
});
  