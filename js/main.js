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
    scrollTo(e);
}

function scrollTo(e) {
    e.preventDefault()
    let menuItemLink = e.target.closest('.menu__item a');
    if (!menuItemLink) return;
    let idSection = menuItemLink.href.slice(menuItemLink.href.indexOf('#'), );
    let section = document.querySelector(`${idSection}`);
    let distance = 20;
    window.scrollBy({ top: [section.offsetTop - distance], left: 0, behavior: 'smooth' })
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
        if (countSeletion >= 2000) {
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

console.log(`студент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages +10
вёрстка валидная +10\n 
для проверки валидности вёрстки используйте сервис https://validator.w3.org/\n валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью.\n 
если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требованийвёрстка семантическая +20\n 
В коде странице присутствуют и используются по назначению следующие элементы: \n 
Под "используются по назначению" имеется в виду, что у элементов есть какое-то содержание, соответствующее типу элемента, а не добавлены пустые теги для получения баллов. Правильность использования элементов не проверяется и на балл не влияет. \n header, main, footer +5\n элемент nav +5\n только один заголовок h1 +5\n заголовки h2 +5\n в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс +10\n Если ссылка в футере ведёт на курс stage0, это не ошибка. \n для оформления СV используются css-стили +10\n при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10\n
на странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt +10\n навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a +10\n Также допускается использование нумерованого списка ol > li или ol > li > a\n
Содержание CV +30\n CV содержит:\n краткую информацию о себе +5\n контакты для связи +5\n перечень навыков +5\n пример кода. Код добавляется при помощи символов и тегов, а не картинкой +5\n перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения +5\n информацию об образовании и уровне английского +5\n CV выполнено на английском языке +10`)