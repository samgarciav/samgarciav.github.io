const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.510910497519408&lon=-86.94941523853764&units=metric&appid=d99a32fe13007dd105b53db660fb31f7"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.querySelectorAll(".weatherDetails")[0].innerHTML = jsObject.current.weather[0].description;
    document.querySelectorAll(".weatherDetails")[1].innerHTML = jsObject.current.temp;
    document.querySelectorAll(".weatherDetails")[2].innerHTML = jsObject.current.humidity;

    console.log(jsObject);

    var test=(jsObject.hourly[4].dt);
    console.log(test);

    let unix_timestamp = test;
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);

console.log(date.toLocaleTimeString('en-US'));

document.querySelectorAll(".forecast")[0].innerHTML = new Date(jsObject.hourly[2].dt*1000).toLocaleTimeString('en-US');
document.querySelectorAll(".forecast")[1].innerHTML = new Date(jsObject.hourly[4].dt*1000).toLocaleTimeString('en-US');
document.querySelectorAll(".forecast")[2].innerHTML = new Date(jsObject.hourly[6].dt*1000).toLocaleTimeString('en-US');
document.getElementById("weatherIcon").setAttribute('src',`https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}@2x.png`);

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

const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=d99a32fe13007dd105b53db660fb31f7"
fetch(forecast)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const days = jsonObject['list'];
    var h = 0;
    var newdays = [];
    for (let i = 0; i < days.length; i++) {
      if (days[i].dt_txt.includes('18:00:00') /* == `2020-11-${today} 18:00:00` */) {
        newdays[h] = days[i];
        h++;
      }
    }

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
    const ssevents = events.filter(value => (value.name == 'Soda Springs'));
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
  });

