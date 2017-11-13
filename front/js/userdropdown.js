$(document).ready(function() {
  $.get("https://softspotdatabase.herokuapp.com/users", function(usersstuff) {
    for (var j = 0; j < usersstuff.length; j++) {
      $('.userselect').append($('<option>' + usersstuff[j].name + '</option>'));
    }
  });
  $(".userselect").change(function(x) {
    x.preventDefault();
    window.location = "https://softspotfront.firebaseapp.com/html/user";
  });
});
