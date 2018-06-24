// import jsonImporter from 'node-sass-json-importer';
const jsonImporter = require('node-sass-json-importer')


module.exports = {
  // lintOnSave: true,
  css: {
    extract: true,
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/index.scss";',
        importer: jsonImporter
      }
    }
  }
}
