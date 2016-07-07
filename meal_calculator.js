
// Create diner objects which represent a single diner
var Diner = function (name) {  
	this.dishes = [];  
	this.name = name; 
	this.addDish = function (dish) {
		this.dishes.push(dish); 
		console.log("The dish " + dish.name  + " has been added for " + this.name); 
	};
	console.log("Created a new diner, whose name is " + name); 
}; 
// Creates some diners
var kent = new Diner("Kent")
var heath = new Diner("Heath")
var olaf = new Diner("Olaf")

// Add dishes to a diner's meal
// Let's create a kitchen.
var Dish = function (name, price) { 
	this.name = name; 
	this.price = price; 
	console.log("Created a new dish called " + name + " which cost $" + price);
};

// Let's cook.
var pizza = new Dish("Pizza", 12); 
var burger = new Dish("Burger", 8);
var burrito = new Dish("Burrito", 8);
var cheese = new Dish("Cheese", 4);
var donut = new Dish("Donut", 2);

// Let's build Meals so diners can order dishes
var Meal = function () { 
	this.diners = [];
	this.addDiner = function (diner) { 
		this.diners.push(diner); 
		console.log("The diner " + diner.name + " has been added to the meal."); 
	};
	console.log("Created a new meal"); 
};

// Adding diners to the meal
var meal = new Meal(); 
meal.addDiner(kent); 
meal.addDiner(heath); 
meal.addDiner(olaf); 

// Diners ordering dishes 
kent.addDish(cheese);
kent.addDish(donut);
heath.addDish(burrito); 
heath.addDish(burger); 
heath.addDish(pizza); 
heath.addDish(donut);  
olaf.addDish(pizza);  
olaf.addDish(cheese); 
olaf.addDish(burger); 


// Total up the cost of all of the diners' meals
Meal.prototype.calculateTotal = function() { 
	var totalAmount = 0; 
	for (var i = 0; i < this.diners.length; i++) { 
		var currentDinerTotal = 0; 
		for (var d = 0; d < this.diners[i].dishes.length; d++) { 
			totalAmount += this.diners[i].dishes[d].price; 
			currentDinerTotal += this.diners[i].dishes[d].price; 
		} 
		this.diners[i].individualAmount = currentDinerTotal; 
	}
	return totalAmount; 
};

console.log("Please pay the bill of $" + meal.calculateTotal()); // print amount of full bill


// Add a fixed tax percentage to the total bill
var totalAmount = meal.calculateTotal();
var tax = .07;
var totalBill = (tax + 1) * totalAmount;
console.log("Your total bill with tax is $" + totalBill);

// Add a percentage tip to the total bill
var tip = .15;
var billPlusTip = (tip + 1) * totalBill;
console.log("Your total with tip included is $" + billPlusTip);


// Each diner should pay the tax on their own food
for (var i = 0; i < meal.diners.length; i++) {
	console.log(meal.diners[i].name + "'s tax is $" + meal.diners[i].individualAmount * tax);
}

// Each diner should pay an equal share of the tip
var dinersTip = (billPlusTip - totalBill)/meal.diners.length; 
console.log("Each diner has to pay a tip of $" + dinersTip);

// Print a breakdown for what each diner owes
for (var i = 0; i < meal.diners.length; i++) {
	console.log(meal.diners[i].name + " owes $" + meal.diners[i].individualAmount + " for dinner and $" + meal.diners[i].individualAmount * tax + " for tax and $" + dinersTip + " for a tip.");
}