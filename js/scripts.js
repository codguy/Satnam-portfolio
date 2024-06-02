/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
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

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})


function getDateDifference(date1, date2) {
    var oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    var diffDays = Math.round(Math.abs((date1 - date2) / oneDay));

    var years = Math.floor(diffDays / 365);
    var months = Math.floor((diffDays % 365) / 30);

    return { years, months };
}

function displayDateDiff(years, months) {
    if (years > 0) {
        return `${years} years and ${months} months`;
    } else {
        return `${months} months`;
    }

}

// date of joining the company
let date1 = new Date('2022-01-03');
// current date
let date2 = new Date();
var { years, months } = getDateDifference(date1, date2);
document.querySelector('.experience-span').innerHTML = displayDateDiff(years, months);

date1 = new Date('2023-12-11');
var { years, months } = getDateDifference(date1, date2);
document.querySelector('.current-org-exp').innerHTML = displayDateDiff(years, months);


