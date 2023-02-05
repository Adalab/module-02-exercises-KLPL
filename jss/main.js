// 1.1. INTRO A LA PROGRAMACIÓN - Mensaje de navegador obsoleto
// 'use strict';
// document.querySelector('h1').innerHTML = 'Esta página no es compatible jejejeje me debes 900€';


// 1.2. VARIABLES - Arreglando errores 
// 'use strict';
// const officeAddress = 'Madrid, 28009';
// let officeAddress = 'Madrid, 28009';
// officeAddress = 'Valladolid, 47009';
// Si ponemos CONST nos va a dar un error en la console al hacer console.log(officeAddress) pq hemos asigado un valor distinto a la variable siendo esta CONST
// En cambio, si ponemos LET nos va a dar el valor que le hemos asignado a esa variable ('Valladolid, 47009' -> que es el nuevo asignado, recordemos que let se puede cambiar el valor de la variable), poniendo en la console --> console.log(officeAddress).
// Pero si ponemos console.log('officeAddress'), lo que nos devuelve es officeAddress, NO el valor asignado.


// 1.3.I. HOLA MUNDO
// 'use strict';
// const klpl = document.querySelector('.js-p');
// klpl.innerHTML = 'Hola mundo'; 
// Esto sirve para llamar al HTML y modificar el contenido
// En el console ponemos console.log('klpl') y nos devuelve literalmente el p del html (<P class="js-p">Hola</P>).

// 1.3.II. SELECCIONANDO ADALABERS 
// MANERA GET (ESTO ES PARA EL TIPO DE TAG!)
//'use strict';
// let title = document.querySelector('h1'); //Aquí llamamos a la etiqueta directamente.
// //title.innerHTML = ''; Con esto, en la página web, nos estaría devolviendo nada en el título, ya que lo hemos dejado vacío = '';
// //title.innerHTML = 'La Adalaber seleccionada es:'; -> No hace falta ponerla pq arriba ya estamos nombrando a title y el contenido de h1.
// let livalue = document.getElementsByTagName('li')[0].innerHTML; //Ahora en la variable livalue, va a traer la primera li del html (la primera pq hemos indicado el listado LI y la posición [0]). Para listados hay que poner getElementsByTagName. Cambiando el número que hay en [], tendríamos el nombre del resto, ejemplo: [2] = Pilar.
// title.innerHTML += livalue; //OJO: No poner las comas en livalue pq sino nos va a devolver livalue, en lugar del valor de esta variable.

// MANERA QUERY (AQUÍ PUEDES PONER EL SELECTOR QUE QUIERAS->TAG, .CLASE, #ID):
'use strict';
// -- A) OTRA MANERA, PONIENDO TODO A LA VEZ: --
// document.querySelector('.js-title').innerHTML = 'La ADALABER seleccionada es:'; 
// -- B) OTRA MANERA SERÍA PONIENDO: --
// const titleLi = document.querySelector('.js-title');
// titleLi.innerHTML = 'La ADALABER seleccionada es:'; 
// -- C) OTRA MANERA: --
// const titleLi = document.querySelector('.js-title');
// titleLi.innerHTML = titleLi.innerHTML + ' awesome'; 
// -- D) LISTADOS pero llamando al h1: --
// const listTitle = document.querySelector('.js-title');
// listTitle.innerHTML = 'La ADALABER escogida es: ';
// const listContent = '<li>Prove1</li><li>Prove2</li>';
// listTitle.innerHTML += listContent; // listNames.innerHTML + listContent; sería lo mismo.
// -- E) LISTADOS pero llamando a los LIs: --
// const listNames = document.querySelector('.js-list');
// listNames.innerHTML = 'La ADALABER escogida es: ';
// const listContent = '<li>Prove1</li><li>Prove2</li>';
// listNames.innerHTML += listContent; // listNames.innerHTML + listContent; sería lo mismo.
// -- F) LISTADOS llamodos en LIs por su clase común .js-listitem: --
let title = document.querySelector('.js-title');
let livalue = document.getElementsByClassName('js-listitem')[3].innerHTML; //Así te devuelve [] el que quieras, 0 = Karla, 3 = Laia, etc.
title.innerHTML += livalue;
//QuerySelector es para el primer elemento y ya.
// VS
//getElements es para un listado de elementos.

