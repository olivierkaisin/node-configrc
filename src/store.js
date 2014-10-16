'use strict';



var fs = require('fs');
var path = require('path');



function read(cfgFilePath)
{
  var config;

  if (fs.existsSync(cfgFilePath)) {
    var data = fs.readFileSync(cfgFilePath, 'utf8');
    config = JSON.parse(data);
  } else {
    // No CFG file yet
    config = {};
  }

  return config;
}



function write(cfgFilePath, config)
{
  var data = JSON.stringify(config, null, 2);

  fs.writeFileSync(cfgFilePath, data);

  return read(cfgFilePath);
}



function unlink(cfgFilePath)
{
  fs.unlinkSync(cfgFilePath);
}



module.exports = {
  read: read,
  write: write,
  unlink: unlink
};
