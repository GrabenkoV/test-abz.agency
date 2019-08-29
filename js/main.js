
//-------------------------------------------------------------------
//Изменение цвета заголовка поля для ввода при фокусе в блоке REGISTER
//Начало
//-------------------------------------------------------------------
var input = document.getElementById("your_name");

function colorOn() {
  document.getElementById("label-n").classList.add('active');
}
function colorOff() {
  document.getElementById("label-n").classList.remove('active');
}

input.onfocus = colorOn;
input.onblur = colorOff;

//-------------------------------------------------------------------

var inputE = document.getElementById("your_email");

function colorOnE() {
  document.getElementById("label-e").classList.add('active');
}
function colorOffE() {
  document.getElementById("label-e").classList.remove('active');
}

inputE.onfocus = colorOnE;
inputE.onblur = colorOffE;

//-------------------------------------------------------------------

var inputP = document.getElementById("your_phone");

function colorOnP() {
  document.getElementById("label-p").classList.add('active');
}
function colorOffP() {
  document.getElementById("label-p").classList.remove('active');
}

inputP.onfocus = colorOnP;
inputP.onblur = colorOffP;
//конец (изменение цвета)


//-------------------------------------------------------------------
// Адаптив навигации (начало)
//-------------------------------------------------------------------

$("#nav__toggle").on("click", function(event) {
  event.preventDefault();

  $("#header__nav").toggleClass("active");
  $("#header__user").toggleClass("active");
  $("#nav__toggle").toggleClass("active");
});