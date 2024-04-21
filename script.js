const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('#btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> (
wrapper.classList.add('active')
));

loginLink.addEventListener('click', ()=> (
    wrapper.classList.remove('active')
    ));


    btnPopup.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup')
    });
    iconClose.addEventListener('click', ()=> {
        wrapper.classList.remove('active-popup')
    });

window.addEventListener("scroll", function(){
    var scrollHeight = document.getElementById('toggle-form');
    var scrollPosition = window.scrollY;
    var triggerHeight = 500;

    if (scrollPosition > 1000) {
        triggerHeight = 800;
    }

    if (scrollPosition >=
        triggerHeight) {
        scrollHeight.style.display =
        "block";
        } else {
        scrollHeight.style.display = "none";
    }
    
});



document.getElementById("showButton").addEventListener("click", function() {
    var hiddenImages = document.querySelectorAll(".images");

    hiddenImages.forEach(function(image) {
        image.classList.toggle("visible");
    });
});
// talk to an expert button
// function openPage(){
//     window.location.href = ;
// }


