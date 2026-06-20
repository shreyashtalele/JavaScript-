// // Find an element in an array.
// array = [10, 20, 30, 40, 50, 30, 70, 80]
// function linearSearch(array, target) {
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] === target) {
//             return true
//         }
//     }
//     return false
// }
// console.log(linearSearch(array, 100));

// // Find all occurrences of a given element.

// function findAllOccurence(array, target) {
//     let count = []
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] === target) {
//             count.push(index)
//         }
//     }
//     return count
// }
// console.log(findAllOccurence(array, 30));


// // Count occurrences of an element

// function countOccurences(array, target) {
//     let count = 0
//     for (num of array) {
//         if (num === target) {
//             count++
//         }
//     }
//     return count
// }

// console.log(countOccurences(array, 30));


// //Find the first occurrence
// function printFirstOccurence(array, target) {
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] === target) {
//             return index
//         }
//     }
// }
// console.log(printFirstOccurence(array, 30));

// // Find the last occurrence
// function printLastOccurence(array, target) {
//     for (let index = array.length - 1; index >= 0; index--) {
//         if (array[index] === target) {
//             return index
//         }

//     }
// }
// console.log(printLastOccurence(array, 30));

// Binary Search
function binarySearch(array, target) {
    let left = 0
    let right = array.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (array[mid] === target) {
            return mid
        }
        else if (target < array[mid]) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }
    return -1
}
let sorted_array = [10, 20, 30, 40, 50, 60, 70]
console.log(binarySearch(sorted_array, 10));



// Binary Search ( recursive)

function binarySearchRecursive(array, target, left, right) {
    let mid = Math.floor((left + right) / 2)
    if (array[mid] === target) {
        return mid
    }
    else if (target < array[mid]) {
        return binarySearchRecursive(array, target, left, mid - 1)
    } else {
        return binarySearchRecursive(array, target, mid + 1, right)
    }
}

console.log(binarySearchRecursive(sorted_array, 50, 0, sorted_array.length - 1));


