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
'use strict';
const seleccionada = document.querySelector('.js-Karlins');
// seleccionada.innerHTML = 'La Adalaber seleccionada es:';
const karlins = document.querySelector('.js-1');
karlins.innerHTML = 'La Adalaber seleccionada es:';
seleccionada.innerHTML += karlins;