/* ##### THE CALL STACK ##### */


/* function multiply(x,y) {
    return x * y;
}

function square(x) {
    return multiply(x,x);
}

function isRightTriangle(a,b,c){
    return square(a) + square(b) === square(c);
}

isRightTriangle(3,4,5)
 */

/* ##### FAKE REQUEST USING CALLBACKS ##### */

/* let backend = {
    frutas  : ["Strawberry","Blueberry","Banana","Apple"],
    liquido : ["Water","Ice"],
    recipiente  : ["cono","tarrina","palo"],
    toppings : ["chocolate","cacahuete"]
} */

/* function order(fruta_numero, callback) {
 

    setTimeout(() => {
        console.log(`Pedido recibido. 
        Has seleccionado ${backend.frutas[fruta_numero]} y se empezará a preparar en seguida!`)
        
        callback();
    },3000);

} */

/* function production(recipiente,topping){
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


} */

/* order(0,() => {
    production(backend.recipiente[1],backend.toppings[1])
}); */

/* const is_shop_open = true;

function order(time,work,container,topping){
    return new Promise ((resolve,reject) => {
        if(is_shop_open){

            setTimeout(() => {

                if (container && topping){
                    resolve(console.log(`Has seleccionado: ${container} y ${topping}`));
                } else {
                    resolve(work());
                }

            },time)

        } else {

            reject("Error!");

        }
    })
}

order(2000,()=> {

    console.log('Pedido recibido...');

})
.then(() => {
    return order(2000,()=> {
        console.log("Cortando la fruta...")
    })
})
.then(() => {
    return order(1000,()=> {
        console.log("Añadiendo agua e hielo...");
    })
})
.then(() => {
    return order(2000,()=> {
        console.log("Iniciando la máquina de helados...");
    })
})
.then(() => {
    return order(2000,()=> {
    },backend.recipiente[1],backend.toppings[1])
})
.then(() => {
    return order(2000,()=> {
        console.log("Su helado está servido! Que aproveche ;)")
    })
})
.catch(() => {
    console.log("La tienda está cerrada en estos momentos.")
})
 */

/* ##### USING PROMISES AND ASYNC/AWAIT ##### */


/* ##### REQUESTS ##### */
/* let apiURL = "https://restcountries.com/v2/name/";

fetch(`${apiURL}spain`).then(res => {
    return res.json();
})
.then(res => {
    console.log("Resultado fetch:",res);
    return fetch(`${apiURL}brazil`)
})
.then(res => {
    return res.json();
})
.then(res => {
    console.log("Segundo resultado fetch:",res);
})
.catch(err => {
    console.log(err);
});
 */
/* ##### REQUESTS USING ASYNC AWAIT##### */

/* const loadCountries = async () => {
    try {
    const res = await fetch(`${apiURL}italy`);

    const country = await res.json()

    console.log("Resultado async/await:",country);
} catch (e) {
    console.log(e);
}
}

loadCountries(); */

/* ##### REQUESTS USING AXIOS */

/* axios.get("https://restcountries.com/v2/all").then((res) => {
    console.log("Resultado Axios:",res.data)
}).catch(err => {
    console.log(err);
}) */

const person2 = {
    name: "Bruno",
    age: "20",
    birthDate: "19/07/1999",
    isAlive: true,
    speaksLanguage () {
        console.log("Itadakimasu!");
    }
}

// Factory Function
function crearPersona (name,age,birthDate,isAlive,language){
    return {
        name,
        age,
        birthDate,
        isAlive,
        speaksLanguage (){
            console.log(`I speak ${language}`);
        }
    }
}

const persona1 = crearPersona('Lucas','29','12/02/1993',true,'Spanish');

console.log(persona1);
persona1.speaksLanguage();

// Constructor Functions

function Person(name,age,birthDate,isAlive,language){

    this.name = name;
    this.age = age;
    this.birthDate = birthDate;
    this.isAlive = isAlive;
    this.speaksLanguage = function(){
        console.log(`I speak ${language}`);
    }

}

const persona = new Person('Firmino','20','12/01/1998',false,'English');
console.log(persona);
persona.speaksLanguage();


errthanAllright = true;

const objetoPromesa = new Promise ((resolve,reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
        if(errthanAllright){
            resolve('La promesa ha tenido éxito')
        }
        reject('La promesa ha fracasado');   
});
console.log(objetoPromesa);

// Then solo se ejecutará si resolve es llamado.
objetoPromesa
.then(function callback(data){
    // data es lo que sea que pasamos en la función resolve(...) de arriba.
    console.log(`Primer then : ${data}`);
    return data
}
)
.then((data2)=> {
    console.log(`Segundo then : ${data2}`);
})
.catch(function callback(error){
    console.log(error);
});