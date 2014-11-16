$(document).ready(function(){
process.env.host = http://localhost:3000/;
$.post("host ", function(urlData) {
            $('#loc').append('Location: ' + urlData.location);
            $('#temp').append('Temperature: ' + urlData.current_temps);
            $('#cond').append('Conditions: ' + urlData.conditions);
          });
        });
