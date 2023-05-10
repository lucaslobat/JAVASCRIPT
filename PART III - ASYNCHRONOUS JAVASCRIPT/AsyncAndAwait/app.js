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
function colorChange(color, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      res()
    }, delay);
  });
}

async function cambioColorAsincrono() {
  await colorChange("#cdb4db", 2000);
  await colorChange("#ffafcc", 2000);
  await colorChange("#bde0fe", 2000);
  await colorChange("#a2d2ff", 2000);
}

cambioColorAsincrono();
