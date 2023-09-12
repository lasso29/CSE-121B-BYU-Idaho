// 🔍 Part 1 error
let userName = "Moroni";
console.log(`Username: ${userName}`);
userName = "Moronihah";
console.log(`Username: ${userName}`);

// 🔍 Part 2 error
const currentDateAndTime = new Date(); // Corrected to create a new Date object
console.log(`It is now ${currentDateAndTime}`);

// 🔍 Part 3 error. The following statement calls a function named total that accepts any number of arguments and returns the sum. The returned value is stored in a variable named theTotal. 1-10 are the arguments.

let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

// 'total' function declaration
function total(...theNumbers) {
	let sum = 0;
	for (let aNumber of theNumbers) { // Changed 'in' to 'of' to iterate over values
		sum += aNumber * 1; // Removed '* 1', as it's not necessary
	}
	return sum;
}
