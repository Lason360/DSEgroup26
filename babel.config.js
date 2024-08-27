const { default: plugin } = require("tailwindcss");

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugin: ["nativewind/babel" , 'react-native-reanimated/plugin'],
  };
};
