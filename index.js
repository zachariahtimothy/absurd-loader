'use strict';
var AbsurdApi = require('absurd');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var callback = this.async();

  var absurd = AbsurdApi();

  var json = require(this.resource);
  if (typeof json === 'function') { json = json(absurd); }

  return absurd.add(json).compile(function (err, css) {
    if (err) return callback(err);
    callback(null, css);
  });
};
