'use strict';



var _ = require('lodash');

var store = require('./src/store');
var resolveCfgPath = require('./src/resolve-cfg-path');



module.exports.make = function make(appName) 
{
  var cfgFileName = resolveCfgPath(appName);
  var config = store.read(cfgFileName);


  return {
    set: function (key, value) {
      config[key] = _.cloneDeep(value);
      store.write(cfgFileName, config);
    },

    get: function (key) {
      return _.cloneDeep(config[key]);
    },

    destroy: function () {
      config = {};
      store.unlink(cfgFileName);
    },

    _filename: cfgFileName
  };
};
