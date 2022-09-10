const btnProjectDetails = document.querySelectorAll('.projects__item span');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', burgerClickHandler);

window.addEventListener('load', () => {
    addBtnDetailsClickListener(btnProjectDetails)
})
window.addEventListener('click', windowClickHandler);

function windowClickHandler(e) {
    clickOutsideMenuHandler(e, menu, burger)
    selectionSection(e)
}

function selectionSection(e) {
    let menuItemLink = e.target.closest('.menu__item a')
    if (!menuItemLink) return
    let idSection = menuItemLink.href.slice(menuItemLink.href.indexOf('#'), );
    let titleSection = document.querySelector(`${idSection} h2`);
    if (!titleSection) return
    let countSeletion = 0;
    setTimeout(function amountSelection() {
        titleSection.classList.toggle('title--select')
        countSeletion += 400;
        if (countSeletion >= 2400) {
            titleSection.classList.remove('title--select')
            return
        }
        setTimeout(amountSelection, countSeletion)
    }, 1300)
}

function clickOutsideMenuHandler(e, menu, burger) {
    let menuElement = e.target.closest('.menu');
    let burgerElement = e.target.closest('.burger');
    let menuItemElement = e.target.closest('.menu__item');

    if (!burgerElement && !menuElement) {
        removeActiveBurgerAndMenu(burger, menu)
    } else if (menuItemElement) {
        removeActiveBurgerAndMenu(burger, menu)
    }
}

function removeActiveBurgerAndMenu(burger, menu) {
    burger.classList.remove('burger--active')
    menu.classList.remove('menu--active')
}


function addBtnDetailsClickListener(elements) {
    for (let el of elements) {
        el.addEventListener('click', projectDetailtClickHandler);
    }
}

function projectDetailtClickHandler() {
    alert('Information coming soon)');
}

function burgerClickHandler() {
    this.classList.toggle('burger--active');
    menu.classList.toggle('menu--active')
}