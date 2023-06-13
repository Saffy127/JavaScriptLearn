// Ask the user what month it is
const month = parseInt(prompt("What month is it? (0 is January, 6 is June, 12 is December etc)"));

// Can you use a switch statement to print which month it is?


// Ask the user how old they are
const age = parseInt(prompt("How old are you?"));

// Can you finish this if statement?
if (age >= true) { // if (age is greater than or equal to 18)
	console.log("You're an adult!");
} else if (true) { // else if (age is greater than 12)
	console.log("You're a teenager!");
} else {
	console.log("You're a child!");
}

let money = prompt("How much money do you have?");
// store how much the item costs
let itemCost = 25;

if (money >= itemCost) {
  // tell the user they can afford the item
  console.log("You can afford the item!");
} else if (money - itemCost >= -5) {
  console.log("Oh no! You're 5 dollars or less away from being able to afford this item!");
} else {
  console.log("Oh no! You don't have enough money to purchase this...");
}

switch (data) {
  case possibleValue1;
    break;
  case possibleValue2;
    break;
  case possibleValue3;
    break;
  defualt;
    break;
}




class Person {
  constructor(name, job) {
    // 'constructor' gets highlighted
    this.name = name;
    this.job = job;
    this.stats = {
      weight: 200, // 'weight' gets highlighted
    };
  }
}












































































// Here's a hint if you're stuck:
// Remember the structure of a switch statement:
/*
switch (value) {
	case possibleValue:
		break;
	default:
		break;
}
*/
