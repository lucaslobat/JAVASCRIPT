/* const miFuncion =  async () => {
    throw ("Se ha producido un error");
    return "Esto es una función asíncrona"
}
const miPromesa = miFuncion()
.then ((msg)=> {
    console.log("The promise was resolved |",msg);
})
.then((msg) => {
    console.log("The promise was resolved (2) |",msg)
})
.catch ((err) => {
    console.log("The promise was rejected |",err)
})

console.log(miPromesa);
 */
/* function colorChange(color, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      res()
    }, delay);
  });
}
 */
/* colorChange("#cdb4db", 1000)
.then (() => colorChange("#ffafcc", 1000)) 
.then (() => colorChange("#bde0fe", 1000))
.then (() => colorChange("#a2d2ff", 1000)) */

/* async function cambioColorAsincrono() {
  await colorChange("#cdb4db", 1000);
  await colorChange("#ffafcc", 1000);
  await colorChange("#bde0fe", 1000);
  await colorChange("#a2d2ff", 1000);
}

cambioColorAsincrono(); */




async function requestFunction (url) {
  //La función devuelve una promesa que dispone de una función resolve y reject
  return new Promise ((res,rej) => {
      const delay = Math.floor(Math.random() * 4500) + 250;

      // Pasa una función asíncrona a WebAPI y resuelve o rechaza la petición según el delay
      setTimeout(() => {
          if (delay > 4000){
              rej('La petición ha expirado.');
          } else {
              res(`Datos desde ${url}`)
          }
      },delay)
  })
}

async function getData(){

  try {
    const result = await requestFunction("books.com");
    console.log(result);
  
    const result2 = await requestFunction("books.com/philosophy");
    console.log(result2);
  
    const result3 = await requestFunction("books.com/philosophy/davidhume");
    console.log(result3);
    
  } catch (error) {
    console.log(`Su petición no ha podido completarse ${error}`)
  }

}

getData();