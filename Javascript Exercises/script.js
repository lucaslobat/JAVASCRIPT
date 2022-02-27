// ***********************LOOP EXERCISES  ***********************
console.log("***********************LOOP EXERCISES  ***********************");
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
console.log("10. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle.");

function areaOfCircle (radius){
    return Math.PI * ( radius * radius); 
}

console.log(areaOfCircle(19).toFixed(5));


/* ######## 11. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle. ######## */
console.log("11. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle.");

function circumOfCircle (radius) {
    return 2 * (Math.PI * radius);
}

console.log(circumOfCircle(2).toFixed(5));

/* ######## 12. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle. ######## */
console.log("12. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle.");

function density(mass,volume){
    return mass/volume;
}

console.log(density(19,7).toFixed(5));

/* ######## 13. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed. ######## */
console.log("13. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.");

function speed (distance,time){

    return distance / time;
}

console.log(speed(10,20));

/* ######## 14. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight. ######## */
console.log("14. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.");

function weight(mass,gravity){
    return mass * gravity;
}

console.log(weight(19,299792458));

/* ######## 15. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit. ######## */
console.log("15 . Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.");

function convertCelciustoFahrenheit(oCTemperature){
    let temperatureInFahrenheit;

    return temperatureInFahrenheit = oCTemperature * (9 / 5) + 32;
}

console.log(convertCelciustoFahrenheit(15));

/* ######## 16. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below. ######## */
console.log("16 . Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.");

function bodyMassCalculator(weight,height){
    bodyMass = Math.floor(weight / Math.pow(height,2));

    let message = ""

    if (bodyMass < 18.5){
        message = "You are underweight";
    } else if(bodyMass >= 18.5 && bodyMass <= 24.9){
       message = "You are in a normal weight";
    } else if(bodyMass >= 25 && bodyMass <= 29.9){
        message = "You are overweight";
    } else {
        message = "You are obese.";
    }

    return console.log(`Your BMI is ${bodyMass}. ${message}`);

}

bodyMassCalculator(76,1.74);

/* ######## 17. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer. ######## */
console.log("17. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.");

function checkSeason(month){7
    let seasonVariable = "";
    if(month === "December" || month === "January" || month === "February"){
        seasonVariable = "It is Winter";
    } else if(month === "March" || month === "April" || month === "May"){
        seasonVariable ="It is Spring";
    } else if(month === "June" || month === "July" || month === "August"){
        seasonVariable = "It is Summer";
    } else if(month === "September" || month === "October" || month === "November"){
        seasonVariable = "It is Autumn";
    } else {
        console.log("Please enter a valid month.");
    }

    return seasonVariable;
}

console.log(checkSeason("June"));

/* ######## 18. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method. ######## */
console.log("18. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.");

function largestNumber(x,y,z){
    let largestNumberMatrix = [x,y,z];
    let maxNum = 0;

    for(let i = 0; i < largestNumberMatrix.length; i++){
        if(largestNumberMatrix[i] > maxNum){
            maxNum = largestNumberMatrix[i];
        }
    }
    return maxNum;
}

console.log(largestNumber(1,10,2));

/* ######## 19. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array. ######## */
console.log("19. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.");

function printArray (arrayInput){
    for(let i = 0; i < arrayInput.length; i++){
        console.log(arrayInput[i]);
    }
}

printArray([2,10,19,22]);


/* ######## 20. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object. ######## */
console.log("20. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.");

function showDateTime(){
    let date = new Date();
    return console.log(date.toLocaleDateString('es-ES') + " " + date.toLocaleTimeString('es-ES'));
}

showDateTime();

/* HIGHER ORDER FUNCTIONS */

/* ######## 21. Declare an object that stores a method, the method should use any of the object's
properties using the keyword 'this. ######## */

console.log('21. Declare an object that stores a method, the method should use any of the object\'s properties using the keyword \'this.')

