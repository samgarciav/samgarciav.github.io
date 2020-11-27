const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&units=imperial&appid=d99a32fe13007dd105b53db660fb31f7"
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    var currently = document.getElementById('currently').textContent = jsObject.weather[0].description;
    var tempF = jsObject.main.temp_max;
    document.getElementById('tempF').innerHTML = tempF
    var speed = jsObject.wind.speed;
    document.getElementById('speed').innerHTML = speed
    document.getElementById('humudity').innerHTML = jsObject.main.humidity;
    document.getElementById('windchill').innerHTML = windchill(tempF, speed);
    function windchill(t, s) {
      if (t <= 50 && s >= 3.8) {
        return Math.round(35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16) + " &deg;F";
      }
      else {
        return "N/A";
      }
    }
  });

const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=d99a32fe13007dd105b53db660fb31f7"
fetch(forecast)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const days = jsonObject['list'];
    console.log(days);
    var h = 0;
    var newdays=[];
      for (let i = 0; i < days.length; i++) {
        if (days[i].dt_txt.includes('18:00:00') /* == `2020-11-${today} 18:00:00` */) {
          newdays[h] = days[i];
          h++;
        }
      }
    
    console.log(newdays);

    let forecastday = document.getElementsByClassName('forecastday');
    for (let i = 0; i < forecastday.length; i++) {
      forecastday[i].innerHTML = newdays[i].main.temp;
    }

    let weathericon = document.querySelectorAll("table td img");
    for (let i = 0; i < weathericon.length; i++) {
      weathericon[i].setAttribute("src", `https://openweathermap.org/img/wn/${newdays[i].weather[0].icon}@2x.png`)
      weathericon[i].setAttribute("alt", `Icon representing ${newdays[i].weather[0].description}`);
    }

    let weatherday = document.getElementsByClassName('day');
    for (let i = 0; i < weatherday.length; i++) {
      let longdate = new Date(newdays[i].dt_txt);
      weatherday[i].textContent = longdate.toLocaleString("en-us", { weekday: "short" });
    }

  });

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const events = jsonObject['towns'];
    const ssevents = events.filter(value => (value.name == 'Fish Haven'));
    let divevents = document.getElementsByClassName("events")[0];
    let p0 = document.createElement('P');
    let p1 = document.createElement('P');
    let p2 = document.createElement('P');
    p0.innerHTML = ssevents[0].events[0];
    divevents.appendChild(p0);
    p1.innerHTML = ssevents[0].events[1];
    divevents.appendChild(p1);
    p2.innerHTML = ssevents[0].events[2];
    divevents.appendChild(p2);
    /*   for (let i = 0; i < ssevents[0].events.length; i++) {
        `p${[i]}`.innerHTML = ssevents[0].events[i];
        divevents.appendChild(`p${[i]}`);
      } */
  });