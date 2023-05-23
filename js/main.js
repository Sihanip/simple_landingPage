// scroll navbar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 100)
})

// hide/open faq

const faq = document.querySelectorAll('.faq_question');

faq.forEach(faq_question => {
    faq_question.addEventListener('click', () => {
        faq_question.classList.toggle('open_text');

        // change icon
        const icon = faq_question.querySelector('.faq_answer i');
        if(icon.className === 'uil-angle-up') {
            icon.className = "uil-angle-down"
        } else {
            icon.className = "uil-angle-up";
        }
    })
})

// open/close nav button 
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close btn
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)
