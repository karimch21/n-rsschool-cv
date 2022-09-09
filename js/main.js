const btnProjectDetails = document.querySelectorAll('.projects__item span');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', burgerClickHandler);

window.addEventListener('load', () => {
    addBtnDetailsClickListener(btnProjectDetails)
})

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