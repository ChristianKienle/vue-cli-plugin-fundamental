// @ts-check

/** @param {VirtualizedListSupportType} supportType */
const virtualizedListDependenciesFromSupportType = supportType => {
  if(supportType === "none") {
    return {};
  }
  const withoutIE11Deps = {
    "vue-virtual-scroller": "^1.0.0-rc.2",
    "vue-observe-visibility": "^0.4.4"
  };
  if(supportType === "without-ie11") {
    return withoutIE11Deps;
  }
  if(supportType === "with-ie11") {
    return {
      ...withoutIE11Deps,
      "intersection-observer": "^0.7.0"
    }
  }
  console.error(`Unknown virtualizedListSupportType: ${supportType}. Expected one of 'none', 'with-ie11', 'without-ie11'`);
  return {};
}

/**
 * @param {RawConfigOptions} options
 * @returns {NormalizedConfig}
 */
module.exports = ({
  layoutType = "full",
  virtualizedListSupportType = "with-ie11"
}) => {
  // vue-router is not needed for the "none"-layout
  const router =
    layoutType !== "full"
      ? {} : { "vue-router": "^3.0.6" };
  const virtualScroller = virtualizedListSupportType
  return {
    layoutType,
    virtualizedListSupportType,
    dependencies: {
      "fundamental-vue": "^0.13.0",
      "fundamental-styles": "^0.1.0",
      ...router,
      ...virtualizedListDependenciesFromSupportType(virtualizedListSupportType)
    },
    devDependencies: {
      "node-sass": "^4.12.0",
      "sass-loader": "^7.1.0"
    },
    successMessage: "🌈 Successfully installed Fundamental Vue."
  };
};
