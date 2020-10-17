pancakes();

function pancakes(){
  if(new Date().getDay() == 6){
    document.getElementsByTagName("section")[0].style.display="block";
  }
  else{
    console.log("No pancakes today");
  }
}

function closepancakes(){
  document.getElementsByTagName("section")[0].style.display="none";
}