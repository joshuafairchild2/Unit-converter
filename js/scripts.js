//liters to gallons
var liters = function(gallons) {
	return gallons * 3.78541;
}

var gallons = parseInt(prompt("Please enter a volume in gallons:"));

alert(liters(gallons).toFixed(2) + " Liter(s)");

//cups to fluid ounces
var fluidOunces = function(cups) {
  return cups * 8;
}

var cups = parseInt(prompt("Please enter a volume in cups:"));

alert(fluidOunces(cups).toFixed(2) + " fluid ounce(s)");

//quarts to pints
var pints = function(quarts) {
  return quarts * 2;
}

var quarts = parseInt(prompt("Please enter a volume in quarts:"));

alert(pints(quarts).toFixed(2) + " pints");

//pounds to grams
var grams = function(pounds) {
  return pounds * 453.592;
}

var pounds = parseInt(prompt("Please enter a weight in pounds:"));

alert(grams(pounds).toFixed(3) + " gram(s)");
