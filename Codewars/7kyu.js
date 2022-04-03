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
// const smaller = (nums) => {
//   return nums.map((el, idx)=>{
//     return nums.slice(idx).filter(item => item < el).length
//   })
// }
// console.log(smaller([1, 2, 0]))
//

// Mumbling
// const accum = (s) => {
//   let result = ''
//   for (let i = 0; i < s.length; i++){
//     result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + (i < s.length - 1 ? '-' : '')
//   }
//   return result
// }
// console.log(accum('abcd'))

// Day of the Year
// const toDayOfYear = (arr) => (new Date(arr[2],arr[1]-1,arr[0]).getTime()-new Date(arr[2],0,0).getTime())/1000/60/60/24
// console.log(toDayOfYear([1, 1, 2000]))

// Frank's Sticky Calculator
// const stickyCalc = (operation, val1, val2) => {
//   val1 = Math.round(val1)
//   val2 = Math.round(val2)
//   val3 = Number(val1.toString() + val2.toString());
//   switch (operation){
//     case "+": result = val3 + val2; break;
//     case "-": result = val3 - val2; break;
//     case "*": result = val3 * val2; break;
//     case "/": result = val3 / val2; break;
//   }
//   return Math.round(result);
// }
// console.log(stickyCalc('/', 433, 930))

// Two to One
// const longest = (s1, s2) => [...new Set((s1 + s2).split(''))].sort().join('')
// console.log(longest("aretheyhere", "yestheyarehere"))


// Case Swapping
// const swap = (str) => {
//   return str.split('').map((el) =>{
//     if(el.toUpperCase()===el) return el.toLowerCase()
//     if(el.toLowerCase()===el) return el.toUpperCase()
//   }).join('')
// // }
// console.log(swap('HelloWorld'))