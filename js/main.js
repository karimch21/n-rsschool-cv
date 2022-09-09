const btnProjectDetails = document.querySelectorAll('.projects__item span');

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