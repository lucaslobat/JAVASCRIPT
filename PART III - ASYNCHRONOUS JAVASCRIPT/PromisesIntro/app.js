

const requestTwo = (url) => {
    //La función devuelve una promesa que dispone de una función resolve y reject
    return new Promise ((res,rej) => {
        const delay = Math.floor(Math.random() * 2500) + 250;

        // Pasa una función asíncrona a WebAPI y ejecuta una función u otra de la promesa según el delay
        setTimeout(() => {
            if (delay > 2000){
                rej('La petición ha expirado.');
            } else {
                res(`Datos desde ${url}`)
            }
        },delay)
    })
}

/* requestOne('books.com',(datos) => {
    console.log("Ok",datos)
    requestOne('books.com/page1', (datos) => {
        console.log("Ok (2nd)",datos);
        requestOne('books.com/page2',(datos) => {
            console.log("Ok (3rd)",datos);
        }, (error) => {
            console.log("Error",error)
        })
    }, (error) => {
        console.log("Error",error);
    })
}, (error)=> {
    console.log("Error",error);
}) */

const request = requestTwo('books.com')
.then ((msg) => {
    console.log('The promise was resolved |',msg)
   return requestTwo('books.com/philosophy')
})
.then((msg)=> {
    console.log('The promise was resolved (2) |',msg)
    return requestTwo('books.com/philosophy/davidhume')
})
.then ((msg) => {
    console.log('The promise was resolved (3) |',msg)
})
.catch ((error) => {
    console.log('The promise was rejected |',error)
})

