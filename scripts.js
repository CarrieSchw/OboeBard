function toggleNav() {
    let elements = document.getElementsByClassName('toggle-nav');
    for(let i = 0; i < elements.length; i++){
    elements[i].classList.toggle('show');
    }
}
function toggleMenu() {
    let elements = document.getElementsByClassName('toggle-menu');
    for(let i = 0; i < elements.length; i++){
    elements[i].classList.toggle('show');
    }
}