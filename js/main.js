
//EVENTO DO MENU LATERAL
const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.nav-ul')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('nav-ul--ativo')
})

//EVENTO REVEAL
//função "reveal"
function reveal() {
    //cria varial "reveals" atribui no index.html todos ".reveal"
  var reveals = document.querySelectorAll(".reveal");

  //loop
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight; // returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if presen
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//função reveal do carro
function carroReveal() {
    //cria varial "reveals" atribui no index.html todos ".reveal"
  var reveals = document.querySelectorAll(".reveal-carro");

  //loop
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight; // returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if presen
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


window.addEventListener("scroll", reveal);
window.addEventListener("scroll", carroReveal);
