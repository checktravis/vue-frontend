module.exports = {
  // lintOnSave: true,
  css: {
    extract: true,
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/index.scss";'
      }
    }
  }
}
