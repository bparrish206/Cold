$(document).ready(function(){
  if (window.location.protocol != "https:")
    window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
  

$.post("http://localhost:3000/", function(urlData) {
            $('#loc').append('Location: ' + urlData.location);
            $('#temp').append('Temperature: ' + urlData.current_temps);
            $('#cond').append('Conditions: ' + urlData.conditions);
        });
      });
