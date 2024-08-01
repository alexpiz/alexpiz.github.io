 /*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < 100) {
        navEl.classList.remove('navbar-scrolled');
    }
})



// Set the date we're counting down to (September 15, 2024)
        var countDownDate = new Date("Sep 15, 2024 00:00:00").getTime();

        // Update the countdown every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the countdown date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="countdown"
            document.getElementById("countdown").innerHTML = "<div class='countdown-sub'> <p class='countdown-title'>" + days+ "</p>" + "<p>Días</p></div>" + "<div class='countdown-sub'> <p class='countdown-title'>" + hours + "</p>" + "<p>Horas</p></div>" +
            "<div class='countdown-sub'> <p class='countdown-title'>" + minutes + "<p>Minutos</p></div>" + "<div class='countdown-sub'> <p class='countdown-title'>" + seconds + "<p>Segundos</p></div>";

            // If the countdown is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);
