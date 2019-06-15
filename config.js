module.exports = layoutType => {
  // We only need vue-router for the full layout
  const router = layoutType !== "full" ? {} : {
    "vue-router": "^3.0.2"
  };
  return {
    dependencies: {
      "fundamental-vue": "^0.12.0",
      "fundamental-styles": "^0.1.0",
      ...router
    },
    devDependencies: {
      "node-sass": "^4.12.0",
      "sass-loader": "^7.1.0"
    },
    successMessage: "Successfully installed Fundamental Vue."
  };
};
