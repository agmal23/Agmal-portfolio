/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text')
if (homeText) {
  const letters = homeText.textContent.trim().split('')
  const anglestep = 360 / letters.length
  homeText.textContent = ''

  letters.forEach((char, i) => {
    const span = document.createElement('span')
    span.textContent = char
    span.style.transform = `rotate(${i * anglestep}deg)`
    homeText.appendChild(span)
  })
}
/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
  strings: ['Freelancer', 'web developer', 'seo specialist'],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
})
/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  this.scrolly>=50?header.classList.add('scroll-header')
  :header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

/*=============== SWIPER WORK ===============*/ 
const swiperWork= new Swiper('.work__swiper',{
  direction:'horizontal',
  loop:true,
  spaceBetween:24,
  slidesPerView:'auto',
  grabCursor:true,
  speed:600,
  pagination:{
    el:'.swiper-pagination',
    clickable:true,
    
  },
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  },
  scrollbar:{
    el:'.swiper-scrollbar',
  },
})

/*=============== SERVICES ACCORDION ===============*/ 
const servicesCards = document.querySelectorAll(' .services__card'),
servicesButtons=document.querySelectorAll(' .services__button')

servicesButtons.forEach(button=>{
  button.addEventListener('click', ()=>{
    const currentCard =button.closest(' .services__card'),
    isOpen=currentCard.classList.contains('services-open')

    servicesCards.forEach(card=>{
      card.classList.replace('services-open','services-close')
    })
      if(!isOpen){
        currentCard.classList.replace('services-close','services-open')
      }
    })
  })


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 


/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

if (typeof emailjs !== 'undefined' && typeof emailjs.init === 'function') {
  try { emailjs.init('sX6KhZnvTHf8nwm4g') } catch (err) { console.warn('EmailJS init failed', err) }
} else {
  console.warn('EmailJS library not loaded')
}

if (contactForm) {
  const sendEmail = async (e) => {
    e.preventDefault()

    if (typeof emailjs === 'undefined') {
      contactMessage.textContent = 'Email service not available'
      setTimeout(() => contactMessage.textContent = '', 5000)
      return
    }

    try {
      await emailjs.sendForm('service_c4k5dbb', 'template_sk2wree', contactForm)
      contactMessage.textContent = 'Message sent successfully'
      contactForm.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      contactMessage.textContent = 'Message not sent (service error)'
    } finally {
      setTimeout(() => contactMessage.textContent = '', 5000)
    }
  }

  contactForm.addEventListener('submit', sendEmail)
} else {
  console.warn('Contact form element not found')
}
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/*=============== SCROLLREVEAL ANIMATION ===============*/