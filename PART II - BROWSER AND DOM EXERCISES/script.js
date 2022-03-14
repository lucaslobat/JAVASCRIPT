// Selecciona el primer elemento <article>
const frstArticle = document.querySelector('article');

//Seleciona el elemento padre del primer <article>
const parentOfArticle = frstArticle.parentElement;

//Selecciona los hijos del elemento <article>
const childrenOfParent = frstArticle.children;

// Selecciona el primer elemento <h2>
const firstH2 = document.querySelector('h2');

// Selecciona el siguiente elemento después del <h2>
const nextH2Sibling = firstH2.nextElementSibling;

// Selecciona el elemento anterior al siguiente elemento <h2> (El propio h2)
const previousH2Sibling = nextH2Sibling.previousElementSibling;

// Crea un nuevo elemento
const nuevoH2 = document.createElement('h2');
nuevoH2.textContent = "Node.appendChild()";



// Inserta un div después del ultimo hijo del padre especificado (article:nth-of-type(2n))
const nuevoDiv= document.createElement('div');
const articulo = document.querySelector('article:nth-of-type(2n)').appendChild(nuevoDiv);

//Selecciona el div creado y append el h2 creado más arriba
const selectorDiv = document.querySelector('article:nth-of-type(2n) div:nth-of-type(4n)');
const nuevoParrafo = document.createElement('p');
selectorDiv.append(nuevoH2,nuevoParrafo);

const parrafos = document.querySelectorAll('p');
parrafos[6].innerHTML = `El método <code>appendChild</code> de la interfaz <code>Node</code>, añade
un nodo al final de la lista de hijos del padre espeficicado. Si el hijo ya existe en el documento,
este se mueve de su posición actual a la nueva posición.`;

const articles = document.querySelectorAll('article');
articles[1].insertAdjacentElement('afterbegin',nuevoDiv)