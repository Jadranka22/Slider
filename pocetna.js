var slider1 = [
  "slike/slider-image-7.jpeg",
  "slike/slider-image-6.jpeg",
  "slike/slider-image-9.jpeg",
  "slike/slider-image-8.jpeg",
  "slike/slider-image-5.jpeg"
];

var slider2 = [
  "slike/slider-image-4.jpeg",
  "slike/slider-image-1.jpeg",
  "slike/slider-image-2.jpeg",
  "slike/slider-image-3.jpeg"
];

var lista1 = document.querySelector(".prviSlider");
var lista2 = document.querySelector(".drugiSlider");

function red1 () {
  for ( var i = 0; i < slider1.length; i++) {
    var slike = document.createElement("li");
    slike.classList.add("slike");
    slike.innerHTML = '<img src="' + slider1[i] + '"/>';
    lista1.appendChild(slike);
  }
}

function red2 () {
  for ( var i = 0; i < slider2.length; i++) {
    var slike = document.createElement("li");
    slike.classList.add("slike");
    slike.innerHTML = '<img src="' + slider2[i] + '"/>';
    lista2.appendChild(slike);
  }
}

function moveLeftFirst () {
  $("ul.prviSlider > li:last-child").remove().prependTo(".prviSlider");
}

function moveRightFirst () {
  $("ul.prviSlider > li:first-child").remove().appendTo(".prviSlider");
}

function moveLeftSecond () {
  $("ul.drugiSlider > li:last-child").remove().prependTo(".drugiSlider");
}

function moveRightSecond () {
  $("ul.drugiSlider > li:first-child").remove().appendTo(".drugiSlider");
}

$(".prev").click(function(){
  moveLeftFirst();
  moveLeftSecond();
});

$(".next").click(function(){
  moveRightFirst();
  moveRightSecond();
});

red1();
red2();