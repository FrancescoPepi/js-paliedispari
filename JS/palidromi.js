let inputString = askString();

function askString(message = "Iserisci una parola") {
  let userString = prompt(message).toLowerCase();

  //   while (userString != "") {
  //     alert("ATTENZIONE! hai inserito un numero");
  //     let userString = prompt(message);
  //     console.log(userString);
  //   }

  return userString;
}

function checkPalidromi(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    palidromi = false;
    firstLetter = inputString[i];
    lastLetter = inputString[inputString.length - (i + 1)];
    if (lastLetter == firstLetter) {
      palidromi = true;
    }
  }
  return palidromi;
}
// recupro dati function
let returnOutput = checkPalidromi(inputString);
// if-else
returnOutput
  ? console.log("La parola " + inputString + " è una parola palidroma")
  : console.log("La parola " + inputString + " non è una parola palidroma");
