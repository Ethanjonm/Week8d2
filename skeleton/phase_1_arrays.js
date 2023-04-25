function uniq(array) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (!newArr.includes(array[i])) {
            newArr.push(array[i]) }
    //         continue }
    //         else {
    //         newArr.push(array[i])
    // }
    }
    return newArr;
    
}

// console.log(uniq([ 1, 2, 2, 3, 3, 3 ]))

// [1,-1,2,3,4,5,-3]
function twoSum(array) {
    let newArr = [];

    for (let i = 0; i < array.length; i += 1) {



        for (let j = i + 1; j < array.length; j += 1) {

            if (array[i] + array[j] === 0) {
                newArr.push([array[i], array[j]])
            }
        }
    }
    return newArr;

}

// console.log(twoSum([1,-1,2,3,4,5,-3]))
// i 1,2,3
// j i[j]
// [[1,2,3],[4,5,6],[7,8,9]]


// emp = [[],[],[]]
function transpose(array) {
    let newArr = [[],[],[]];

    for (let i = 0; i < array.length; i += 1) {



        for (let j = 0; j < array[i].length; j += 1) {

            
            newArr[j].push(array[i][j])
            
        }
    }
    return newArr
    


}

// console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))
