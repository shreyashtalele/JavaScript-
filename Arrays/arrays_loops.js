// ``Seven Types of Loops
// 1. For Loop
// 2.While Loop 
// 3.Do-while loop
// 4.for-of loop
// 5.for -in loop
// 6.foreach()loop
// 7.map() used for iteration
//     For Loop :

// The for loop is the most commonly used loop in JavaScript.
// Use it when you know beforehand how many times the loop should run.
// for(initialization; condition; increment/decrement) {
//     // code
// }

arr = [10, 20, 30, 40, 50, 60]
// for (let index = 0; index <= arr.length; index++) {
//     console.log(arr[index]);
// }


// A while statement executes its statements as long as a specified 
// condition evaluates to true

let i = 5
// while (i >= 0) {
//     console.log(i);
//     i--;
// }


// A do...while loop is a loop that executes the code block first 
// and checks the condition afterward.
// The code inside the loop always runs at least once, even if the condition is false.

// do {
//     // Code to execute
// } while (condition);


// do {
//     console.log(i);
//     i--

// } while (i >= 0);



// The for...of loop is used to iterate over the values of an iterable.
// Syntax 
// for (let variable of iterable) {
//     // code
// }
// variable → Stores the current value.
// iterable → The array, string, or other iterable you're looping over.
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (num of array) {
//     console.log(num)
// }


// For - In loop
// for...in is used to iterate over the keys (property names) of an object.
// Remember: It gives you keys, not values.

// Syntax 
// for (let key in object) {
//     // code
// }


const obejct = {
    name: "shreyash",
    age: 22,
    city: 'pune'
}

for (key in obejct) {
    console.log(key);
}

for (key in obejct) {
    console.log(`${key} -- ${obejct[key]}`)
}




// foreach()
const array_fruits = ['apple', 'banana', 'kiwi', 'peach']

array_fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`)
})