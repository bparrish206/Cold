'use strict';

var $ = require('jquery');
var dateutils = require('./dateutils');

var date = dateutils.logDate();
var month = dateutils.logMonth();

$('#app').append('<p> Javascript is cool </p>');
$('#app').append(month + "/ " + date);
