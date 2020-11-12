const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    /*     console.table(jsonObject);  // temporary checking for valid response and data parsing */

    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let fullname = prophets[i].name + ' ' + prophets[i].lastname;

      let h2 = document.createElement('h2');
      h2.textContent = fullname;
      card.appendChild(h2);

      let p1 = document.createElement('P');
      p1.innerHTML = `<span class='bold'>Date of Birth: </span>${prophets[i].birthdate}`;
      card.appendChild(p1);

      let p2 = document.createElement('P');
      p2.innerHTML = `<span class='bold'>Place of Birth: </span>${prophets[i].birthplace}`;
      card.appendChild(p2);

      let img = document.createElement('img');
      /* img.setAttribute('src', "images/lazyload/placeholder.png"); */ // I tried the lazyload but the lighthouse score diminished. 
      img.setAttribute('src', prophets[i].imageurl);
      img.setAttribute('alt', fullname + ' - ' + [i]);
      card.appendChild(img);

      document.querySelector('div.cards').appendChild(card);
    }
  });



