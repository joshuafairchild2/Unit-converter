var liters = function(gallons) {
	return gallons * 3.78541
}

var gallons = parseInt(prompt("Please enter a volume in gallons:"));

alert(liters(gallons).toFixed(2));
