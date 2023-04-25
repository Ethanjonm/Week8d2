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

console.log(uniq([ 1, 2, 2, 3, 3, 3 ]))