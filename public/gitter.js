$(document).ready(function(){
http://localhost:3000/
$.post(Host, function(urlData) {
            $('#loc').append('Location: ' + urlData.location);
            $('#temp').append('Temperature: ' + urlData.current_temps);
            $('#cond').append('Conditions: ' + urlData.conditions);
          });
        });
