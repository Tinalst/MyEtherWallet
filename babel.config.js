module.exports = {
  presets: [
    ["@babel/preset-env",{
      useBuiltIns: "entry",
      "corejs": "core-js@3"
    }],
    ['@vue/app', { useBuiltIns: "entry" } ]
  ]
};
