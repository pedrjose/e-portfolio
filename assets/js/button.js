const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);