// Icon hamburger dynamique

const allNavItems = document.querySelectorAll('.nav-item');
const navbar = document.querySelector('.navbar-collapse');

allNavItems.forEach(item => item.addEventListener('click', () => {

    navbar.classList.toggle('show');
}))


// Smooth Scroll

$("#bt1").click(function (){
    $('html,body').animate({
        scrollTop: $("#prestations").offset().top
    },
        'slow');
});

$(".scroll:nth-child(1)").click(function () {
    $('html,body').animate({
        scrollTop: $("#top").offset().top
    },
        'slow');
});

$(".scroll:nth-child(2)").click(function () {
    $('html,body').animate({
        scrollTop: $("#prestations").offset().top
    },
        'slow');
});

$(".scroll:nth-child(4)").click(function () {
    $('html,body').animate({
        scrollTop: $("#propos").offset().top
    },
        'slow');
});

$(".scroll:nth-child(5)").click(function () {
    $('html,body').animate({
        scrollTop: $("#contacts").offset().top
    },
        'slow');
});