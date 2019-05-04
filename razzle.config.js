// razzle.config.js

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    // do something to config

    config.resolve.alias.react = 'preact/compat';
    config.resolve.alias['react-dom'] = 'preact/compat';

    console.log(config.resolve.alias);

    return config;
  },
};
