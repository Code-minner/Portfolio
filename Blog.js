var mean = document.getElementById("mySidenav");


function openNav() {
    mean.classList.add("slide");
};

function closeNav() {
    mean.classList.remove("slide");
};


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.upper li', { delay: 0, origin: 'top', interval: 500, distance: '40px', duration: 2000, reset: false });
ScrollReveal().reveal('.left', { delay: 0, origin: 'left', interval: 200, distance: '70px', duration: 2500, reset: false });
ScrollReveal().reveal('.right', { delay: 0, origin: 'right', interval: 200, distance: '70px', duration: 2500, reset: false });
ScrollReveal().reveal('.bottom', { origin: 'bottom', interval: 300, distance: '100px', duration: 1000, reset: false });
ScrollReveal().reveal('.stop', { origin: 'bottom', interval: 300, distance: '1px', duration: 1000, reset: false });

