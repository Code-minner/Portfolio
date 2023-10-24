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

  
  var mean = document.getElementById("mySidenav");
  var openButton = document.getElementById("open");
  
  function openNav() {
      mean.classList.add("slide");
  }
  
  function closeNav() {
      mean.classList.remove("slide");
  }
  
  mean.addEventListener("click", closeNav);
/*
  function closer() {
    mean.classList.remove("slide");
  }



const targetContainer = document.getElementById('pull');
const self = document.getElementById("run")

function handleScroll() {
    const scrollPosition = window.scrollY;
    const targetPosition = targetContainer.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= targetPosition) {
        self.classList.add('runner');
        self.Style.display = "block";
    } else {
        self.classList.remove('runner');
        self.Style.display = "none";
    }
}

// Attach the event listener to the scroll event
window.addEventListener('scroll', handleScroll);
*/



ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.upper li', { delay: 0, origin: 'bottom', interval: 200, distance: '100px', duration: 2000, reset: false });
ScrollReveal().reveal('.left', { delay: 0, origin: 'left', interval: 200, distance: '100px', duration: 2500, reset: false });
ScrollReveal().reveal('.right', { delay: 0, origin: 'right', interval: 200, distance: '100px', duration: 2500, reset: false });
ScrollReveal().reveal('.bottom', { origin: 'bottom', interval: 300, distance: '100px', duration: 1000, reset: false });
ScrollReveal().reveal('.top', { origin: 'top', interval: 300, distance: '100px', duration: 1000, reset: false });

