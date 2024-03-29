module.exports = {
  productionSourceMap: false,

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "ar",
      localeDir: "locales",
      enableInSFC: true
    }
  },
  chainWebpack: config => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type("javascript/auto")
      .use("i18n")
      .loader("@kazupon/vue-i18n-loader")
      .end();
  }
};
