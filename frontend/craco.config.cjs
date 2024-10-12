const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@utils": path.resolve(__dirname, "src/utils"),
      "@constants": path.resolve(__dirname, "src/common/constants"),
      "@enums": path.resolve(__dirname, "src/common/enums"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
};
