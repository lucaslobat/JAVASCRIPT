const buttonV2 = document.querySelector('#v2');

buttonV2.onclick = () => {
    console.log('onclick works!');
}

buttonV2.addEventListener('click',()=>{
    console.log('addEventListener works!');
})

/* Al hacer un click en un botón, cambiar el color
de su elemento padre y mostrar el codigo rgb del color en un h1 */;

// Selecciona el botón con el id v3
const buttonV3 = document.querySelector('#v3');

// Selecciona el elemento padre del botón
const buttonParent = buttonV3.parentElement;

// Array con códigos hexadecimal de colores
const colors = ['#bde0fe','#ffc8dd','#e5e5e5'];

// Creación de un nuevo elemento h2
const newh2 = document.createElement('h2');


const firstH1 = document.querySelector('h1');


// Cambia el color del padre del botón cuando haga clic
function rndmRGBNum(){
    return Math.floor(Math.random() * (255 + 1));
}

buttonV3.addEventListener('click', () => {
    buttonParent.style.backgroundColor = `rgb(${rndmRGBNum()},${rndmRGBNum()},${rndmRGBNum()})`;
});









//### MANAGE THE INPUT VALUE AND SHOW IN ON AN UL

// Captura el formulario para despues escuchar un evento.
const form = document.querySelector('form');

// Captura la lista ul en la cual se van a añadir elementos.
const tweetsList = document.querySelector('#tweetsList');

//Este evento se ejecuta cuando se submete el formulario.
form.addEventListener('submit',(e) => {
    /* Usamos el método preventDefault() del objeto de evento
    Para evitar la acción por defecto del navegador de redireccionar
    el formulario a otra página/misma página. */


    e.preventDefault();
    console.log(e);


    //Captura en variables los elementos dentro del formulario
    const formInputName = form.elements.name;
    const formInputTweet = form.elements.tweet;

    ADD_TWEET(formInputName.value,formInputTweet.value);
    formInputName.value = "";
    formInputTweet.value ="";

});

// Esta función recibe un usuario y un tweet que son los elemento del formulario.
const ADD_TWEET = (username,tweet) => {

    const newTweetLI = document.createElement('li');

    newTweetLI.append(`${username} — ${tweet}`);

    tweetsList.append(newTweetLI);
}

