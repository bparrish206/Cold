
      $.ajax({
        url: '/',
        type: 'POST',
        urlData: {lat:latitude, lon: longitude},
        success: function(urlData) {
            $('#loc').append('Location: ' + urlData.location);
            $('#temp').append('Temperature: ' + urlData.current_temps);
            $('#cond').append('Conditions: ' + urlData.conditions);
            $('#box').append('<img src="'+urlData.outside+'">');
        }
      });
