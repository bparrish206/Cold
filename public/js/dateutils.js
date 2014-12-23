"use strict";

var logDate = function() {
  return new Date().getDate();
};

var logMonth = function() {
  return new Date().getMonth();
};

exports.logDate = logDate;
exports.logMonth = logMonth;
