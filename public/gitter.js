$(document).ready(function(){
  var lat;
  var lon;
  var urlData = {"latitude": lat, "longitude": lon};

  navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
      $.post('/', function(urlData) {
            $('#loc').append('Location: ' + urlData.location);
            $('#temp').append('Temperature: ' + urlData.current_temps);
            $('#cond').append('Conditions: ' + urlData.conditions);
        });
      });
});
