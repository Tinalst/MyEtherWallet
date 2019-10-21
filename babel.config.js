module.exports = {
  presets: [
    ["@babel/preset-env",{
      useBuiltIns: false,
      "corejs": "core-js@3"
    }],
    ['@vue/app', { useBuiltIns: "entry" } ]
  ]
};
