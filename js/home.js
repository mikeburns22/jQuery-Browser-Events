// PAGE LOAD
$(document).ready(function() {

   $('#akronInfoDiv').hide();
   $('#minneapolisInfoDiv').hide();
   $('#louisvilleInfoDiv').hide();

});


// NAVIGATION BUTTON BEHAVIOR
// akron

$('#akronButton').click(function() {
  $('#akronInfoDiv').toggle('slow', function() {
    $('#akronWeather').hide();
    
  });
});
// minneapolis

$('#minneapolisButton').click(function() {
  $('#minneapolisInfoDiv').toggle('slow', function() {
    $('#minneapolisWeather').hide();

  });
});
// louisville

$('#louisvilleButton').click(function() {
  $('#louisvilleInfoDiv').toggle('slow', function() {
    $('#louisvilleWeather').hide();

  });
});


// SHOW/HIDE WEATHER BEHAVIOR
// akron

$('#akronWeatherButton').click(function() {
  $('#akronWeather').toggle('slow', function() {

  });
});
// minneapolis

$('#minneapolisWeatherButton').click(function() {
  $('#minneapolisWeather').toggle('slow', function() {

  });
});
// louisville

$('#louisvilleWeatherButton').click(function() {
  $('#louisvilleWeather').toggle('slow', function() {

  });
});


// TABLE BACKGROUND COLOR
$("td").hover(
    // in callback
    function () {
        $(this).css("background-color", "WhiteSmoke");
    },
    // out callback
    function () {
        $(this).css("background-color", "");
    }
);
