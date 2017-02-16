//for unit convertor below

//gallons to liters
var literConvert = function(gallons) {
	return gallons * 3.78541;
}
//cups to fluid ounces
var fluidOzConvert = function(cups) {
	return cups * 8;
}
//quarts to pints
var pintConvert = function(quarts) {
	return quarts * 2;
}
//pounds to grams
var gramConvert = function(pounds) {
	return pounds * 453.592;
}
//miles to kilometers
var kmConvert = function(miles) {
	return miles * 1.60934;
}
//apples to oranges
var orangeConvert = function(apples) {
	return apples * .8934;
}

$(function() {
	$("#gal-convert").submit(function(event) {
		var gallons = parseInt($("#gal").val());
		var liters = literConvert(gallons);

		$("#liter-result").show();
		$("#floz-result").hide();
		$("#pint-result").hide();
		$("#gram-result").hide();
		$("#km-result").hide();
		$("#orange-result").hide();
		$("#liter-output").text(liters);

		event.preventDefault();
	});

	$("#cup-convert").submit(function(event) {
		var cups = parseInt($("#cup").val());
		var fluidOz = fluidOzConvert(cups);

		$("#liter-result").hide();
		$("#floz-result").show();
		$("#pint-result").hide();
		$("#gram-result").hide();
		$("#km-result").hide();
		$("#orange-result").hide();
		$("#floz-output").text(fluidOz);

		event.preventDefault();
	});

	$("#quart-convert").submit(function(event) {
		var quarts = parseInt($("#quart").val());
		var pint = pintConvert(quarts);

		$("#liter-result").hide();
		$("#floz-result").hide();
		$("#pint-result").show();
		$("#gram-result").hide();
		$("#km-result").hide();
		$("#orange-result").hide();
		$("#pint-output").text(pint);

		event.preventDefault();
	});

	$("#lb-convert").submit(function(event) {
		var pounds = parseInt($("#lb").val());
		var grams = gramConvert(pounds);

		$("#liter-result").hide();
		$("#floz-result").hide();
		$("#pint-result").hide();
		$("#gram-result").show();
		$("#km-result").hide();
		$("#orange-result").hide();
		$("#gram-output").text(grams);

		event.preventDefault();
	});

	$("#mile-convert").submit(function(event) {
		var miles = parseInt($("#miles").val());
		var kilometers = kmConvert(miles);

		$("#liter-result").hide();
		$("#floz-result").hide();
		$("#pint-result").hide();
		$("#gram-result").hide();
		$("#km-result").show();
		$("#orange-result").hide();
		$("#km-output").text(kilometers);

		event.preventDefault();
	});

	$("#apple-convert").submit(function(event) {
		var apples = parseInt($("#apples").val());
		var oranges = orangeConvert(apples);

		$("#liter-result").hide();
		$("#floz-result").hide();
		$("#pint-result").hide();
		$("#gram-result").hide();
		$("#km-result").hide();
		$("#orange-result").show();
		$("#orange-output").text(oranges);

		event.preventDefault();
	});

});

//for calculator below

var add = function(number1, number2){
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

$(function() {
  $("form#add").submit(function(event) {
    var number1 = parseInt($("#no1").val());
    var number2 = parseInt($("#no2").val());
    var result = (add(number1, number2));
		$("#add-result").show();
    $("#result-add").text(result);

    event.preventDefault();
  });

  $("form#subtract").submit(function(event) {
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = (subtract(number1, number2));
		$("#subtract-result").show();
    $("#result-subtract").text(result);

    event.preventDefault();
  });

  $("form#multiply").submit(function(event) {
    var number1 = parseInt($("#mul1").val());
    var number2 = parseInt($("#mul2").val());
    var result = (multiply(number1, number2));
		$("#multiply-result").show();
    $("#result-multiply").text(result);

    event.preventDefault();
  });

  $("form#divide").submit(function(event) {
    var number1 = parseInt($("#div1").val());
    var number2 = parseInt($("#div2").val());
    var result = (divide(number1, number2));
		$("#divide-result").show();
    $("#result-divide").text(result);

    event.preventDefault();
  });

  $("#Addition").click(function() {
    $("#subtract").hide();
    $("#multiply").hide();
    $("#divide").hide();
    $("#add").show();
  });

  $("#Subtraction").click(function() {
    $("#subtract").show();
    $("#multiply").hide();
    $("#divide").hide();
    $("#add").hide();
  });

  $("#Multiplication").click(function() {
    $("#subtract").hide();
    $("#divide").hide();
    $("#add").hide();
    $("#multiply").show();
  });

  $("#Division").click(function() {
    $("#subtract").hide();
    $("#multiply").hide();
    $("#add").hide();
    $("#divide").show();
  });

});
