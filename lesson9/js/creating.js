let card = document.createElement('section');
let h2 = document.createElement('h2');

h2.textContent = 'My Title h2'
card.appendChild(h2);

let p1 = document.createElement('P');
p1.textContent = 'This is my p1 created';
card.appendChild(p1);

let img = document.createElement('img');
img.setAttribute('src','#');
img.setAttribute('alt','here goes the alt');
card.appendChild(img);

document.querySelector('.cards').appendChild(card);