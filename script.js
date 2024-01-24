// header scrolling effect
$(window).on('scroll', function(){
    if ($(window).scrollTop()) {
        $('header').addClass('nav-show');
    } else {
        $('header').removeClass('nav-show');
    }
});

// hamburger
const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");

    hamburger.onclick = () => {
        navbar.classList.toggle("nav-active");

        // Animation links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });

        // Hamburger animation
        hamburger.classList.toggle("toggle");
    };
}

// Typing animation for name and different positions
document.addEventListener('DOMContentLoaded', function () {
    const nameText = "Akash Nelson";
    const positions = ["Software Developer", "Game Designer", "Data Analyst"];
    const introName = document.querySelector('.intro h3');
    const introPosition = document.querySelector('.intro p');
    let positionIndex = 0;
    let charIndexName = 0;
    let charIndexPosition = 0;
    let nameAnimationCompleted = false;

    function typeText() {
        if (!nameAnimationCompleted) {
            introName.textContent = nameText.slice(0, charIndexName++);
            if (charIndexName <= nameText.length) {
                setTimeout(typeText, 100); 
            } else {
                nameAnimationCompleted = true;
                charIndexPosition = 0;
                typeText(); 
            }
        } else {
            if (charIndexPosition <= positions[positionIndex].length) {
                introPosition.textContent = positions[positionIndex].slice(0, charIndexPosition++);
                setTimeout(typeText, 100);
            } else {
                setTimeout(() => {
                    charIndexName = 0;
                    charIndexPosition = 0;
                    positionIndex = (positionIndex + 1) % positions.length;
                    typeText();
                }, 1000); 
            }
        }
    }

    typeText();
});

window.onload = () => navSlide();
