var burger = document.querySelector('.burger');
var closeButton = document.querySelector('.btn-close');
var menu = document.querySelector('.menu');
var logo = document.querySelector('.logo__mobmenu');

burger.addEventListener('click', function(event) {
burger.classList.toggle('active');
menu.classList.toggle('active');
logo.classList.toggle('active');
document.documentElement.classList.toggle('lock');
closeButton.classList.add('active');
});

closeButton.addEventListener('click', function(event) {
burger.classList.remove('active');
menu.classList.remove('active');
logo.classList.remove('active');
document.documentElement.classList.remove('lock');
closeButton.classList.remove('active');
});

function closeNav() {
    var closemenu = document.querySelector('.menu');
    var closeburger = document.querySelector('.burger');
    closemenu.classList.remove('active');
    closeburger.classList.remove('active');
    logo.classList.remove('active');
    closeButton.classList.remove('active');
    document.documentElement.classList.remove('lock');
}