// ***********************LOOP EXERCISES  ***********************
console.log("***********************LOOP EXERCISES  ***********************");
//---EXERCISES LEVEL 1---
/*######## -4. Iterate over an object using the for in loop ########*/

console.log("-4. Iterate over an object using the for in loop");

let myObject = {
    a: 1,
    b: 2,
    c: 3
}

for (property in myObject){
    console.log(`Key: ${property} Value:${myObject[property]}`);
}


/*######## -3. Iterate over an object,sum all its values and then do the average. ########*/
console.log("-3.A) Iterate over an object sum all its values and then do the average.");
const testScores = {
    Kennen: 80,
    Ahri: 50,
    Pantheon: 99,
    Taric: 100,
    Gangplank: 80, 
}

let champions = Object.keys(testScores);
let championScores = Object.values(testScores);

for (let champion of champions){
    console.log(champion);
}

let championScoresSum = 0;
for( let championScore of championScores){
    championScoresSum += championScore;
}

console.log(championScoresSum / champions.length);

/*######## -2. Iterate over an array using for...of loop ########*/

console.log("15.A) Iterate over an array using for...of loop");

const studentNames = ["Mario","Pedro","Amanda","Julio"];

for (let studentName of studentNames){
    console.log(studentName);
}

/*######## -1. Iterate over an multidimensional array using for...of loops ########*/

console.log("15.B) Iterate over an multidimensional array using for...of loops");

const rowsAndColumns = [
    ["Creed","Sayuri","Toguro"],
    ["Pablo","Samara","Maira"],
    ["Vivianne","Maria","Pilar"]
]

for (let row of rowsAndColumns){
    for( let name of row){
        console.log(name);
    }
}



/*######## 0.C) Iterate over an array of numbers and do the 
square of each number in the array using a for...of loop ########*/
console.log("15.C) Iterate over an array of numbers and do the square of each number in the array using a for...of loop");
const numbers = [1,2,3,4,5,6,7,8,9]; 

let square = 0;
for (number of numbers){
    console.log(Math.pow(number,2));
}



const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


/* ######## 1. Given the arrays,iterate 0 to 10 using for loop,
do the same using while and do while loop ########*/

console.log(`1. Given the arrays,iterate 0 to 10 using for loop, do the same using while and do while loop. \n-----------------Using for loop----------------`);

for (let i = 0; i <= 10; i++){
    console.log(countries[i]);
}

console.log("-----------------Using while loop-----------------");

let iteration = 0;
while (iteration <= 10){
    console.log(countries[iteration]);
    iteration++;
}

/* ######## 2. Iterate 10 to 0 using for loop, 
do the same using while and do while loop ########*/

console.log(`2. Given the arrays,iterate 10 to 0 using for loop, do the same using while and do while loop. \n-----------------Using for loop----------------`);

for (let i = 10; i >= 0; i--){
    console.log(countries[i]);
}

console.log("-----------------Using while loop-----------------");

let iterationTwo = 10;
while (iterationTwo >= 0){
    console.log(countries[iterationTwo]);
    iterationTwo--;
}

/* 3. ######## Iterate 0 to n using for loop ######## */
console.log(`3. Iterate 0 to n using for loop`)

for (let i = 0; i < webTechs.length; i++){
    console.log(webTechs[i]);
}

/* 4. ######## Write a loop that makes the following pattern using console.log() ######## */
console.log(`4. Write a loop that makes the following pattern using console.log():
#
##
###
####
#####
######
#######`);

let character = "#";
for (let i = 1; i <= 7; i++){
    console.log(character);
    character += "#";
}

/* ######## 5. Use loop to print the following pattern: ########*/
console.log("5.Use loop to print the following pattern: 0x0 = 0, 1x1 = 1, 2x2 = 4, etc...")

for (let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}

/* ######## 6. Using loop print the following pattern ########*/
console.log("5.Use loop to print the following pattern:");

console.log(`i   i^2   i^3`);
for(let i = 0; i <= 10; i++){
    console.log(`${i}   ${i**2}   ${i**3}`)
}

/* ######## 7. Use for loop to iterate from 0 to 100 and print only even numbers ######## */
console.log("7. Use for loop to iterate from 0 to 100 and print only even numbers")

