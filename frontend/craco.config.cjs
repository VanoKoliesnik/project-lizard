const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@utils": path.resolve(__dirname, "src/utils"),
      "@constants": path.resolve(__dirname, "src/common/constants"),
      "@enums": path.resolve(__dirname, "src/common/enums"),
      "@type": path.resolve(__dirname, "src/common/type"),
      "@hooks": path.resolve(__dirname, "src/common/hooks"),
      "@api": path.resolve(__dirname, "src/common/api"),
      "@store": path.resolve(__dirname, "src/store"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
};
