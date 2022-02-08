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