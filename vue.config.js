module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/assets/style/variables/colors.scss";
        @import "@/assets/style/variables/typography.scss";
        @import "@/assets/style/variables/resolution.scss";
      `
      }
    }
  }
};
