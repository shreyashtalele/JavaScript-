
// // Bubble Sort  - Sort array in ascending order
function bubbleSort(array) {
    for (let index = 0; index < array.length - 1; index++) {
        for (let j_index = 0; j_index < array.length - 1 - index; j_index++) {

            if (array[j_index] > array[j_index + 1]) {
                let temp = array[j_index]
                array[j_index] = array[j_index + 1]
                array[j_index + 1] = temp
            }

        }
    }
    return array
}
console.log(bubbleSort([5, 3, 8, 4, 2]));


// // Bubble Sort Optimized - Optimized Bubble Sort
function optimizedBubbleSort(array) {
    for (let index = 0; index < array.length - 1; index++) {
        let swapped = false;
        for (let j_index = 0; j_index < array.length - 1 - index; j_index++) {
            if (array[j_index] > array[j_index + 1]) {
                [array[j_index], array[j_index + 1]] = [array[j_index + 1], array[j_index]]
                swapped = true
            }
        }

        if (!swapped) {
            break
        }
    }
    return array
}
console.log(optimizedBubbleSort([1, 2, 3, 4, 5]));


// Bubble sort in Descending Order - Sort array in descending order

function descendingBubbleSort(array) {
    for (let index = 0; index < array.length - 1; index++) {
        for (let j_index = 0; j_index < array.length - 1 - index; j_index++) {

            if (array[j_index + 1] > array[j_index]) {
                [array[j_index + 1], array[j_index]] = [array[j_index], array[j_index + 1]]
            }
        }
    }
    return array
}

console.log(descendingBubbleSort([5, 3, 8, 4, 2]));


//Count number of swaps

function countNumberofSwaps(array) {
    let swap_count = 0
    for (let index = 0; index < array.length - 1; index++) {
        for (let j_index = 0; j_index < array.length - 1 - index; j_index++) {

            if (array[j_index] > array[j_index + 1]) {
                [array[j_index], array[j_index + 1]] = [array[j_index + 1], array[j_index]]
                swap_count += 1
            }
        }

    }
    return swap_count
}

console.log(countNumberofSwaps([5, 1, 4, 2]));
