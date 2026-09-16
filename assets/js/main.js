/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return

        const sectionId = entry.target.getAttribute('id')
        const navLink = document.querySelector('.nav__menu a[href="#' + sectionId + '"]')
        if(!navLink) return

        document.querySelectorAll('.nav__menu .nav__link').forEach(link => link.classList.remove('active-link'))
        navLink.classList.add('active-link')
    })
}, {
    // Treat a section as "current" once it crosses the header, and stop
    // tracking it before it's scrolled mostly out of view.
    rootMargin: '-58px 0px -60% 0px'
})

sections.forEach(section => sectionObserver.observe(section))

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__content`)
sr.reveal(`.category__data, .experience__item, .education__item, .projects__card, .awards__item, .volunteer__item`,{interval: 100})
sr.reveal(`.skills__group`,{origin: 'left'})
sr.reveal(`.contact__item`,{origin: 'right'})
