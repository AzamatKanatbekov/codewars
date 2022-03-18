// 7kyu
//
// Age in days
//
// Did you ever want to know how many days old are you? Complete the function which returns your age in days.
// The birthday is given in the following order: year, month, day.
//
// For example if today is 30 November 2015 then
//
// ageInDays(2015, 11, 1) returns "You are 29 days old"
// The birthday is expected to be in the past.
//
// Suggestions on how to improve the kata are welcome!
//
// const ageInDays = (year, month, day)=>{
//   const birthday = new Date().getTime();
//   const date = new Date(year,month-1,day).getTime()
//   const days=Math.floor(Math.abs(birthday-date) / (1000 * 3600 * 24))
//   return `You are ${days} days old`
// }
// console.log(ageInDays(2015,11,1))
//
// How many are smaller than me?
//
// Write a function that given, an array arr, returns an array containing
// at each index i the amount of numbers that are smaller than arr[i] to the right.
//
// For example:
//
// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]Промисы
//
// const smaller = (nums) => {
//   return nums.map((el, idx)=>{
//     return nums.slice(idx).filter(item => item < el).length
//   })
// }
// console.log(smaller([1, 2, 0]))
//
