let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;

let bottoneDadi = document.getElementById("bottone-dadi");

bottoneDadi.addEventListener("click",
function(){
    document.getElementById("giocatore1").innerHTML = "Il tuo numero è " + dado1

    document.getElementById("giocatore2").innerHTML = "Il numero del computer è " + dado2

    if (dado1 > dado2) {
        document.getElementById("risultato").innerHTML = "Hai vinto!"
    } else if (dado1 < dado2) {
        document.getElementById("risultato").innerHTML = "Ha vinto il computer :("
    } else {
        document.getElementById("risultato").innerHTML = "E' finita in pareggio, fatene un'altra!"
    }
  }
);


