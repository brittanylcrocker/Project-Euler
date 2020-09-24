const numbers = []
let i = 1

// const fibonacci = function(num1, num2, num3) {
//
//   for (i = 0; i < 10; i++) {
//     num3 = num1 + num2
//     num2 = num1
//     num2 = num3
//     console.log(num3[i])
//
//   }
// }
//
// console.log(fibonacci(5, 5))


const fibonacci = function(n) {
  if (n==1) {
    return [0,1]
  } else {
    const s = fibonacci(n-1)
    s.push(s[s.length-1] + s[s.length -2])
    return s
  }

}



const fibonacciOne = function (numbers) {
  let sum = 0
  for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
  sum += numbers[i]
}}
 return sum
}

console.log(fibonacciOne(fibonacci(4000000))
