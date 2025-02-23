document.addEventListener("DOMContentLoaded", function () {
    const words = ["SB Designs", "Game Development", "Graphic Design", "Programming"];
    let currentWordIndex = 0;
    let isDeleting = false;
    let currentText = "";
    const typedTextElement = document.getElementById("typed-text");
    const typingSpeed = 150;  // speed in milliseconds for typing
    const deletingSpeed = 100; // speed in milliseconds for deleting
    const delayBetweenWords = 2000; // delay between words in milliseconds
    const delayBeforeDeleting = 1000; // delay before starting to delete

    function type() {
        const currentWord = words[currentWordIndex];

        if (!isDeleting) {
            currentText = currentWord.substring(0, currentText.length + 1);
        } else {
            currentText = currentWord.substring(0, currentText.length - 1);
        }

        typedTextElement.textContent = currentText;

        if (!isDeleting && currentText === currentWord) {
            setTimeout(() => isDeleting = true, delayBeforeDeleting);
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
        }

        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    type();
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.business-section, .contact-section, .hero-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);  // Stop observing once the section is visible
            }
        });
    }, {
        threshold: 0.1  // Trigger when 10% of the section is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById("copyright-year").textContent = new Date().getFullYear();

 function toggleMenu() {
        document.querySelector(".nav-links").classList.toggle("active");
        document.querySelector(".menu-toggle").classList.toggle("active"); // Toggle the active class for the hamburger
    }
        function launchConfetti() {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
