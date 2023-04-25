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

console.log([5, 3, 7].myReduce())