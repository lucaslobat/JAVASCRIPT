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

// ####### 2.Get get each of li element using document.querySelector('#id') and by their id #######
console.log('2.Get get each of li element using document.querySelector("#id") and by their id');
let firstLi = document.querySelector('#first__li');
let secondLi = document.querySelector('#second__li');
let thirdLi = document.querySelector('#third__li');
let fourthLi = document.querySelector('#fourth__li');
let fifthLi = document.querySelector(`#fifth__li`);
let sixthLi = document.querySelector('#sixth__li');
let seventhLi = document.querySelector('#seventh__li');

console.log(firstLi,secondLi,thirdLi,fourthLi,fifthLi,sixthLi,seventhLi);


// ####### 3.Get all the li as nodeList using document.querySelectorAll(tagname) and by their tag name #######
console.log('3.Get all the li as nodeList using document.querySelectorAll(tagname) and by their tag name');

let allListItems = document.querySelectorAll('li');

console.table(allListItems);

// ####### 4.Loop through the nodeList and get the text content of each list item#######
console.log('4.Loop through the nodeList and get the text content of each list item');

for (let listItem of allListItems){
    console.log(listItem.textContent);
}

// ####### 5.Set a text content to paragraph the fourth paragraph,Fourth List Item #######
console.log("5.Set the textContent of the fourth list item to 'Fourth List Item'");

console.log(fourthLi.textContent = 'Fourth List Item');

// ####### 6.Set id and class attribute for all the paragraphs using different attribute setting methods #######
console.log("6.Set class attribute for all the paragraphs using different attribute setting methods");
let itemCounter = 1;
for (item of allListItems){
    item.setAttribute("class","list__item");
    item.setAttribute("id",`item__${itemCounter}`);
    itemCounter++;
}

/* for (item of allListItems){
    item.className = "list__item";
    item.id = `item__${itemCounter}`;
    itemCounter++;
}
 */
console.log(allListItems);

// ####### 7.Change style of each list item using JavaScript(eg. color, background, border, font-size, font-family) #######
console.log("7.Change style of each list item using JavaScript(eg. color, background, border, font-size, font-family)");

const colors = ['#FFBE0B','#FB5607','#FF006E','#8338EC','#3A86FF','#cc5803','#3d348b']
let colorCounter = 0;
for (item of allListItems){
    item.style.color = colors[colorCounter];
    item.style.backgroundColor = '#fefae0';
    item.style.border ='2px solid red'
    item.style.fontSize = '1.5rem';
    item.style.fontFamily = 'Roboto';
    colorCounter++;
}

// ####### 8.Select all list items and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color #######
console.log("8.Select all lists item and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color");

for (let item of allListItems){
    if(item.id === "item__1" || item.id === "item__3"){
        item.style.color = 'green';
        console.log(item);
    } else if (item.id === "item__2" || item.id ==="item__4"){
        item.style.color = 'red';
        console.log(item);
    }
}