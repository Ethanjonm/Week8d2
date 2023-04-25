Array.prototype.uniq = function()  {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        if (!newArr.includes(this[i])) {
            newArr.push(this[i]) }
    //         continue }
    //         else {
    //         newArr.push(array[i])
    // }
    }
    return newArr;
    
}

// console.log(uniq([ 1, 2, 2, 3, 3, 3 ]))
console.log([ 1, 2, 2, 3, 3, 3 ].uniq())
// [1,-1,2,3,4,5,-3]
Array.prototype.twoSum = function() {
    let newArr = [];

    for (let i = 0; i < this.length; i += 1) {



        for (let j = i + 1; j < this.length; j += 1) {

            if (this[i] + this[j] === 0) {
                newArr.push([this[i], this[j]])
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
