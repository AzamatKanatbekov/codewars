// 7 kyu
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
// }

// console.log(swap('HelloWorld'))

// Speed Control
// const gps = (s, x) => {
//   if (x.length<=1) {
//     return 0;
//   }
//   let output = [];
//   for (let i = 0; i < x.length-1; i++) {
//     output.push((x[i+1]-x[i])*3600/s);
//   }
//   return Math.max(...output);
// }
// console.log(gps(14,[0.0, 0.01, 0.36, 0.6, 0.84, 1.05, 1.26, 1.47, 1.68, 1.89, 2.1, 2.31, 2.52, 2.73, 2.94, 3.15]))

// Find the middle element
// const gimme = (triplet) => {
//   const sorted = [...triplet].sort((a, b) => a - b)
//   return triplet.indexOf(sorted[1])
// };
// console.log(gimme([2,3,1]))

// Return the closest number multiple of 10
// const closestMultiple10 = num => Math.round(num/10)*10
// console.log(closestMultiple10(55))

// Maximum Length Difference
// const mxdiflg = (a1, a2) => {
//   if (a1.length === 0 || a2.length === 0) return -1
//   const length1 = a1.map(string => string.length)
//   const length2 = a2.map(string => string.length)
//   return Math.max(
//     Math.max(...length1) - Math.min(...length2),
//     Math.max(...length2) - Math.min(...length1)
//   )
// }
// console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))

// Insert dashes
// const insertDash = (num) => {
//   let result = []
//   num = num.toString().split('').map(Number)
//   for(let i=0;i<num.length;i++){
//     if(num[i] % 2 !== 0 && num[i+1] % 2 !== 0){
//       result.push(num[i])
//       result.push('-')
//     }
//     else {
//       result.push(num[i])
//     }
//   }
//   if(result[result.length-1]==='-') result.pop()
//   return result.join("")
// }
// console.log(insertDash(123456))

// Jaden Casing Strings
// String.prototype.toJadenCase = function () {
//   return this.split(' ').
//   map(el => el[0].toUpperCase() + el.slice(1)).join(' ');
// };
// console.log(("How can mirrors be real if our eyes aren't real").toJadenCase())

// Fun with lists: indexOf
// В JavaScript итератор - это объект, который предоставляет метод next(), возвращающий следующий элемент последовательности.
// const indexOf = (head, value) => {
//   let count = 0
//   while(head) {
//     if (head.data === value){return count}
//     head = head.next;
//     count++
//   }
//   return -1;
// }
// console.log(indexOf([1, 2, 3], 3))

// Find the nth Digit of a Number
// const findDigit = (num, nth) => {
//   if (nth<=0) return -1;
//   let nums=(''+Math.abs(num));
//   return nums.slice(nums.length-nth,nums.length-nth+1)*1;
// }
// console.log(findDigit(5673, 4))
1
// makeBackronym
// const makeBackronym = str => str.toUpperCase().split('').map(l => dict[l]).join(" ");
// console.log(makeBackronym('codewars'))

// Round up to the next multiple of 5
// const roundToNext5 = n => Math.ceil(n/5)*5
// console.log(roundToNext5(6))


// Find the vowels
// const vowelIndices = (word) => {
//   let arr=[]
//   let a=word.split('');
//   for (let i=0;i<word.length;i++){
//     if (/[aeuoiy]/gi.test(a[i])) {arr.push(i+1)}
//   }
//   return arr
// }
// console.log(vowelIndices('Super'))


// ...arr - rest operator
// join() - Преобразовать строку
// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
// const unusedDigits = (...arr) => {
//   let digits = arr.join();
//   return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     .filter(el => !digits.includes(el))
//     .join('');
// };
// console.log(unusedDigits(12, 34, 56, 78))

// You Got Change?
// const bills = [100, 50, 20, 10, 5, 1];
// const giveChange = amount => (
//   bills
//     .map(value => {
//       let result = Math.trunc(amount / value);
//       amount = amount % value;
//
//       return result;
//     })
//     .reverse()
// );
// console.log(giveChange(365))

