const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.nav-ul')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('nav-ul--ativo')
})