for (let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

/* ######## 8. Use for loop to iterate from 0 to 100 and print only odd numbers ########*/

console.log("8. Use for loop to iterate from 0 to 100 and print only odd numbers");

for (let i = 0; i <= 100; i++){
    if (i % 2 !== 0 ){
        console.log(i);
    }
}

/* ######## 9. Use for loop to iterate from 0 to 100 and print only prime numbers ########*/
console.log("9. Use for loop to iterate from 0 to 100 and print only prime numbers");



let divisor;

/* Empezamos iterando en un bucle para verificar si un numero es primo.
Al iniciar el bucle inicializamos la variable divisor a 2 
(excluyendo el 1 porque es obvio que un numero es divisible entre 1) */
for (let numero = 0; numero <= 100; numero++ ){
    // Al inicio del bucle se resetea el divisor a 2, que es el punto de partida de la iteraciçon.
    divisor = 2;

    /* Mientras el divisor sea menor que el numero, verificaremos si el numero es divisible entre el
    divisor, en caso de que lo sea acabaremos el bucle (el numero no es primo) 
    Se incrementa el divisor en cada iteración del bucle, al final de la ultima iteración, se le sigue sumando 1 al divisor*/
    for(;divisor < numero; divisor++){
        if(numero % divisor === 0){
            break;
        }
    }

    /* Si el programa ha llegado hasta este punto es porque la variable divisor se ha incrementado
    hasta que sea igual que el numero, 
    por lo tanto el numero es primo al no encontrar un divisor que como resultado del modulo dé 0 */
    if(divisor == numero){
        console.log(numero);
    }

}

/*######## 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers. ########*/


console.log("10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.");
let sum = 0;

for (let i = 0; i <= 100; i++){
    sum += i;
}

console.log(sum);

/* ########  11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. ########  */

console.log("11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.");
let evenNumbers = 0;
let oddNumbers = 0;
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        evenNumbers += i;
    } else {
        oddNumbers += i;
    }
}

console.log(`Even numbers sum : ${evenNumbers}`);
console.log(`Odd numbers sum :  ${oddNumbers}`);


/* ######## 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array ######## */

console.log("12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array")
const oddAndEvenNumbers = [0,0];

for (let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        oddAndEvenNumbers[0] += i;
    } else {
        oddAndEvenNumbers[1] += i;
    }
}

console.log(oddAndEvenNumbers);

/* ######## 13.Develop a small script which generate array of 5 random numbers ######## */

console.log("13.Develop a small script which generate array of 5 random numbers")
let randomNumbers = [];

for (let i = 0; i < 5 ; i++){
    randomNumbers += Math.floor(Math.random() * 10 );
}
console.log(randomNumbers);

 /*######## 14. Develop a small script which generate array of 5 random numbers
  and the numbers must be unique ########*/

  console.log("14. Develop a small script which generate array of 5 random numbers and the numbers must be unique");

  let randomUniqueNumbers = [];
  let randNum = 0;

  for(let i = 0; randomUniqueNumbers.length < 5 ; i++){
      randNum = Math.floor(Math.random() * 10);

      if(randomUniqueNumbers.indexOf(randNum) == -1){

        randomUniqueNumbers.push(randNum);

      }
  }

/*   while(randomUniqueNumbers.length <= 4){
      randNum = Math.floor(Math.random() *10);

      if(randomUniqueNumbers.indexOf(randNum) == -1){
          randomUniqueNumbers.push(randNum);
      }
 */

  console.log(randomUniqueNumbers);

  /*######## 15. Develop a small script which generate a six characters random id: ########*/

  console.log("15. Develop a small script which generate a six characters random id:");

  let randChar;
  let randString = "";
  for (let i = 0; i < 6; i++){

    randChar = (Math.trunc(Math.random() * 26)) + 97
    randString += String.fromCharCode(randChar);

  }
  console.log(randString);

/*######## Formula de Harris Bennedict ########*/

/* let peso = 76;
let altura = 1.74;
let edad = 29;

let tasaMetabolismoBasal = (10 * peso) + (6.25 * altura) - (5 * edad) + 5;
let tasaMetabolismoBasalEjercicio = tasaMetabolismoBasal * 1.55;

console.log(`Tasa de metabilismo basal: ${tasaMetabolismoBasal}. Con ejercicio moderado (3-5 días a la semana) : ${tasaMetabolismoBasalEjercicio}`);
console.log(`20% de ${tasaMetabolismoBasalEjercicio} = ${(10 * tasaMetabolismoBasalEjercicio) / 100}`) */


