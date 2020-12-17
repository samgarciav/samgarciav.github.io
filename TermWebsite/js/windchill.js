const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.510910497519408&lon=-86.94941523853764&units=metric&appid=d99a32fe13007dd105b53db660fb31f7"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.querySelectorAll(".weatherDetails")[0].innerHTML = jsObject.current.weather[0].description;
    document.querySelectorAll(".weatherDetails")[1].innerHTML = jsObject.current.temp + "&#176C";
    document.querySelectorAll(".weatherDetails")[2].innerHTML = jsObject.current.humidity + ' %';

    var test = (jsObject.hourly[4].dt);
    let unix_timestamp = test;
    var date = new Date(unix_timestamp * 1000);

    document.querySelectorAll(".forecast")[0].innerHTML = new Date(jsObject.hourly[2].dt * 1000).toLocaleTimeString([], { timeStyle: 'short' }) + ': ' + jsObject.hourly[2].temp + "&#176C";
    document.querySelectorAll(".forecast")[1].innerHTML = new Date(jsObject.hourly[5].dt * 1000).toLocaleTimeString([], { timeStyle: 'short' }) + ': ' + jsObject.hourly[5].temp + "&#176C";
    document.querySelectorAll(".forecast")[2].innerHTML = new Date(jsObject.hourly[8].dt * 1000).toLocaleTimeString([], { timeStyle: 'short' }) + ': ' + jsObject.hourly[8].temp + "&#176C";
    document.getElementById("weatherIcon").setAttribute('src', `https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}@2x.png`);

  });

