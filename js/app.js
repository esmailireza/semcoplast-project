const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// menu hamberger mobile
navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// go to top (button)
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 850 ||
    document.documentElement.scrollTop > 850
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
