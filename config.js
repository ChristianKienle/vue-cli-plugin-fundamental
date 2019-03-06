module.exports = layoutType => {
  // We only need vue-router for the full layout
  const router = layoutType !== "full" ? {} : {
    "vue-router": "^3.0.1"
  };
  return {
    dependencies: {
      "fundamental-vue": "^0.1.0",
      "fiori-fundamentals": "^1.4.3",
      ...router
    },
    devDependencies: {
      "node-sass": "^4.11.0",
      "sass-loader": "^7.1.0"
    },
    successMessage: "Successfully installed Fundamental Vue."
  };
};
