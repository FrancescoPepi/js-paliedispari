const esButton1 = document.getElementById("es-1");
const esButton2 = document.getElementById("es-2");
const esJavascript = document.getElementById("script");

esButton1.addEventListener("click", function () {
  esJavascript.innerHTML = `<script type="text/javascript" src="./JS/palidromi.js" defer></script>`;
});

esButton2.addEventListener("click", function () {
  esJavascript.innerHTML = `<script type="text/javascript" src="./JS/pari-o-dispari.js" defer></script>`;
});
