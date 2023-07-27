const pariButton = document.getElementById("pari");
const dispariButton = document.getElementById("dispari");

let pari;
let dispari;

// Pari
pariButton.addEventListener("click", function () {
  pari = true;
  dispari = false;

  console.log(pari + " pari");
  console.log(dispari + " dispari");

  const numero = parseInt(prompt("inserisci un numero da 1 a 5"));
  numberRandom(numero, pari);
  //   console.log(numberRandom + " fuori funzione");
});

// Dispari
dispariButton.addEventListener("click", function () {
  dispari = true;
  pari = false;

  console.log(dispari + " dispari");
  console.log(pari + " pari");

  const numero = parseInt(prompt("inserisci un numero da 1 a 5"));
  let risultatoFinale = numberRandom(numero, pari);
  //   console.log(risultatoFinale + " fuori funzione");
});

// FUNCTION

function numberRandom(numero, pari) {
  const numberRandom = Math.floor(Math.random() * (6 - 1)) + 1;
  console.log(numberRandom + " numero random");
  const sum = numero + numberRandom;
  console.log(sum + " numero sommato");

  let returnNumber = false;
  sum % 2 == 0 ? (returnNumber = true) : (returnNumber = false);
  console.log(returnNumber + " dentro funzione");

  if (returnNumber == true && pari == ture) {
    alert("hai vinto!");
  }

  return returnNumber;
}
