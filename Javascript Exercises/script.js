// **********LOOP EXERCISES  **********
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


