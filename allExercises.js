// Exercise 1: Calculating the Sum of Numbers in an Array
let sum = 0;
const numbers1 = [65, 44, 12, 4];
numbers1.forEach(item => { sum += item; });
console.log("Sum of numbers:", sum);

// Exercise 2: Logging Each Element of an Array
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(fruit => { console.log(fruit); });

// Exercise 3: Logging Each Element of an Array with an Anonymous Function
const array1 = ['a', 'b', 'c'];
array1.forEach(element => { console.log(element); });

// Exercise 4: Adding 10 to Each Element of an Array
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((num, index, arr) => { arr[index] = num + 10; });
console.log(numbers2);

// Exercise 5: Reversing Strings in an Array
const strings = ["program", "world", "javascript"];
strings.forEach((str, index, arr) => { arr[index] = str.split('').reverse().join(''); });
console.log(strings);

// Exercise 6: Filtering Out Odd Numbers from an Array
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];
numbers3.forEach(num => { if (num % 2 === 0) evenNumbers.push(num); });
console.log(evenNumbers);

// Exercise 7: Converting Celsius to Fahrenheit
const celsiusTemperatures = [0, 10, 20, 30, 40];
celsiusTemperatures.forEach((celsius, index, arr) => { arr[index] = (celsius * 9/5) + 32; });
console.log(celsiusTemperatures);

// Exercise 8: Capitalizing Each Element of an Array
const words = ["apple", "banana", "cherry"];
words.forEach((word, index, arr) => { arr[index] = word.charAt(0).toUpperCase() + word.slice(1); });
console.log(words);

// Exercise 9: Finding the Maximum Number in an Array
const numbers4 = [10, 20, 5, 30, 15];
let maxNumber = numbers4[0];
numbers4.forEach(num => { if (num > maxNumber) maxNumber = num; });
console.log("Maximum number:", maxNumber);

// Exercise 10: Creating HTML List Items
const names = ["John", "Jane", "Bob", "Alice"];
const listItems = [];
names.forEach(name => { listItems.push("<li>" + name + "</li>"); });
console.log(listItems.join(""));

// Exercise 11: Counting Occurrences of Each Letter in a String
const sentence = "The quick brown fox jumps over the lazy dog";
const letterCounts = {};
const letters = sentence.split('');
letters.forEach(letter => { 
  if (letter !== ' ') {
    letter = letter.toLowerCase();
    letterCounts[letter] = (letterCounts[letter] || 0) + 1; 
  } 
});
console.log(letterCounts);
