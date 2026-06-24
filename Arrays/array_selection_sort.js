function selectionSort(array) {
    // for loop upto array length -1 
    for (let index = 0; index < array.length - 1; index++) {
        // minIndex = current index 
        let minIndex = index
        // second loop for searching smallest element in unsorted array 
        for (let j_index = index + 1; j_index < array.length; j_index++) {
            //check if currenet j_index element is smaller than element at array[minIndex] 
            if (array[j_index] < array[minIndex]) {
                // if true minIndex is replaced by j_index 
                minIndex = j_index
            }

        }

        //Swap the smallest element with the element at the current index 
        //to place it in its  correct sorted position.
        [array[index], array[minIndex]] = [array[minIndex], array[index]]
    }

    return array
}
console.log(selectionSort([64, 25, 12, 22, 11]));




// Selection Sort in Descending Order 
function selectionSortDecending(array) {
    for (let index = 0; index < array.length - 1; index++) {
        let maxIndex = index
        for (let j_index = index + 1; j_index < array.length; j_index++) {
            if (array[j_index] > array[maxIndex]) {
                maxIndex = j_index
            }
        }
        [array[index], array[maxIndex]] = [array[maxIndex], array[index]]
    }
    return array
}
console.log(selectionSortDecending([64, 25, 12, 22, 11]));
