var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#add1").val());
    var number2 = parseInt($("input#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#subtract1").val());
    var number2 = parseInt($("input#subtract2").val());
    var result = number1 - number2;
    $("#output").text(result);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#multiply1").val());
    var number2 = parseInt($("input#multiply2").val());
    var result = number1 * number2;
    $("#output").text(result);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("input#divide1").val());
    var number2 = parseInt($("input#divide2").val());
    var result = number1 / number2;
    $("#output").text(result);
  });
});
