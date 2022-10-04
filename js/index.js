const toogleButton = document.getElementById('toogleButton');
const navBar = document.getElementById('navBar');

toogleButton.addEventListener('click', () => {
    navBar.classList.toggle('active')
});