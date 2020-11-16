const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    /*     console.table(jsonObject);  // temporary checking for valid response and data parsing */

    const townsO = jsonObject['towns'];
    const towns = townsO.filter(x=>(x.name == 'Preston' || x.name == 'Fish Haven' || x.name == 'Soda Springs'));

      for (let i = 0; i < towns.length; i++) {
      let town = document.createElement('section');
      let townname = towns[i].name;

      let div2 = document.createElement('div');
      div2.setAttribute('class', "towninfo");

      let h2 = document.createElement('h2');
      h2.textContent = townname;
      div2.appendChild(h2);

      let motto = document.createElement('div');
      motto.setAttribute('class', "motto");
      motto.innerHTML = towns[i].motto;
      div2.appendChild(motto);

      let p1 = document.createElement('P');
      p1.innerHTML = `<span class='bold'>Year Founded: </span>${towns[i].yearFounded}`;
      div2.appendChild(p1);

      let p2 = document.createElement('P');
      p2.innerHTML = `<span class='bold'>Population: </span>${towns[i].currentPopulation}`;
      div2.appendChild(p2);

      let p3 = document.createElement('P');
      p3.innerHTML = `<span class='bold'>Anual Rain Fall </span>${towns[i].averageRainfall}`;
      div2.appendChild(p3);

      town.appendChild(div2);

      let img = document.createElement('img');
      img.setAttribute('src', "images/home/placeholderhome.png");
      img.setAttribute('data-src', `images/home/townimg${[i]}.jpg`);
      img.setAttribute('alt', `${towns[i].name} image`);
      town.appendChild(img);

      document.querySelector('div.towns').appendChild(town);
    }

  });



