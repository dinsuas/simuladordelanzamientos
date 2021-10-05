window.onload = init;
var boton;
var valores;
var dado = [6];
var fr = [6];
function init() {
  dado[0] = document.getElementById("1");
  dado[1] = document.getElementById("2");
  dado[2] = document.getElementById("3");
  dado[3] = document.getElementById("4");
  dado[4] = document.getElementById("5");
  dado[5] = document.getElementById("6");
  fr[0] = document.getElementById("11");
  fr[1] = document.getElementById("12");
  fr[2] = document.getElementById("13");
  fr[3] = document.getElementById("14");
  fr[4] = document.getElementById("15");
  fr[5] = document.getElementById("16");

  boton = document.getElementById("entrada_valores");
  boton.onclick = lanzar_dado;
}
