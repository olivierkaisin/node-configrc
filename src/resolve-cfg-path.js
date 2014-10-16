'use strict';


var path = require('path');
var util = require('util');



function getFileName(appName) {
  return util.format('.%src', appName);
}



module.exports = function resolveCfgPath(appName)
{
  return path.resolve(
    process.env.HOME, 
    getFileName(appName)
  );
};
