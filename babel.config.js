module.exports = {
  presets: [
    ["@babel/preset-env",{
      useBuiltIns: true,
      "corejs": "core-js@3"
    }],
    ['@vue/app', { useBuiltIns: "entry" } ]
  ]
};
