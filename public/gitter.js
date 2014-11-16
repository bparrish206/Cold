$(document).ready(function(){

$.post('/', function(urlData) {
            $('#loc').append('Location: ' + urlData.location);
            $('#temp').append('Temperature: ' + urlData.current_temps);
            $('#cond').append('Conditions: ' + UrlData.conditions);
        });
      });
