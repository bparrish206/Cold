"use strict";

var _ = require("underscore");

var logUnderscoreVersion = function() {
  return _.VERSION;
};

module.exports = logUnderscoreVersion;
