module.exports = (config) => {
  require('react-app-rewire-postcss')(config, true/*, options */);

  return config;
};
