$(document).ready(function() {
  $(".jumbotron form").submit(function(event) {

    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start").val();
    var endInput = $("input#end").val();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);
    $(".end").text(endInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});
