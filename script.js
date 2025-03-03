$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    //paraallax js
    function paraallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parllax = new Parallax(scene)
        }
    }
    paraallaxMouse();
});


// For the function of going back to the top
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
            backToTopButton.classList.remove("hide");
        } else {
            backToTopButton.classList.add("hide");
            setTimeout(() => backToTopButton.classList.remove("show"), 300);
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Home Button Underline 
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar .nav-item .nav-link");

    function updateActiveLink() {
        let scrollY = window.scrollY;
        let foundSection = false;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for navbar height
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                foundSection = true;
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });

        // If no section is found (e.g., scrolled past all sections), remove all active classes
        if (!foundSection) {
            navLinks.forEach(link => link.classList.remove("active"));
        }
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // Run on page load in case user refreshes mid-scroll
});

// For automatic navbar close
$(document).ready(function () {
    $('.navbar-nav a').click(function () {
        $('.navbar-collapse').collapse('hide'); // Closes the navbar
    });
});

function downloadCV(event) {
    event.preventDefault(); // Prevents page refresh

    const button = document.getElementById("downloadBtn");
    const btnText = document.getElementById("btnText");
    const spinner = document.getElementById("loadingSpinner");

    // Change button text and show spinner
    btnText.textContent = "Downloading...";
    spinner.style.display = "inline-block";
    button.style.pointerEvents = "none"; // Disable button to prevent multiple clicks

    // Create a hidden download link
    const link = document.createElement("a");
    link.href = "Muhib's CV.pdf"; // Make sure the file path is correct
    link.download = "Muhib_CV.pdf"; // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset button text after 2 seconds
    setTimeout(() => {
        btnText.textContent = "Download CV";
        spinner.style.display = "none";
        button.style.pointerEvents = "auto"; // Re-enable button
    }, 2000);
}


