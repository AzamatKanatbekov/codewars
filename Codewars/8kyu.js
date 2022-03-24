//  8 kyu
//
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
//
// Exclamation marks series #1: Remove an exclamation mark from the end of string
//
// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata,
// you can assume that the input data is always a string, no need to verify it.
//
// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
//
// ? :
// const remove = (s) => s[s.length-1] === '!' ? s.slice(0, s.length-1) : s
//
// if else
// const remove = (s) =>{
//   if (s[s.length-1] === '!'){
//     return s.slice(0, s.length-1)
//   }else {
//     return s
//   }
// }
// console.log(remove('!!Hi!'))
//
// Find the Remainder
//
// Task:
// Write a function that accepts two integers and returns the
// remainder of dividing the larger value by the smaller value.
//
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
//
// const remainder = (n, m) =>{
//   if (n > m){
//     return  n % m
//   }else{
//     return  m % n
//   }
// }
//
// const remainder = (n, m) => (n > m ? n % m : m % n)
//
// console.log(remainder(45,2))
//
//
//
// Pirates!! Are the Cannons ready!??
//
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
//
// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!
//
//  Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
//
// const cannonsReady = gunners => Object.values(gunners).every(el => el === 'aye') ? 'Fire!' : 'Shiver me timbers!'
// console.log(cannonsReady({'aye':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'}))
//
// For Twins: 2. Math operations
//
// Task:
// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you.
// The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:
//
// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.
//
// const iceBrickVolume = (radius, bottleLength, rimLength) => {
//   return (bottleLength - rimLength) * radius * 2 * radius;
// }
//
// console.log(iceBrickVolume(1,10,2))
//
// Reversed Words
//
// Complete the solution so that it reverses all of the words within the string passed in.
// Example:
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
//
// split() строканы массивке айлантат,
// reverse() тамгалардын ордун алмаштырат hello - olleh
// join() массивди кайра строкага айлантат
//
// const reverseWords = (str) => str.split(' ').reverse().join(' ')
//
// console.log(reverseWords('hello world!' ))
//
// function countPositivesSumNegatives(input) {
//   return (input && input.length)
//     ? input.reduce(([pSum, nSum], curr) => [pSum += (curr >= 1 && 1), nSum + Math.min(0, curr)], [0, 0])
//     : [];
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
//
// Add new item (collections are passed by reference)
//
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
//
//
// listOfNumbers массивден ...баардык(spread operator) элеметти алдым жана 8 кошуп койдум
// const addExtra = listOfNumbers => [...listOfNumbers, 8]
//
// console.log(addExtra([1]))
//
// split() строканы массивке айлантат,
// Эгерде split('') ['A', 'z', 'a', 'm', 'a','t', ' ', 'K', 'a', 'n', 'a', 't', 'b', 'e', 'k','o', 'v']
// Эгерде split(' ') [ 'Azamat', 'Kanatbekov' ]
// map() менен перебиратетип арбир элеметтин [0] биринчи индексин албыз
// toUpperCase() менен верхний регистрга келтребиз
// join() массивди кайра строкага айлантат
// const abbrevName = (name) => name.split(' ').map(el => el[0].toUpperCase()).join(".")
//
// console.log(abbrevName('Azamat Kanatbekov'))
//
// A Needle in the Haystack
//
// Can you find the needle in the haystack?
//
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
// "found the needle at position " plus the index it found the needle, so:
//
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")
//
//
// indexOf менен 'needle' табабыз,
// indexOf индексин таап берет
// const findNeedle = haystack => "found the needle at position " + haystack.indexOf('needle')
//
// console.log(findNeedle(['hay', 'junk', 'hay', 'moreJunk', 'needle', 'randomJunk']))
//
// Reversed sequence
//
// Build a function that returns an array of integers from n to 1 where n>0.
//
// Example : n=5 --> [5,4,3,2,1]
//
// Array менен массивке айлантып алабыз
// Метод fill() заполняет все элементы массива от начального до конечного индексов одним значением
// const reverseSeq = n =>  Array(n).fill(0).map((e, i) => n - i )
//
// console.log(reverseSeq(5))
//
// Reversed Strings
//
// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
//
// const solution = (str) => str.split('').reverse().join('')
//
// console.log(solution('world'))
// console.log(solution('world'))
//
// Double Char
//
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
//
// split("") менен массивке айлантып жана тамгаларды болуп алабыз [ 'S', 't', 'r', 'i', 'n', 'g' ]
// map(el => el + el) менен перебирайтетип арбир тамгага + менен кошуп койобуз [ 'SS', 'tt', 'rr', 'ii', 'nn', 'gg' ]
// join('') менен кайра строка кылып койоуз 'SSttrriinngg'
//
// const doubleChar = (str) => str.split('').map(el => el + el).join('')
// console.log(doubleChar('String'))
//
// Returning Strings
//
// Make a function that will return a greeting statement that uses an input;
// your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]
//
// Шаблонный строканы колдондук `${}`
// const greet = name => `Hello, ${name} how are you doing today?`
//
// console.log(greet('Azamat'))
//
// Sentence Smash
//
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
//
// join(' ') менен массивди строкага айлантып койдук
//
// const smash =  words => words.join(' ')
//
// console.log(smash(['hello', 'world', 'this', 'is', 'great']))
//
// Find Maximum and Minimum Values of a List
//
// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language)
// that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
//
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
//
// Math.min(...list) менен эн минималный цифраны алдык,
// ...болсо list"ги баардык значенияларды чогултуп берет
//
// const min = (list) => Math.min(...list)
// const max = (list) => Math.max(...list)
//
// console.log(min([4,6,2,1,9,63,-134,566]))
// console.log(max([4,6,2,1,9,63,-134,566]))
//
// What is between?
//
// Complete the function that takes two integers (a, b, where a < b) and return an array
// of all integers between the input parameters, including them.
//
// For example:
//
// a = 1
// b = 4
// --> [1, 2, 3, 4]
//
// const between = (a, b) => {
//   const arr = [];
//   for (let i = a; i <= b; i++) {
//     if (a < b) {
//       arr.push(i)
//     }
//   }
//   return arr
// }
//
// console.log(between(1,4))
//
// Sum of positive
//
// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.
//
// 1 Вариант
// const positiveSum = arr => arr.reduce((acc, rec) => rec > 0 ? acc + rec : acc, 0);
//
// 2 Вариант
// const positiveSum = (arr) => {
//   return arr.reduce((acc, rec)=>{
//     if(rec > 0){
//      return rec + acc
//     }else {
//       return acc
//     }
//   },0)
// }
// console.log(positiveSum([1,-4,7,12]))
//
// Reverse List Order
//
// In this kata you will create a function that takes in a list and returns a list with the reverse order.
//
// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]
//
// const reverseList = list => list.reverse()
// console.log(reverseList([9, 12, 2, 0, 7]))
//
// Hello, Name or World!
//
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello,
// World! if name is not given (or passed as an empty String).
//
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
//
// Examples:
//
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given
//   or `name` = ""        => return "Hello, World!"
//
// Шаблонный строканы колдондум
// [0] менен биринччи индексти алып toUpperCase() менен заглавный кылып алдым
// substring(1) менен экинчи индекстен баарын алдым toLowerCase() менен нижний регистр кылдым
//
// const hello = (name) => {
//   if (name){
//     return `Hello, ${name[0].toUpperCase()}${name.substring(1).toLowerCase()}!`
//   }else {
//     return 'Hello, World!'
//   }
// }
// console.log(hello('jOhN'))
//
// Convert number to reversed array of digits
//
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of
// this number within an array in reverse order.
//
// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]
//
// toString() менен строкага айлаттым
// split('') менен массив кылдым
// reverse() [ '3', '4', '8', '5', '9', '7' ] -- [ '7', '9', '5', '8', '4', '3' ]
// map(Number) менен кайра число кылдым
// const digitize = n =>  n.toString().split('').reverse().map(Number)
// console.log(digitize(348597))
//
// <<<<<<< HEAD
//
// Sum of Multiples
//
// Your Job
// Find the sum of all multiples of n below m
//
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"
//
// const sumMul = (n,m) =>{
//   if ( n > m) return 'INVALID';
//   if (n + n > m) return n;
//   return n + sumMul(n +n,m)
// }
// console.log(sumMul(2,9))
//
// Exclamation marks series #4: Remove all exclamation marks from
// sentence but ensure a exclamation mark at the end of string
//
// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string.
// For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
//
// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"
//
// 1 Вариант
// const remove = (s) =>{
//   s = s.split('!');
//   return s.concat('!').join('');
// }
// console.log(remove('!Hi!'))
//
// 2 Вариант
// const remove = (s) => s.replace(/!/g, '') + '!';
// =======
// const digitize = n =>  n.toString().split('').reverse().map(Number)
// console.log(digitize(348597))
//
// Exclamation marks series #4: Remove all exclamation marks
// from sentence but ensure a exclamation mark at the end of string
//
// Description:
//   Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string.
//   For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
//
//   Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"
// const remove = (s) => s.replace(/!/g, '') + '!';
//
//
//   Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"
// const remove = (s) => s.replace(/!/g, '') + '!';
//
//
//
// Pillars
//
// There are pillars near the road.
// The distance between the pillars is the same and the width of the pillars is the same.
// Your function accepts three arguments:
//
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters
// (without the width of the first and last pillar).
//
// const pillars = (num_pill, dist, width) => {
//   if(num_pill < 2){
//     return 0;
//   }else {
//     return num_pill * ((dist * 100) + width) - (width * 2) - (dist * 100);
//   }
// }
// console.log(pillars(2, 20, 25))
//
// USD => CNY
//
// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) .
// The input is the amount of USD as an integer, and the output should be a string that states the amount of
// Yuan followed by 'Chinese Yuan'
//
// Examples (Input -> Output)
// * 15  -> '101.25 Chinese Yuan'
// * 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD.
// All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")
//
// const usdcny = (usd) => `${(usd * 6.75).toFixed(2)} Chinese Yuan`
// console.log(usdcny(6876))
//
// Points of Reflection
//
// "Point reflection" or "point symmetry" is a basic concept in geometry where a given point,
// P, at a given position relative to a mid-point, Q has a corresponding point,
// P1, which is the same distance from Q but in the opposite direction.
//
// Task
// Given two points P and Q, output the symmetric point of point P about Q.
// Each argument is a two-element array of integers representing the point's X and Y coordinates.
// Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.
//
// const symmetricPoint = ([a, b], [c, d]) => [c * 2 - a, d * 2 - b]
// console.log(symmetricPoint([2, 6], [-2, -6]))
//
//
// Semi-Optional
//
// We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it
// in a new JavaScript Object or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.
//
// So, for example, if we execute the following code:
//
// wrapper_obj = wrap("my_wrapped_string");
//  # wrapper_obj should be  {"value":"my_wrapped_string"}
// We would then expect the following statement to be true:
//
// wrapper_obj["value"] == "my_wrapped_string"
// Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.
//
// const wrap = (value) => {
//   return {
//     value: value
//   };
// };
// console.log(wrap("my_wrapped_string"))
//
// Count Odd Numbers below n
//
// Given a number n, return the number of positive odd numbers below n, EASY!
//
// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
// Expect large Inputs!
//
// Метод Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого
// const oddCount = n => Math.floor(n / 2)
// console.log(oddCount(7))
//
// Difference of Volumes of Cuboids
//
// In this simple exercise, you will create a program that will take two lists of integers, a and b.
// Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b.
// You must find the difference of the cuboids' volumes regardless of which is bigger.
//
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20.
// Therefore, the function should return 8.
//
// Your function will be tested with pre-made examples as well as random ones.
//
// If you can, try writing it in one line of code.
//
// Math.abs('-1');     // 1
// const findDifference = (a, b) => Math.abs(a[0]*a[1]*a[2] - b[0]*b[1]*b[2]);
// console.log(findDifference([2, 2, 3],[5, 4, 1]))
//
// Is the date today
//
// Write a simple function that takes as a parameter a date object and returns
// a boolean value representing whether the date is today or not.
//
// Make sure that your function does not return a false positive by just checking just the day.
//
// toString(), toDateString(), toTimeString() Возвращают стандартное строчное представление,
// не заданное жёстко в стандарте, а зависящее от браузера. Единственное требование к нему – читаемость человеком.
// Метод toString возвращает дату целиком, toDateString() и toTimeString() – только дату и время соответственно.
//
// const isToday = (date) => new Date().toDateString() === date.toDateString()
// console.log(isToday('15032022'))
//
// Filter out the geese
//
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
//
// The geese are any strings in the following array, which is pre-populated in your solution:
//
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
//
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
//
// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
//
// const gooseFilter = (birds) => {
//   let geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']
//   return birds.filter(el => !geese.includes(el));
// }
// console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher",'Azamat']))
//
// Area of a Square
//
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
//
// const squareArea = A => +((2 * A / 3.14)**2).toFixed(2)
// console.log(squareArea(2))
//
//
//
//
// Powers of 2
//
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
//
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
//
// Массив (Array) в JavaScript является глобальным объектом, который используется для создания массивов; которые представляют собой высокоуровневые спископодобные объекты.
// const powersOfTwo = n => [...Array(n + 1)].map((el, i) => 2 ** i);
// console.log(powersOfTwo(4))
//
//
// Volume of a Cuboid
//
// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.
//
// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     return length * (width * height)
//   }
// }
//
// const getVolumeOfCuboid = (length, width, height) => length * (width * height)
// console.log(getVolumeOfCuboid(1,2,2))
//
// Opposites Attract
//
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
//
// const lovefunc = (flower1, flower2) => {
//   if ((flower1 % 2) === 1 && (flower2 % 2) === 0  || (flower2 % 2) === 1 && (flower1 % 2) === 0){
//     return true
//   } else {
//     return false;
//   };
// }
//
// console.log(lovefunc(897,993))
//
//
//
// Enumerable Magic #25 - Take the First N Elements
//
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
//
// const take = (array, n) => array.slice(0, n)
// console.log(take([0, 1, 2, 3, 5, 8, 13], 5))
//
//
// Hex to Decimal
// Complete the function which converts hex number (given as a string) to a decimal number.
// Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
// const hexToDec = hexString => parseInt(hexString, 16)
// console.log(hexToDec('FF'))
//
//
// Is it even?
// In this Kata we are passing a number (n) into a function.
//
// Your code will determine if the number passed is even (or not).
//
// The function needs to return either a true or false.
//
// Numbers may be positive or negative, integers or floats.
//
// Floats with decimal part non equal to zero are considered UNeven for this kata.
// const testEven = n => n % 2 === 0 ? true : false
// console.log(testEven(1))
//
// Define a card suit
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
//
// Our deck (is preloaded):
//
// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'
//  Метод includes() определяет, содержит ли массив определённый элемент
// const defineSuit = card => {
//   if (card.includes('♣')) return 'clubs'
//   if (card.includes('♦')) return 'diamonds'
//   if (card.includes('♥')) return 'hearts'
//   if (card.includes('♠')) return 'spades'
// }
// console.log(defineSuit('3♣'))
//
// Aspect Ratio Cropping - Part 1
// const aspectRatio = (x,y) => [Math.ceil(y*16/9), y];
// console.log(aspectRatio(640, 480))
//
// Is n divisible by x and y?
// const isDivisible = (n, x, y) => {
//   if(n % x === 0 && n % y === 0){
//     return true
//   }else {
//     return false
//   }
// }
// console.log(isDivisible(12,3,4))
//
// Rock Paper Scissors!
// const rps = (p1, p2) => {
//   if (p1 === p2){
//     return "Draw!"
//   } else if ((p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock") || (p1 === "rock" && p2 === "scissors") ) {
//     return "Player 1 won!"
//   }else {
//     return "Player 2 won!"
//   }
// };
// console.log(rps('scissors','paper'))
//
//
//
// Vowel remover
// const shortcut = string => string.split(/[aeiou]/g).join('')
// console.log(shortcut('hello'))
//
// DNA to RNA Conversion
// const DNAtoRNA = dna => dna.split('T').join('U');
// console.log(DNAtoRNA('GACCGCCGCC'))
//
// get character from ASCII Value
// // Статический метод String.fromCharCode() возвращает строку, созданную из указанной последовательности значений единиц кода UTF-16.
// const getChar = c => String.fromCharCode(c)
// console.log(getChar(65))
//
// Gravity Flip
// const flip = (d, a) => {
//   return  d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)
// }
// console.log(flip([3, 2, 1, 2, 4, 5, 45],[1, 4, 5, 3, 5]))
//
// MakeUpperCase
// const makeUpperCase = str => str.toUpperCase()
// console.log(makeUpperCase('hello'))
//
// Thinkful - Logic Drills: Traffic light
// const updateLight = (current) => {
//   if (current === 'green'){
//     return 'yellow'
//   }else if (current === 'yellow'){
//     return 'red'
//   }else if (current === 'red'){
//     return 'green'
//   }
// }
// console.log(updateLight('green'))
//
// Grasshopper - Check for factor
// const checkForFactor = (base, factor) => {
//   if (base % factor === 0){
//     return true
//   }else {
//     return false
//   }
// }
// console.log(checkForFactor(653,7))
//
// Quarter of the year
// const quarterOf = (month) => {
//   if (month > 0 && month <= 3){
//     return 1
//   }else if (month > 3 && month <= 6 ){
//     return 2
//   }else if (month > 6 && month <= 9 ){
//     return 3
//   }else if (month > 9 && month <= 12 ){
//     return 4
//   }
// }
// const quarterOf = month => Math.ceil(month / 3);
// console.log(quarterOf(7))
//
// Grasshopper - Grade book
// const getGrade = (s1, s2, s3) => {
//   let i = Math.floor((s1 + s2 + s3) / getGrade.length)
//   if( i >= 90 &&  i <= 100) {
//     return 'A'
//   } else if ( i >= 80 && i <= 89){
//     return 'B'
//   }  else if ( i >= 70  && i <= 79) {
//     return 'C'
//   } else if ( i >= 60 && i <= 69) {
//     return 'D'
//   } else  {
//     return 'F'
//   }
// }
// console.log(getGrade(56,65,78))
//
// Parse nice int from char problem
// const getAge = inputString => +inputString[0]
// console.log(getAge('4 years old'))
//
// Beginner - Lost Without a Map
// const maps = x => x.map(el => el * 2)
// console.log(maps([1, 2, 3]))
//
// Will you make it?
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= mpg * fuelLeft ? true : false
// console.log(zeroFuel(50, 25, 2))

// Function 3 - multiplying two numbers
// const multiply = (x,y) => x * y
// console.log(multiply(2,3))

// on+wait > cap
const enough = (cap, on, wait) => {
  if(on+wait > cap){
    return on + wait - cap
  }else{
    return 0
  }
}
console.log(enough(100, 60, 50))

