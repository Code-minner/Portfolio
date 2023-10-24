var mean = document.getElementById("mySidenav");
var bar = document.getElementById("bars");

function openNav() {
   mean.classList.add("slide");
   bar.style.display = "none";
  };
  
  function closeNav() {
    mean.classList.remove("slide");
    bar.style.display = "block";
  };


  

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
  