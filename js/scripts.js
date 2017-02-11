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

$(function() {
	$("#gal-convert").submit(function(event) {
		var gallons = parseInt($("#gal").val());
		var liters = literConvert(gallons);

		$("#liter-output").text(liters);

		event.preventDefault();
	});

	$("#cup-convert").submit(function(event) {
		var cups = parseInt($("#cup").val());
		var fluidOz = fluidOzConvert(cups);

		$("#floz-output").text(fluidOz);

		event.preventDefault();
	});

	$("#quart-convert").submit(function(event) {
		var quarts = parseInt($("#quart").val());
		var pint = pintConvert(quarts);

		$("#pint-output").text(pint);

		event.preventDefault();
	});

	$("#lb-convert").submit(function(event) {
		var pounds = parseInt($("#lb").val());
		var grams = gramConvert(pounds);

		$("#gram-output").text(grams);

		event.preventDefault();
	});
});
