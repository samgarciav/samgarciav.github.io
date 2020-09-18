let dd =  new Date().getDate();
let mm =  new Date().getMonth() +1; 
let yyy = new Date().getFullYear();

let hrs =  new Date().getHours();
let min =  new Date().getMinutes(); 
let sec = new Date().getSeconds();

let formated_day_time = mm+'/'+dd+'/'+yyy+' '+ hrs+':'+min+':'+sec;

document.getElementById('lastUpdated').innerHTML = formated_day_time;