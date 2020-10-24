pancakes();

function pancakes(){
  if(new Date().getDay() == 6){
    document.getElementsByClassName("pancakes")[0].style.display="block";
  }
  else{
    console.log("No pancakes today");
  }
}

function closepancakes(){
  document.getElementsByClassName("pancakes")[0].style.display="none";
}