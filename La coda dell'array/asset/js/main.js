let elementi = ["elemento1", "elemento2","elemento3","elemento4","elemento5","elemento6","elemento7"]
console.log(elementi)

for (i = (elementi.length -1); i>=elementi.length -5; i--){
    document.getElementById("container").innerHTML += `<div> ${elementi[i]} </div>`;
}