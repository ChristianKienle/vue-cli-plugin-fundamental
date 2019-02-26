const getConfig = require("./../config");

/**
 *
 * @typedef {object} Options
 * @prop {string=} layoutType
 */
module.exports = (api, options = {}, rootOptions) => {
  const { layoutType = "full" } = options;
  const { dependencies, devDependencies, successMessage } = getConfig(
    layoutType
  );

  api.extendPackage({ dependencies });
  const layoutFile = layoutType === "full" ? "AppSideNavLayout.vue" : "App.vue";

  api.injectImports(api.entryFile, `import './plugins/fundamental-vue.js'`);
  if (layoutType === "full") {
    api.render({
      "./src/router.js": `./templates/src/router.js`,
      "./src/views/Home.vue": "./templates/src/views/Home.vue",
      "./src/views/About.vue": "./templates/src/views/About.vue",
      "./public/images/product-logo.png":
        "./templates/public/images/product-logo.png",
      "./public/images/product-logo@2x.png":
        "./templates/public/images/product-logo@2x.png"
    });
    api.injectImports(api.entryFile, `import router from './router'`);
  }

  api.render({
    "./src/App.vue": `./templates/src/${layoutFile}`,
    "./src/plugins/fundamental-vue.js":
      "./templates/src/plugins/fundamental-vue.js",
    "./src/fundamental.scss": "./templates/src/fundamental.scss"
  });

  api.extendPackage({ devDependencies });

  api.onCreateComplete(() => {
    if (layoutType === "full") {
      const fs = require("fs");
      const contentMain = fs.readFileSync(api.entryFile, { encoding: "utf-8" });
      const lines = contentMain.split(/\r?\n/g);

      const renderIndex = lines.findIndex(line => line.match(/render/));
      lines[renderIndex] += `\n  router,`;

      fs.writeFileSync(api.entryFile, lines.join("\n"), { encoding: "utf-8" });
    }
    api.exitLog(successMessage, "done");
  });
};
