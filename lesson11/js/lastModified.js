const today = new Date();
let longday = today.toLocaleString("en-us", {weekday:"long"});
let DD = today.toLocaleString("en-us", {day:"2-digit"});
let MM = today.toLocaleString("en-us", {month:"short"});
let fullyear = today.toLocaleString("en-us", {year:"numeric"});
document.getElementById('today').innerHTML= (`${longday}, ${DD} ${MM} ${fullyear}`);

let YYYY = new Date().getFullYear();
document.getElementById('getFullYear').innerHTML = YYYY;
