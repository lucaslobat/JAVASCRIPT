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

const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

const roll = `die1: ${die1} \ndie2: ${die2} \nYou rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`
console.log(roll);

// Comparison Operators

/* Greater Than  */
console.log(`5 > 5: ${5 > 5}`);
console.log(`5 > 3: ${5 > 3}`);
console.log(`'aa' > 'ab': ${'aa' > 'ab'}`);

/* Less Than */
console.log(`5 < 3: ${5 < 3}`);
console.log(`5 < 10: ${5 < 10}`);
console.log(`'aa' < 'ac': ${'aa' < 'ac'}`);

/* Greater than/Less than or equal to  */
console.log(`5 >= 5: ${5 >= 5}`);
console.log(`4 <= 4: ${5 <= 5}`);
console.log(`1 >= 5: ${1 >= 5}`);
console.log(`5 <= 10: ${5 <= 10}`);


/* EQUALITI OPERATORS */

/* Equality operators */
console.log(`1 == 1: ${1 == 1}`);
console.log(`'1' == 1: ${'1' == 1}`);
console.log(`0 == false: ${0 == false}`);
console.log(`'hello' == 'hello': ${'hello' == 'hello'}`);

/* Strict equality */
console.log(`1===1: ${1 === 1}`);
console.log(`'10' === 10 ${'10' === 10}`);
console.log(`0 === false: ${0 === false}`);

/* Inequality */
console.log(`1 != 1: ${1 != 1}`);
console.log(`1 != '1: ${1 != `1`}`);
console.log(`0 != false: ${0 != false}`);

/* Strict inequality */
console.log(`1 !== '1' ${1 !== '1'}`);
console.log(`1 !== 1: ${1 !== 1}`);
console.log(`0 != false: ${0 !== false}`);


/* CONDITIONALS */
let num = Math.floor(Math.random() * 10 ) + 1;

if (num % 2 === 0){
    console.log(`The number generated is ${num} and it is even.`)
} else {
    console.log(`The number generated is ${num} and it is odd.`)
}

/* No confundir los valores primitives true y false con los
valores true y false de la propiedad del objeto Boolean */

let primitiveValue = true;
let booleanObject = new Boolean(true);

if (booleanObject){
    console.log(`Having the object adds a level of indirection. Value of the object: ${booleanObject}`);
}

let weekendDay = "Saturday";

if ( weekendDay === "Friday"){
    console.log(`The weekend is just begging. Have fun and disconnect!`);
} else if (weekendDay === "Saturday"){
    console.log(`Have fun, but with moderation and responsability`);
} else if (weekendDay === "Sunday"){
    console.log(`Its time to rest,recharge energies and prepare to a new week.`);
} else {
    console.log(`Keep grinding, dont even think about the weekend.`)
}

/* LOGICAL OPERATORS */

/* Logical AND (&&) */
let a = 10;
let b = 5;

console.log(a >= 10 && b < 5);


/* Logical OR (||) */
let aa = 3;
let bb = -2;

console.log(a > 0 || b >0);

/* Logical NOT(!) */
let expr1 = 200;
let expr2 = -100;

console.log( !(a > 0 || b > 0));

/* Switch */

let switchExpr = 'Apple';

switch (switchExpr){
    case 'Mango':
        console.log('Mangos cost 1€/KG.');
        break;
    case 'Papaya':
    case 'Pineapple':
            console.log('Papayas and Pineaple costs 2€/KG')
            break;
    default:
        console.log("This fruit is not available;");
}

/* ARRAYS */

let disciplines = ['Mathematics','Drawing','Music'];

console.log(disciplines.length, disciplines[1][0]);


/* Array Methods */

/* push() */

const food = ["Spaguetti", "Salad", "Icecream","Sausage"];

const count = food.push("Rice");
console.log(count);
console.log(food);
food.push("Hamburguer","Pizza","Kebab");
console.log(food);

/* pop() */
const plants = ["brocolli", "cauliflower","cabbage","kale","tomato"];

console.log(plants.pop());
console.log(plants);

/* shift */

const arr = [1,2,3];
console.log(arr);
const shiftedElement = arr.shift();
console.log(`Shifted element: ${shiftedElement} Array: `,arr);

/* unshift */
const philosophers = ["Kant","Nietzsche","Foucault"];
console.log(philosophers);
const unshiftElement = philosophers.unshift("Aristóteles");
console.log(`Array length: ${unshiftElement} Array:`, philosophers)
