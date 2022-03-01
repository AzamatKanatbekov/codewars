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

// Find the Remainder

// Task:
// Write a function that accepts two integers and returns the
// remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.
//
// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)
//
// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)
//
// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)
//
// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

// const remainder = (n, m) =>{
//   if (n > m){
//     return  n % m
//   }else{
//     return  m % n
//   }
// }

// const remainder = (n, m) => (n > m ? n % m : m % n)

// console.log(remainder(45,2))



// Pirates!! Are the Cannons ready!??

// Ahoy Matey!
//
// Welcome to the seven seas.
//
// You are the captain of a pirate ship.
//
// You are in battle against the royal navy.
//
// You have cannons at the ready.... or are they?
//
// Your task is to check if the gunners are loaded and ready, if they are: Fire!
//
// If they aren't ready: Shiver me timbers!
//
// Your gunners for each test case are 4 or less.
//
// When you check if they are ready their answers are in a dictionary and will either be: aye or nay
//
// Firing with less than all gunners ready is non-optimum
// (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

//  Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

// const cannonsReady = gunners => Object.values(gunners).every(el => el === 'aye') ? 'Fire!' : 'Shiver me timbers!'
// console.log(cannonsReady({'aye':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'}))

// For Twins: 2. Math operations

// Task:
// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you.
// The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:
//
// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.

// const iceBrickVolume = (radius, bottleLength, rimLength) => {
//   return (bottleLength - rimLength) * radius * 2 * radius;
// }

// console.log(iceBrickVolume(1,10,2))

// Reversed Words

//Complete the solution so that it reverses all of the words within the string passed in.
// Example:
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// split() строканы массивке айлантат,
// reverse() тамгалардын ордун алмаштырат hello - olleh
// join() массивди кайра строкага айлантат

// const reverseWords = (str) => str.split(' ').reverse().join(' ')
//
// console.log(reverseWords('hello world!' ))

// function countPositivesSumNegatives(input) {
//   return (input && input.length)
//     ? input.reduce(([pSum, nSum], curr) => [pSum += (curr >= 1 && 1), nSum + Math.min(0, curr)], [0, 0])
//     : [];
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

// Add new item (collections are passed by reference)

// Add an item to the list:
//
// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter.
// (lets say you add an integer value, like 13)
//
// In our test case we check to assure that the returned list has one more item than the input list.
// However the method needs some modification to pass this test.
//
// P.S. You have to create a new list and add a new item to that.
// (This Kata is originally designed for C# language and it shows that adding
// a new item to the input list is not going to work, even though the parameter is passed by value,
// but the value is poining to the reference of list and any change on parameter will be seen by caller)


// listOfNumbers массивден ...баардык(spread operator) элеметти алдым жана 8 кошуп койдум
const addExtra = listOfNumbers => [...listOfNumbers, 8]

console.log(addExtra([1]))






































