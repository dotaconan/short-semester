'use strict';

module.exports = appInfo => {
  const config = exports = {
    security : {
      csrf: false
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530667844379_1365';

  // add your config here
  config.middleware = [];

  return config;
};

 
