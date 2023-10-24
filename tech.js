
const dynamicText = document.getElementById("headchange")

const words = ["Good Expirence", "Good Equipment" ];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex)
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop_blinking")

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200); 
    }
    else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    }
    else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop_blinking")
        wordIndex = !isDeleting ? (wordIndex+ 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1400);
    }

}

typeEffect()




//-------------- Navbar Header Scroller Section //

window.addEventListener(('scroll'), () => {
  var header = document.getElementById('scroller');
  var arrow_up = document.getElementById("arrow_up");

  if (window.scrollY > 0) {
    header.classList.add("roll");
    arrow_up.classList.add("show")
  }
  else {
    header.classList.remove("roll");
    arrow_up.classList.remove("show")
  }
})




//--------Preloader page ------//

var load = document.getElementById("load");
load.style.overflow = "hidden";

var content = document.getElementById("container")
content.style.display = "none";

setTimeout(() => {
    load.style.display = "none";
    content.style.display = "block";
}, 2500);


var mean = document.getElementById("mySidenav");

function openNav() {
    mean.classList.add("slide")
  };
  
  function closeNav() {
    mean.classList.remove("slide");
  };




//------------Scroll Reveal-------//

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.upper li', { delay: 0, origin: 'top', interval: 500, distance: '60px', duration: 2000,reset: false});
ScrollReveal().reveal('.left', { delay: 0, origin: 'left', interval: 200, distance: '70px', duration: 1500,reset: false});
ScrollReveal().reveal('.right', { delay: 0, origin: 'right', interval: 200, distance: '70px', duration: 1500,reset: false });
ScrollReveal().reveal('.content_four_sub_container .content_four_sub_container_details', { origin: 'bottom', interval: 300, distance: '50px', duration: 1000,reset: false });





