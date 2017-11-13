$(document).ready(function() {
  $.get("https://softspotdatabase.herokuapp.com/tech", function(techstuff) {
    for (var i = 0; i < techstuff.length; i++) {
      $('.pincode').append($('<option>' + techstuff[i].name + '</option>'));
    }
    $(".pincode").change(function(x) {
      x.preventDefault();
      const findtech = $(".pincode  option:selected").val();
      console.log((techstuff.find(y => y.name === findtech).id))
      const newid = (techstuff.find(y => y.name === findtech).id)
      window.location = "https://softspotfront.firebaseapp.com/html/tech?id=" + newid + "";
    });
  });

});
