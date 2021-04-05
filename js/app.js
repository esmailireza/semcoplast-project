const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click",function(){
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
    }
    else{
        links.classList.add("show-links");
    }
});

// go to top (button)
let mybutton = document.getElementById("myBtn");

window.onscroll = function(){ scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 850 || document.documentElement.scrollTop > 850){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0 ; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 