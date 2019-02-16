const {
  dependencies,
  devDependencies,
  successMessage
} = require('./../config');

module.exports = (api, opts, rootOptions) => {
  api.extendPackage({ dependencies });

  api.injectImports(api.entryFile, `import './plugins/fundamental-vue.js'`);

  api.render({
    './src/App.vue': './templates/src/App.vue',
    './src/plugins/fundamental-vue.js':
      './templates/src/plugins/fundamental-vue.js',
    './src/fundamental.scss': './templates/src/fundamental.scss'
  });

  api.extendPackage({ devDependencies });

  const logSuccess = () => api.exitLog(successMessage, 'done');
  api.onCreateComplete(logSuccess);
};
