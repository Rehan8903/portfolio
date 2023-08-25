// ============================ Scroll Sections Active Links ==============================
let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
// ============================ Scroll Sections Active Links ==============================

const sections = document.querySelectorAll('section')
const navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector("header nav a[href*=" + id + "]").classList.add('active')
            })
        }
    })
    // ============================ Scroll Sections Active Links ==============================
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)

    // ============================ remove toggle icon when clicked ==============================

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

    // ==================================scroll reveal============================
    
    ScrollReveal({
        // reset: true,
        distance: `80px`,
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
    ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
    ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


    // ================================== typed js ============================

    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Youtuber', 'Blogger'],
        typeSpeed: 90,
        backSpeed: 90,
        backDelay: 1000,
        loop: true
    })