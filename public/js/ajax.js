"use strict";

var $ = require("jquery");
var dateutils = require("./dateutils");

var date = dateutils.logDate();
var month = dateutils.logMonth();

$(document).ready(function() {
  $.post("http://localhost:3000/", function(urlData) {
    $("#loc").append("Location: " + urlData.location);
    $("#temp").append("Temperature: " + urlData.current_temps);
    $("#cond").append("Conditions: " + urlData.conditions);
  });
  $("#Date").append(month + "/ " + date);
});
