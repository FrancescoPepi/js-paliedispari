let inputString = askString();

console.log(inputString + " ask-string");

function askString(message = "Iserisci una parola") {
  let userString = prompt(message);

  //   while (userString != "") {
  //     alert("ATTENZIONE! hai inserito un numero");
  //     let userString = prompt(message);
  //     console.log(userString);
  //   }

  return userString;
}

function controlloPalidromi(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    palidromi = false;
    console.log(palidromi);
    firstLetter = inputString[i];
    lastLetter = inputString[inputString.length - (i + 1)];
    if (lastLetter == firstLetter) {
      palidromi = true;
    }
  }
  return palidromi;
}

let risposta = controlloPalidromi(inputString);
console.log(risposta + " sono io");
