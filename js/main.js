//MOBILE MENU

let mobileMenu = document.querySelector('#mobile-menu');
let mobileNav = document.querySelector('main #first header .header-container nav');
let docBody = document.querySelector('body');
let listItems = document.querySelector('main #first header .header-container nav > ul').getElementsByTagName('li');
let newList = Object.values(listItems);

mobileMenu.onclick = function() {
    if(this.classList == "open") {
        this.classList.remove('open');
        mobileNav.classList.remove('clicked');
        docBody.classList.remove('stick');
    } else {
        this.classList.add('open');
        mobileNav.classList.add('clicked');
        docBody.classList.add('stick');
    }
};

newList.forEach(function(curr) {
    curr.onclick = function() {
        if (curr.classList != "dropdown") {
            if(mobileMenu.classList == "open") {
                mobileMenu.classList.remove('open');
                mobileNav.classList.remove('clicked');
                docBody.classList.remove('stick');
            }
        }
    }
});
