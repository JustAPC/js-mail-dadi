let utenteRegistrato = ["boolean@corso.it", "andreapontillo97@gmail.com", "andrea.pontillo@libero.it"]
let mailUtente = prompt ("Qual'è la tua email?");
console.log ("La mail dell'utente è " + mailUtente);

for (let i = 0; i < utenteRegistrato.lenght; i++){
    
    if (utenteRegistrato[i] == mailUtente) {
        console.log("L'utente è registrato");
        document.getElementById("risultato-verifica").innerHTML = "Sei già registrato al nostro sito!"

    } else if (utenteRegistrato[i] != mailUtente) {
        console.log("L'utente non è registrato")
        document.getElementById("risultato-verifica").innerHTML = "Non sei ancora registrato al nostro sito"
    }
}

let bottoneRegistrati = document.getElementById ("registrati-ora")

if (mailUtente != utenteRegistrato){
    document.getElementById("registrati-ora").className += " d-block";
    
    bottoneRegistrati.addEventListener("click",
    function(){
        utenteRegistrato.push (mailUtente);
      }
    );
}
