
//Creating Arrays 
// Simple Method
const arr = [1, 2, 3, 4, 5];
// console.log(arr[0]);
// console.log(arr[1]);


//using arrays 
const array = Array(1, 2, 3, 4, 5, 6, 7)
// console.log(array)

//methods 

array.push(8)
// console.log(array);

array.pop()
// console.log(array);

array.unshift(1)
// console.log(array)

array.shift()
// console.log(array)

// console.log(array.includes(6))


// console.log(array.indexOf(3));


// console.log(array.slice(1, 3));  //[ 2, 3 ]


// console.log(array.splice(1, 3)) //[ 2, 3, 4 ]
// console.log(array) //[ 1, 5, 6, 7 ]


const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
// a1.push(a2)
// console.log(a1)
// [ 1, 2, 3, [ 4, 5, 6 ] ]


// const arr = [1, 2, 3, 4, 5];
let newarr = arr.join(',')
// console.log(newarr);
// 1,2,3,4,5

// const res = a1.concat(a2)
// console.log(res)
// [ 1, 2, 3, 4, 5, 6 ]


// const a3 = [...a1, ...a2]
// console.log(a3);
// [ 1, 2, 3, 4, 5, 6 ]

const nested_array = [1, 2, 3, 4, [5, 6, 7, [8, 9, 11]]]
const real = nested_array.flat(Infinity)
// console.log(real)
// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 11
// ]



const string = "shreyash"
// console.log(Array.isArray(string));
// false


// console.log(Array.from(string));
// [
//   's', 'h', 'r',
//   'e', 'y', 'a',
//   's', 'h'
// ]

// console.log(Array.from({ name: 'shreyash' }))
//[]


const first_name = 'john'
const middle_name = 'smith'
const last_name = 'doe'

// console.log(Array.of(first_name, middle_name, last_name));
// [ 'john', 'smith', 'doe' ]

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.at(2));
// 3
// console.log(arr.at(-2));
//4


const iter_arr = [12, 3, 4, 5, 6, 7, 88, 9]
const iter = iter_arr.entries();

for (const [index, value] of iter) {
    console.log(index, value);
}

// 0 12
// 1 3
// 2 4
// 3 5
// 4 6
// 5 7
// 6 88
// 7 9

