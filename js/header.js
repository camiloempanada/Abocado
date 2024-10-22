document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbarBar');
    const navbarList = document.getElementById('navbarLink');
      
    navbarToggle.addEventListener('click', function () {
      navbarList.classList.toggle('show');
    });
});