//MOBILE MENU

var mobileMenu = document.querySelector('#mobile-menu');

mobileMenu.onclick = function() {
    if(this.classList == "open") {
        this.classList.remove('open');
    } else {
        this.classList.add('open');
    }
};
