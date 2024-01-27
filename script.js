// header scrolling effect
$(window).on('scroll', function(){
  if($(window).scrollTop()){
      $('header').addClass('nav-show');

  } 
  else{
    $('header').removeClass('nav-show');
  }

})

const fixedOverlayHeight = 47; // Set your desired fixed height

$(window).on('scroll', function () {
    // Always set a fixed height for the overlay
    $('.overlay').css('height', fixedOverlayHeight + 'vh');
});


// hamburger
const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");
    const overlay = document.querySelector(".overlay");

    hamburger.onclick = () => {
        navbar.classList.toggle("nav-active");
        overlay.classList.toggle("overlay-active"); // Toggle overlay visibility

        // Animation links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3}s`;
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
                setTimeout(typeText, 100); // Adjust the typing speed (milliseconds)
            } else {
                nameAnimationCompleted = true;
                introPosition.textContent = "I'm a ";
                typeText(); // Continue with position typing
            }
        } else {
            if (charIndexPosition < positions[positionIndex].length) {
                introPosition.textContent += positions[positionIndex][charIndexPosition++];
                setTimeout(typeText, 100);
            } else {
                setTimeout(() => {
                    charIndexName = 0;
                    charIndexPosition = 0;
                    positionIndex = (positionIndex + 1) % positions.length;
                    introPosition.textContent = "I'm a "; // Reset introPosition content
                    typeText();
                }, 1000); // Wait for 1 second before switching to the next position
            }
        }
    }

    typeText();
});




window.onload = () => navSlide();
