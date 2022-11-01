/* Hamburger menu */

document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('show');
    document.getElementById('nav').classList.toggle('flex-row');
    document.getElementById('nav').classList.toggle('flex-column')
})

