// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [['react-native-reanimated/plugin']],
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-flow-strip-types', {allowDeclareFields: true}],
    ['react-native-reanimated/plugin'],
  ],
};
