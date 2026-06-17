
` map ():
The map() method is one of the most useful and frequently used array methods in JavaScript. 
it transforms every element in an array and returns a  new array of the same length.

const newArray = originalArray.map((currentElement, index, array) => {
  // return the new transformed value
});

It returns a new array: It does not change (mutate) the original array you called it on.

It always returns an array of the same length: If your original array has 5 items, 
the new transformed array will always have exactly 5 items.
You must return a value: If you forget to write a return statement inside the callback function,
the new array will just be filled with undefined values.

`
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const result = number.map((num) => (num + 10))
// console.log(result);

// [
//   10, 11, 12, 13, 14,
//   15, 16, 17, 18, 19
// ]


const users = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "User" },
    { id: 3, name: "Charlie", role: "User" }
];

const userNames = users.map(user => user.name);

console.log(userNames); // Output: ["Alice", "Bob", "Charlie"]


`filter()

The filter() method is like a highly efficient sorting machine. While map() transforms every item,
filter() acts as a gatekeeper:it tests every item in your array against a specific condition and 
creates a brand-new array containing only the items 
 that passed the test.

 const filteredArray = originalArray.filter((currentElement, index, array) => {
  // return true to KEEP the element
  // return false to DISCARD the element
});

It returns a new array: It never modifies (mutates) the original array.

The array length can change: Unlike map(), the returned array will often be shorter than the original array (or even empty [] if nothing passes the test).

It expects a boolean return: The callback function must evaluate to a truthy or falsy value. If it returns true, the item makes it into the new array.
 If false, it gets left behind.
`

const result = number.filter(
    (num) => (num > 5)
)
console.log(result); // [ 6, 7, 8, 9 ]



const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => {
    return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6]
console.log(numbers);     // Output: [1, 2, 3, 4, 5, 6] (Original is safe)


const users_obejct = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true }
];

// Let's get only the users whose 'active' status is true
const activeUsers = users_obejct.filter(user => user.active === true);

// Shorthand version: const activeUsers = users.filter(user => user.active);

console.log(activeUsers);
/* Output:
[
  { id: 1, name: 'Alice', active: true },
  { id: 3, name: 'Charlie', active: true }
]
*/


`reduce ()
The reduce() method is often considered the most powerful—and sometimes the most 
confusing—of the array methods. While map() transforms items and filter() removes items, 
reduce() does exactly what its name implies: it reduces an entire array down to a single value.
This "single value" can be anything: a number (like a sum), a string, a boolean, or even a 
completely new object or array.

const finalValue = originalArray.reduce((accumulator, currentElement, index, array) => {
  // return the updated accumulator
}, initialValue);
`


const cart_price = [10, 20, 30, 40, 50]

const total_cart_price = cart_price.reduce((acc, curr) => {
    return acc + curr
}, 0)
// console.log(total_cart_price); 150


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce((acc, fruit) => {
    // If the fruit isn't in our object yet, add it with a value of 0
    if (!acc[fruit]) {
        acc[fruit] = 0;
    }
    // Add 1 to the count for this fruit
    acc[fruit]++;

    // Always return the accumulator for the next loop!
    return acc;
}, {}); // We start the accumulator as an empty object {}

console.log(fruitCount);
// Output: { apple: 3, banana: 2, orange: 1 }