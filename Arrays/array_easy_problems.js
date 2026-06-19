// `Print all elements of an array`

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// `Find the sum of all elements`
// //`using array`
// let sum = 0
// for (let index = 0; index < array.length; index++) {
//     sum += array[index];
// }
// console.log(sum);

// `using reduce()`
// const result = array.reduce((sum, index) => { return sum + index }, 0)
// console.log(result);


// //`Find the largest element`
// let max = 0;
// for (let index = 0; index <= array.length; index++) {
//     if (array[index] > max) {
//         max = array[index]
//     }
// }
// console.log(max);
// console.log(Math.max(...array))


// // `Find the smallest element`
// let arr = [10, 5, 6, 7, 0, 1, 5]
// let min = arr[0]
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] < min) {
//         min = arr[index]
//     }
// }
// console.log(min);
// console.log(Math.min(...arr))

// //`Find the average of array`
// let avg_sum = 0
// for (let index = 0; index < array.length; index++) {
//     avg_sum += array[index]
// }
// console.log(avg_sum / array.length);


// //Count even and odd numbers
// let odd_count = 0
// let even_count = 0
// for (let index = 0; index < array.length; index++) {
//     if (array[index] % 2 == 0) {  // Both will Work  == and === 
//         even_count += 1
//     }
//     else {
//         odd_count += 1
//     }
// }
// console.log(even_count, odd_count);

// //Count positive, negative and zero elements
// let positive = 0
// let negative = 0
// let zero = 0
// const array_test = [0, 1, -1, 0, 2, 0, -9, 6, 0, -7]
// for (let index = 0; index <= array_test.length; index++) {
//     if (array_test[index] > 0) {
//         positive += 1
//     }
//     else if (array_test[index] < 0) {
//         negative += 1
//     }
//     else {
//         zero += 1
//     }
// }
// console.log(positive, negative, zero);



// //Find the second largest element
// function findSecondLargest(array) {
//     let first_largest = -Infinity
//     let second_largest = -Infinity
//     for (let num of array) {
//         if (num > first_largest) {
//             second_largest = first_largest
//             first_largest = num
//         }
//         else if (num < first_largest && num > second_largest) {
//             second_largest = num
//         }
//     }

//     return second_largest === -Infinity ? undefined : second_largest
// }

// console.log(findSecondLargest(array))



// Find the second smallest element



function findSecondSmallest(array) {
    let first_smallest = Infinity
    let second_samllest = Infinity
    for (let num of array) {
        if (num < first_smallest) {
            second_samllest = first_smallest
            first_smallest = num
        }
        else if (num > first_smallest && num < second_samllest) {
            second_samllest = num
        }
    }

    return second_samllest === Infinity ? undefined : second_samllest
}

console.log(findSecondSmallest(array));


//Reverse an array
function reverseArray(array) {
    new_arr = []
    for (let index = array.length - 1; index >= 0; index--) {
        new_arr.push(array[index])
    }

    return new_arr
}
console.log(reverseArray(array));

// Check if array is sorted
function checkArraySorted(array) {
    if (array.length === 1) return "array have only one element"

    isAsending = true
    isDecending = true

    for (let index = 0; index < array.length - 1; index++) {
        let current = array[index]
        let next = array[index + 1]
        if (current > next) {
            isAsending = false
        }
        if (current < next) {
            isDecending = false
        }
    }

    if (isAsending && isDecending) {
        return "all elements are same"
    }
    else if (isAsending) {
        return "array is sorted asending"
    }
    else if (isDecending) {
        return "array is sorted"
    }
    else {
        return "not sorted "
    }
}

console.log(checkArraySorted([1, 2, 3, 4, 5]));

//Count occurrences of a given number
function countOccurnce(array, target) {
    if (array.length < 1) return 1
    let count = 0
    for (let number of array) {
        if (number === target) {
            count += 1
        }
    }
    return count
}
console.log(countOccurnce([1, 2, 3, 2, 4, 2, 5], 2));
