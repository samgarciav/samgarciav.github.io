fetch('data/rentals.json')
  .then((response) => response.json())
  .then((jsObject) => {

    var rentals = jsObject;

    let reservedHalf = document.getElementsByClassName('reservedHalf');
    for (let i = 0; i < reservedHalf.length; i++) {
      reservedHalf[i].innerHTML = `$ ${rentals[i].reservedHalf}`;
    }

    let reservedFull = document.getElementsByClassName('reservedFull');
    for (let i = 0; i < reservedFull.length; i++) {
      reservedFull[i].innerHTML = `$ ${rentals[i].reservedFull}`;
    }

    let walkedHalf = document.getElementsByClassName('walkedHalf');
    for (let i = 0; i < walkedHalf.length; i++) {
      walkedHalf[i].innerHTML = `$ ${rentals[i].walkedHalf}`;
    }

    let walkedFull = document.getElementsByClassName('walkedFull');
    for (let i = 0; i < walkedFull.length; i++) {
      walkedFull[i].innerHTML = `$ ${rentals[i].walkedFull}`;
    }
  });

