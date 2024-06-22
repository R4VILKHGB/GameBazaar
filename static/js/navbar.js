document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.querySelector('.dropdown-menu').classList.toggle('show');
        });
    });

    document.addEventListener('click', () => {
        dropdowns.forEach(dropdown => {
            dropdown.querySelector('.dropdown-menu').classList.remove('show');
        });
    });
});
