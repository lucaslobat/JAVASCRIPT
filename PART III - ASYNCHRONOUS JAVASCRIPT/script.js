/* ##### THE CALL STACK ##### */


function multiply(x,y) {
    return x * y;
}

function square(x) {
    return multiply(x,x);
}

function isRightTriangle(a,b,c){
    return square(a) + square(b) === square(c);
}

isRightTriangle(3,4,5)


/* ##### FAKE REQUEST USING CALLBACKS ##### */

let backend = {
    frutas  : ["Strawberry","Blueberry","Banana","Apple"],
    liquido : ["Water","Ice"],
    recipiente  : ["cono","tarrina","palo"],
    toppings : ["chocolate","cacahuete"]
}

function order(fruta_numero, callback) {
 

    setTimeout(() => {
        console.log(`Pedido recibido. 
        Has seleccionado ${backend.frutas[fruta_numero]} y se empezará a preparar en seguida!`)
        
        callback();
    },3000);

}

function production(recipiente,topping){
    console.log("Su pedido ha empezado a prepararse...")
    setTimeout(() => {
        console.log("La fruta se está cortando :)");
        setTimeout(() => {
            console.log("Se esta añadiendo el agua y el hielo.");
            setTimeout(() => {
                console.log("Encendiendo la máquina...");
                setTimeout(() => {
                    console.log(`El helado se servirá en ${recipiente}...`)

                    setTimeout(() => {
                        console.log(`... con ${topping} de topping.`)

                        setTimeout(() => {
                            console.log("El helado se ha servido.");
                        },2000)
                    }, 3000)

                },2000)
            },1000)
        },1000)
    
    },2000)


}

/* order(0,() => {
    production(backend.recipiente[1],backend.toppings[1])
}); */

/* ##### USING PROMISES AND ASYNC/AWAIT ##### */


/* ##### REQUESTS ##### */
let apiURL = "https://restcountries.com/v2/name/";

fetch(`${apiURL}spain`).then(res => {
    return res.json();
})
.then(res => {
    console.log(res);
    return fetch(`${apiURL}brazil`)
})
.then(res => {
    return res.json();
})
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
});

/* ##### REQUESTS USING ASYNC AWAIT##### */

const loadCountries = async () => {
    try {
    const res = await fetch(`${apiURL}italy`);

    const country = await res.json()

    console.log(country);
} catch (e) {
    console.log(e);
}
}

loadCountries();

