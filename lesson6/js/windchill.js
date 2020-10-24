var tempF = document.getElementById('tempF').textContent;
var speed = document.getElementById('speed').textContent;

document.getElementById('windchill').innerHTML= windchill(tempF,speed);

function windchill(t,s) {
  if (t<=50 && s>=3.8) {
  return Math.round(35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16) + " F";
  } 
  else {
    return "N/A";
  }
}
