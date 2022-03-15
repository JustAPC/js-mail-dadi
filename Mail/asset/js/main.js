let utenteRegistrato = ["boolean@corso.it", "andreapontillo97@gmail.com", "andrea.pontillo@libero.it"]

let mailUtente = prompt ("Qual'è la tua email?");
console.log ("La mail dell'utente è " + mailUtente);

let bottoneRegistrati = document.getElementById ("registrati-ora")

let mailValida = false

for (let i = 0; i < utenteRegistrato.length; i++){
    if (utenteRegistrato[i] == mailUtente) {
        mailValida = true;
        console.log("L'utente è registrato");
    } 
}

if (mailValida == true) {
    document.getElementById("risultato-verifica").innerHTML = "Sei già registrato al nostro sito"
    document.getElementById("registrati-ora").className += " d-none";
} else {
    console.log ("L'utente non è registrato")
    document.getElementById("risultato-verifica").innerHTML = "Non sei ancora registrato, registrati tramite il bottone sottostante!"
    document.getElementById("registrati-ora").className += "d-block";
}

