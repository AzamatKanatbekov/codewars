// 8 kyu
//
// Area or Perimeter
//
// You are given the length and width of a 4-sided polygon.
// The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
//
// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
//
// const areaOrPerimeter = (l,w) => l === w ? l * w : 2 * (l + w)
// console.log(areaOrPerimeter(3,3))
//
// Эгерде l жана w бирдей болсо квадратын чыгарып берет,
// Болбосо жазылган сандарды кошуп 2ге кобойтуп периметрин чыгарып берет
//
// Total amount of points
//
// Our football team finished the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Write a function that takes such collection and counts the points of our team in the championship.
// Rules for counting points for each match:
//
// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
//
// const points = (games) => {
//   return games.reduce((acc, rec) => acc + (rec[0] > rec[2] ? 3 : rec[0] == rec[2] ? 1 : 0), 0)
// }
//
// const points = (games) => {
//   let count = 0
//   games.forEach(el =>{
//     if (el[0] > el[2]) count += 3 // count = count + 3
//     if (el[0] === el[2]) count += 1 // count = count + 1
//   })
//   return count
// }
//
// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))

// Exclamation marks series #1: Remove an exclamation mark from the end of string

// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata,
// you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// ? :
// const remove = (s) => s[s.length-1] === '!' ? s.slice(0, s.length-1) : s

// if else
// const remove = (s) =>{
//   if (s[s.length-1] === '!'){
//     return s.slice(0, s.length-1)
//   }else {
//     return s
//   }
// }
// console.log(remove('!!Hi!'))