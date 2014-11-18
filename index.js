'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var request = require('superagent');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function(req, res){
var url = "http://api.wunderground.com/api/" + '828e3a84bb61c1a2' + "/geolookup/conditions/q/" + 'WA/Seattle' +   ".json";

    request
    .get(url)
    .end(function (err, urlData){
      var parsedBody = JSON.parse(urlData.text);
      if(err) throw err;
      var cond = parsedBody.current_observation.weather;
      var icon = parsedBody.current_observation.icon_url;
      var temp = parsedBody.current_observation.temp_f;
      var wazTemp = function(temp){
        if (temp < 60 && temp > 50){
        return temp + "safe long sleeves are a where its at";
      }
      else if (temp < 50) {
        return temp + " F Nope, I'm safe, but a jacket is probably a good idea.";
      } else {return temp + " Better pass out the shades so you don't blind someone with those pasty arms";}
      };
    res.send({location: "Seattle", current_temps: wazTemp(temp), conditions: cond, outside:icon });
  });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});