const instructor = {
    firstName:'Tim',
    info: {
        catOwner:true,
        boatOwner:true
    },
    displayInfo: function(){
        console.log(`First name: ${this.firstName}.`);
    }
}

instructor.displayInfo();


console.log("*********************** HIGH ORDER FUNCTIONS ***********************");
/*  They are functions that take another function as parameter or return a function.
    A function that is passed as argument is a Callback */

const countriesArray = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


/* ######## 1.Explain the difference between forEach, map, filter, and reduce. ######## */
console.log("1.Explain the difference between forEach, map, filter, and reduce. ");

console.log(`forEach(): Ejecuta la función indicada una vez por cada elemento del array.
Se puede acceder tanto al elemento en si como su index. ej: forEach((elemento,index) => {})

map(): Crea un nuevo array con los resultados del callback a cada uno de sus elementos. Se puede
acceder tanto al elemento en si como su index. ej array.map((elemento,index) => {}));


`);


/* ######## 2.Use forEach to console.log each country in the countries array. ######## */
console.log("2.Use forEach to console.log each country in the countries array.");

countriesArray.forEach((element,i) => {
    console.log(`${i} : ${element}`);
})

/* ######## 3.Use forEach to console.log each name in the names array. ######## */
    console.log("3.Use forEach to console.log each country in the countries array.");

    names.forEach((nameElement) =>{
        console.log(nameElement);
    })

/* ######## 4.Use forEach to console.log each number in the numbers array. ######## */
    console.log("4.Use forEach to console.log each number in the numbers array.");

    numbersArray.forEach((numberElement) => {
        console.log(numberElement);
    })

/* ######## 5.Use map to create a new array by changing each country to uppercase in the countries array. ######## */
    console.log("5.Use map to create a new array by changing each country to uppercase in the countries array.");

    let countriesUpperCased = countriesArray.map((element)=>{
        return element.toUpperCase();
    })

    console.log(countriesUpperCased);

/* ######## 6.Use map to create an array of countries length from countries array. ######## */
    console.log("6.Use map to create an array of countries length from countries array.");

    let countriesLength = countriesArray.map((country) => {
        return country.length;
    })

console.log(countriesLength);

/* ######## 7.Use map to create a new array by changing each number to square in the numbers array. ######## */
console.log("7.Use map to create a new array by changing each number to square in the numbers array.");

    let numbersSquare = numbersArray.map((number) => {
        return number * number;
    })

    console.log(numbersSquare);
/* ######## 8.Use map to change to each name to uppercase in the names array. ######## */
console.log("8.Use map to change to each name to uppercase in the names array.");
    let namesUpperCased = names.map((name) => {
        return name.toUpperCase();
    })

    console.log(namesUpperCased);

/* ######## 9.Use map to map the products array to its corresponding prices.. ######## */
console.log("9.Use map to map the products array to its corresponding prices.");
    let productPrices = products.map((product) => {
        return product.price;
    })

    console.log(productPrices);

/* ######## 10.Write a function called validUserNames that accepts 
an array of usernames. It should return a new array containing 
only the usernames that are less than 10 characters ######## */
console.log("10.Write a function called validUserNames that accepts an array of usernames. It should return a new array containing only the usernames that are less than 10 characters.");

function validUserNames (usersArray){
    
    let filteredArray = usersArray.filter(user => (user.length < 10));
    return filteredArray;
}

let usernamesArray = ['mark','staceysmom1978','q122873872382','carrie98','MoanaFan'];

console.log(validUserNames(usernamesArray));

/* ######## 11.Use filter to filter out countries containing land. ######## */
console.log("11.Use filter to filter out countries containing land.");

console.log(countriesArray.filter(country => country.match(/land/gi)));

/* ######## 12.Use filter to filter out countries having six character. ######## */
console.log("12.Use filter to filter out countries having six character.");

console.log(countriesArray.filter((country) => {
    return country.length === 6;
}))