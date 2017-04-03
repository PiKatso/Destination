// Buisness Logic
  function Destination(location, date, notes) {
    this.myLocation = location;
    this.myDate = date;
    this.myNotes = notes;
  }

// User Interface Logic
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var userLocation = $("input[name=location]").val();
    var userDate = $("input[name=date]").val();
    var userNotes = $("textarea[name=notes]").val();
    var newTrip = new Destination(userLocation, userDate, userNotes);

    $("#location").text(newTrip.myLocation);
    $("#date").text(newTrip.myDate);
    $("#notes").text(newTrip.myNotes);
  });


});
