document.addEventListener('DOMContentLoaded', function () {
    // Toggle the responsive navigation menu
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Close the menu when a menu item is clicked
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navList.classList.remove('show');
        });
    });
});
