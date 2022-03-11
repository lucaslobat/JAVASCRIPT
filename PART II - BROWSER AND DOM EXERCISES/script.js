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
nuevoH2.textContent = "Este es un h2 creado con JavaScript";

// Inserta un elemento después del elemento hijo del elemento especificado. (article:nth-of-type(2n))
const articulo = document.querySelector('article:nth-of-type(2n)').appendChild(nuevoH2);
