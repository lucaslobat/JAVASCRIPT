// **********LOOP EXERCISES  **********
//---EXERCISES LEVEL 1---

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


/* 1. Given the arrays,iterate 0 to 10 using for loop, do the same using while and do while loop */

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

/* 2. Iterate 10 to 0 using for loop, do the same using while and do while loop */

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

/* 3. Iterate 0 to n using for loop */
console.log(`3. Iterate 0 to n using for loop`)

for (let i = 0; i < webTechs.length; i++){
    console.log(webTechs[i]);
}

/* 4. Write a loop that makes the following pattern using console.log() */
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

/* 5.Use loop to print the following pattern: */
console.log("5.Use loop to print the following pattern: 0x0 = 0, 1x1 = 1, 2x2 = 4, etc...")

for (let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}

/* 6. Using loop print the following pattern */
console.log("5.Use loop to print the following pattern:");

console.log(`i   i^2   i^3`);
for(let i = 0; i <= 10; i++){
    console.log(`${i}   ${i**2}   ${i**3}`)
}

/* 7. Use for loop to iterate from 0 to 100 and print only even numbers */
console.log("7. Use for loop to iterate from 0 to 100 and print only even numbers")

for (let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

/* 8. Use for loop to iterate from 0 to 100 and print only odd numbers */

console.log("8. Use for loop to iterate from 0 to 100 and print only odd numbers");

for (let i = 0; i <= 100; i++){
    if (i % 2 !== 0 || i == 0){
        console.log(i);
    }
}

/* 9. Use for loop to iterate from 0 to 100 and print only prime numbers */
console.log("9. Use for loop to iterate from 0 to 100 and print only prime numbers");



let divisor;
/* Empezamos iterando en un bucle para verificar si un numero es primo.
Al iniciar el bucle inicializamos la variable iteracion a 2 (excluyendo el 1 porque es obvio que un numero es 
divisible entre 1) */
for (let numero = 0; numero <=100; numero++ ){
    
    divisor = 2;
    /* Mientras el divisor sea menor que el numero, verificaremos si el numero es divisible entre el
    divisor, en caso de que lo sea acabaremos el bucle */
    for(;divisor < numero;divisor++){
        if(numero % divisor == 0){
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