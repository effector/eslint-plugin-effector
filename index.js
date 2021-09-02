module.exports = {
  rules: {
    "enforce-store-naming-convention": require("./rules/enforce-store-naming-convention/enforce-store-naming-convention"),
    "enforce-effect-naming-convention": require("./rules/enforce-effect-naming-convention/enforce-effect-naming-convention"),
    "no-getState": require("./rules/no-getState/no-getState"),
    "no-unnecessary-duplication": require("./rules/no-unnecessary-duplication/no-unnecessary-duplication"),
    "prefer-sample-over-forward-with-mapping": require("./rules/prefer-sample-over-forward-with-mapping/prefer-sample-over-forward-with-mapping"),
  },
  configs: {
    recommended: require("./config/recommended"),
  },
};
