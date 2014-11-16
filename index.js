'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var request = require('superagent');
var app = express();

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function(req, res){
var key = '828e3a84bb61c1a2';
var url = "http://api.wunderground.com/api/" + key + "/geolookup/conditions/q/" + 'autoip/' + ".json";

  request
    .get(url)
    .end(function (err, urlData){
      var parsedBody = JSON.parse(urlData.text);
      if(err) throw err;
      var weather = urlData.body.current_observation;
      var loc = weather.display_location.full;
      var cond = weather.weather;
      var temp = urlData.body.current_observation.temp_f;
      var wazTemp = function(temp){
        if (temp < 60 && temp > 50){
        return temp + "safe long sleeves are a where its at";
      }
      else if (temp < 50) {
        return temp + " F Nope, I'm safe, but a jacket is probably a good idea.";
      } else {return temp + " Better pass out the shades so you don't blind someone with those pasty arms";}
      };
    res.send({location: loc, current_temps: wazTemp(temp), conditions: cond});
  });
});
