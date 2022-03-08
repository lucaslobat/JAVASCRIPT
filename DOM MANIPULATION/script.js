/* // Devuelve un objeto de tipo Element con el id especificado
let orderedList = document.getElementById('ordered__list');

//Devuelve un HTMLCollection (array-like object) con la clase especificada.
let mainContainer = document.getElementsByClassName('container')

//Devuelve HTMLCollection con la etiqueta especificada.
let allLis = document.getElementsByTagName('li');


console.table("getElementById 'ordered__list'",orderedList);
console.table("getElementsByClassName 'container'",mainContainer);
console.table("getElementsByTagName 'li'",allLis);

for (let li of allLis){
    li.textContent = 'Changed by Javascript';

}

//Devuelve el primer objeto de tipo Elemento con el selector especificado.
let firstH1 = document.querySelector('h1');
console.table('First h1',firstH1);

//Devuelve el primer objeto de tipo Elemento que tiene la propiedad especificada.
let selectByTitle = document.querySelector('h1[title]');
console.table('First h1 with the property title',selectByTitle);

let allParagraphs = document.querySelectorAll('p');
console.table('All paragraphs',allParagraphs); */


// ####### 1.Get the first list item by using document.querySelector(tagname) and tag name #######
console.log('1.Get the first list item by using document.querySelector(tagname) and tag name');

let firstParagraph = document.querySelector('li');
console.table(firstParagraph);
