/* Primitives */
let string = "This is a string primitive";
let number = "1993";
let boolean = false; //Or True
let undefinedVariable = undefined;
let nulo = null;

/* Types of Variables */

const daysOfTheWeek = 7;
var oldVariable = "hola que tal";
let newVariable = "bien";

/* Strings and methods */
let username = "Lucas Lobato"
let password = 'heyholetsgo28'

// The strings have indexes so we can acceed to specific parts.
console.log(username[0]);
console.log(password.length);

// String Methods
let capitalizeThis = "Yharnam";
what = capitalizeThis.toUpperCase();

console.log(what);
console.log(capitalizeThis);

let greeting = "     After all this time";
yikes = greeting.trim();

console.log(yikes);
console.log(greeting);

let message = "        Know thyself       ";
let whisper = message.toLowerCase().trim();

//String Methods with arguments.

/* El método indexOf() retorna el índice de la primera ocurrencia del valor dado en searchValue,
Empezando la búsqueda a partir de fromIndex. 

Syntax: str.indexOf(searchValue,[fromIndex]]);
*/

const paragraph = 'The quick brown fox jumps over the lazy dog. The fox is really fast.';
const searchTerm = "fox";
const indexOfFirst = paragraph.indexOf(searchTerm); // 16

console.log(`The index of the 1st "fox" is ${indexOfFirst}`);
console.log(`The index of the 2nd "fox" is ${paragraph.indexOf("fox", [indexOfFirst + 1])}`);

console.log('hola que tal'.length);
console.log('hola que tal'.indexOf('e', -5/* For negative numbers it starts at 0 */));
console.log('hola que tal'.indexOf("tal", 10));

/* El método slice() extrae un fragmento de un string y lo devuelve como un nuevo string sin modificar el string original. */

const str = 'The quick brown fox jumps over the lazy dog.';
const strLength = str.length;

console.log(strLength);
console.log(str.slice(16));
console.log(str.slice(16, 19));
console.log(str.slice(-18, -14));

const word = "skateboard";
let extraction = word.slice(5, 10);
console.log(extraction);

let replacement = extraction.replace("o", "e")
console.log(replacement);

// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
const roll = `die1: ${die1} \ndie2: ${die2} \nYou rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`
console.log(roll);