/***************************************************/
// Introduktion till Dom
/***************************************************/
// Det globala objektet, högts i i hierarkin
// Window
// console.log(window);
// window.alert('Hej på dig!');
// alert('Hej på dig!');

// Document objektet
// console.log(document);

// root element...
/* console.log(document.documentElement);
console.log(document.head);
console.log(document.head.children);
console.log(document.head.children[3]);
console.log(document.head.children[3].innerHTML);

document.head.children[3].innerHTML = 'Intro till DOM';

console.log(document.links);
console.log(document.links[0].href); */
// Icke rekommenderat sätt att manipulera länkar eller attribut på!!!
// document.links[0].href = 'https://react.dev/';
// console.log(document.links[0].href);

// FARLIGT ATT GÖRA...
// document.body.innerHTML =
//   '<h2>JavaScript är helball! 🎉</h2><button>Byt allt!</button>';

// console.log(document.all);

// console.log(document.links);

// Försök 1.
// document.links.forEach((x) => console.log(x));

// Försök 1.5.
// Array.from()
/* const links = Array.from(document.links);
console.log('Array.from()', links);

links.forEach((x) => console.log(x)); */

// Försök 2.
/* for (let i = 0; i < document.links.length; i++) {
  console.log(document.links[i]);
} */

// Försök 3.
/* for (let link of document.links) {
  console.log(link);
} */

/***************************************************/
// Lokalisera html element i DOM

// 3 huvudsakliga sätt att lokalisera eller hitta
// element
// 1. Via elements namn t ex h1
// 2. Via elementets id
// 3. Via elementets klass (css)
/***************************************************/
// Det gamla sättet som jag undviker...
// const title = document.getElementById('page-title');
// console.log(title);
// title.innerHTML = 'Intro till DOM manipulering';

// Det mer moderna sättet, som jag alltid använder...
const title = document.querySelector('h1');
console.log(title);
title.innerHTML = 'Intro till DOM Amazing!';
title.style.color = '#ff00ff';
title.style.fontFamily = 'verdana';
title.style.backgroundColor = '#ddd';
title.style.border = 'solid 2px orange';
title.style.padding = '2rem';
title.style.borderRadius = '1rem';
title.classList.add('page-title');

// title.classList.remove('page-title');

const links = document.querySelectorAll('.link');
// const links = document.querySelectorAll('.link');
// console.log(links);

links.forEach((link) => {
  link.style.color = '#ff0000';
  link.style.fontFamily = 'verdana';
  link.style.textDecoration = 'none';
  link.style.fontWeight = 600;
  link.style.display = 'inline-block';
  link.style.marginBottom = '1.2rem';
});

/* Addera information dynamiskt */
const vehicles = ['Ford', 'Fiat', 'BMW', 'Volvo'];
const detailsPlaceHolder = document.querySelector('#details');

for (let vehicle of vehicles) {
  let div = document.createElement('div');
  div.textContent = vehicle;

  detailsPlaceHolder.appendChild(div);
}
