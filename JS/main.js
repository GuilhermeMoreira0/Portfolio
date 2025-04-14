/*========================================== TOGLE ICON NAVBAR ================================= */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*========================================== SCROLL SECTION ATIVE LINK ================================= */

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

/*========================================== STICKY NAVBAR ================================= */

let header = document.querySelector('header')
header.classList.toggle('stickly', window,scrollY > 100);

/*========================================== REMOVE TOGGLE ICON AND NAVBAR ================================= */
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

/*========================================== SCROLL REVEAL ================================= */

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, heading',{origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'buttom'});
 ScrollReveal().reveal('.home-contact h1, .about-img',{origin: 'left'});
 ScrollReveal().reveal('.home-contact p, .about-content',{origin: 'right'});

 /*========================================== TYPED JS ================================= */

 const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Backend', 'Engenheiro de software'],
    TypeSpeed: 70,
    backSpeed: 70,
    backDeley: 1000,
    loop: true,
 });


 const openModalBtns = document.querySelectorAll(".open-modal");
  const modals = document.querySelectorAll(".modal");
  const closeBtns = document.querySelectorAll(".close");

  openModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "block";
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    modals.forEach(modal => {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    });
  });

