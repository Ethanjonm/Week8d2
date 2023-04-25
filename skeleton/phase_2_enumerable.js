Array.prototype.myEach = function(callback) {

  for (let i = 0; i < this.length; i += 1) {
    callback(this[i])
  }
}
function plusOne(num) {
  console.log(num + 1)
}

// [1, 2, 3, 4].myEach(plusOne)

Array.prototype.myMap = function(callback) {
  let newArr = []
  for (let i = 0; i < this.length; i += 1) {
    newArr.push(callback(this[i]))
  }
  return newArr;
}
function plusOne(num) {
  return num + 1
}
// console.log([3, 4, 7, 9].myMap(plusOne))

Array.prototype.myReduce = function(callback, acc) {
  let num = 0
  if (acc === undefined) {
    num = this[0]
  } else {
    num = acc
  }

  for (let i = 0; i < this.length; i += 1) {
    num += this[i]
  }
  return num;
}

function addTo(num) {
  return num + acc
}

// console.log([5, 3, 7].myReduce())
// [4,2,5,1]  [1,2,4,5]
Array.prototype.bubbleSort = function() {

    let i = 0

    while (i < this.length) {

        if (this[i] > this[i + 1]) {
            let a = this[i]
            let b = this[i + 1]
            this[i] = b
            this[i + 1] = a
            i = 0
        } else {
            i += 1
        }

    }
    return this
}

console.log([4,2,5,1].bubbleSort())