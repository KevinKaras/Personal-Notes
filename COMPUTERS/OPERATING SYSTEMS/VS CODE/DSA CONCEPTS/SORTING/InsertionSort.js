

const TestArray = [5, 2, 4, 6, 1, 0, 9, 50, 25, 1]

function InsertionSort(array){
    let arr = array

    for(let i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i - 1;
        while(j > -1 && arr[j] > key){
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = key
    }
    return arr
}

console.log(InsertionSort(TestArray))