const burgerMenu = document.getElementById('burger-menu-id');
const navigationMenu = document.getElementById('burger-menu-open');
navigationMenu.classList.add('hidden');
const closeElement = document.getElementById('img-close');

burgerMenu.addEventListener('click', () => {
    if (burgerMenu.className === 'burger-menu') {
        burgerMenu.classList.add('hidden');
        navigationMenu.className = 'burger-menu-open';
    } else {
        burgerMenu.className = 'burger-menu';
    }
});

closeElement.addEventListener('click', () => {
    if (closeElement) {
        burgerMenu.className = 'burger-menu';
        navigationMenu.classList.add('hidden');
    }
});