// ***********************FUNCTION EXERCISES  ***********************
console.log("***********************FUNCTION EXERCISES  ***********************");


/*######## -2. Develop a small function which can accept any number of arguments using an arrow function: ########*/
console.log("-2. Develop a small script which can accept any number of arguments using an arrow function::");

const arrowFunk = (...args) => {
    console.log(args);

}
arrowFunk("hola","que","tal");




/*######## -1. Develop a small function which can accept any number of arguments: ########*/
console.log("-1. Develop a small script which can accept any number of arguments:");

/* Una declaración de función provee un objeto de tipo array dentro del escopo
de dicha función. Todo lo que pasemos como argumento puede accederse atraves del objeto "arguments"
dentro de la función. */
function argumentsObject(){
    for (let i = 0; i <arguments.length;i++){
        console.log(arguments[i]);
    }
}

argumentsObject(1,2,"hola");


/*######## 0. Write a function wich accepts a single array argument. The function
should return the last element of the array. If the array is empty the function should return null. ########*/

console.log("0. Write a function wich accepts a single array argument. The function should return the last element of the array. If the array is empty the function should return null.");
function lastElement(arrayFunction){
    if(arrayFunction.length == 0){
        return null
    } else {
        let arrayLength = arrayFunction.length - 1;
        return arrayFunction[arrayLength];
    }

}
let result = lastElement([1,2,3,4,5]);
console.log(result);

/*######## 1. Define a function that accepts a string argument and returns
a new string with only the first letter capitalized. ########*/
console.log("1. Define a function that accepts a string argument and returns a new string with only the first letter capitalized.");
function capitalize(str){
    let capStr = str[0].toUpperCase();
    let remainders = str.slice(1);

    return capStr + remainders;
}

console.log(capitalize("lucas"));


/*######## 2. Define a function wich accepts a single argument array of numbers.
It should return the sum of all the numbers in the array ########*/
console.log("2. Define a function wich accepts a single argument array of numbers. It should return the sum of all the numbers in the array");

function sumArray(array){
    let total = 0;
    for (number of array){
        total += number;
    }
    return total;
}

console.log(sumArray([1,2,2]));


/*######## 3. Define a function wich takes one parameter (number from 1-7) amd returns
the day of the week if the number is less than 1 or greater than 7, otherwise return null. ########*/
console.log("2. Define a function wich accepts a single argument array of numbers. It should return the sum of all the numbers in the array");
const weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

function returnDay (dayNumber){
    if(dayNumber < 1 || dayNumber > 7){
        return null
    } else {
        return weekDays[dayNumber - 1];
    }
}

console.log(returnDay(7));

/*######## 4. Declare a function fullName and it pront out your full name. ########*/
console.log("4. Declare a function fullName and it pront out your full name.");
function fullNameFunc(str){
    console.log(str);
}

fullNameFunc("Lucas Lobato");

/*######## 5. Declare a function fullName and now it takes firstName and lastName
as a parameter and it return your full name. ########*/

console.log("5. Declare a function fullName and now it takes firstName and lastName as a parameter and it return your full name.")

function fullName(firstName,lastName){
    return (`${firstName} ${lastName}`);
}

console.log(fullName("Lucas","Lobato"));

/*######## 6. Declare a function addNumbers and it takes two two parameters and it returns sum. ########*/

console.log("6. Declare a function addNumbers and it takes two two parameters and it returns sum.");

function addNumbers(x,y){
    return x + y;
}

console.log(addNumbers(5,5));

/*######## 7. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle. ########*/
console.log("7. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.");

function areaOfRectangle (length,width){
    let area = length * width;
    return area;
}

console.log(areaOfRectangle(10,5));

/*######## 8. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle. ########*/
console.log("8. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.");

function perimeterOfRectangle(length,width){
    let perimeter = (length + width) * 2;
    return perimeter;
}
console.log(perimeterOfRectangle(10,20));

/*######## 9. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism. ########*/
console.log("9. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.");

function volumeOfRectPrism(length,width,height){
        let volume = length * width * height;
        return volume;
}

console.log(volumeOfRectPrism(10,100,5));

/*######## 10. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle. ########*/


