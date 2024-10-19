// const { CgSpaceBetween } = require("react-icons/cg");

 
 const navmenu = document.getElementById('nav-menu'),
  navclose =   document.getElementById('nav-close'),
  navtoggle = document.getElementById('nav-toggle')

//   menu show
  if(navtoggle)
  {

      navtoggle.addEventListener('click' ,()=>{
          navmenu.classList.add("show-menu");
    })
}
// hidemenu
if(navclose)
    {
  
        navclose.addEventListener('click' ,()=>{
            navmenu.classList.remove("show-menu");
      })
  }

  const navlink = document.querySelectorAll('.nav__link');
 
  const activelinks =()=>{
          navmenu.classList.remove("show-menu")
    }
   navlink.forEach(n => n.addEventListener('click', activelinks));


//    swipper projects : 


// let swiperProjects = new Swiper(".projects__container", {
//   loop: true,
//   spaceBetween: 24,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   // breakpoints: {
//   //   1200: {
//   //     slidesPerView: 2,
//   //     spaceBetween: -56,
//   //   },
   
//   // },
//  mousewheel: true ,
//  Keyboard: true ,
// });

let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },
});



  // EMAIL JS 


  const contactForm = document.getElementById('contact-form'),
   contactName = document.getElementById('contact-name') ,
   contactEmail = document.getElementById('contact-email'),
   contactProject = document.getElementById('contact-project'),
   contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
  e.preventDefault()

  // check if the feild has a value or not : 
  if(contactName.value === '' || contactEmail.value === '' || contactProject.value==='')
  {
    // add and remove color 
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')
    // show message 
    contactMessage.textContent = 'Write all the input fields 📩'

  }
  else{
    // serviceid  , templateid , #form - publickey
    // when you login on emailjs you will get these .
    emailjs.sendForm('service_swgsjbk','template_pemwtnv','#contact-form','HK0QRTwJWnpvfWxv7').then(()=>{
      // show message and add colour 
      contactMessage.classList.add('color-blue')
      contactMessage.textContent = 'Message sent ✅'
      // remove message after 5 seconds
      setTimeout(()=>{
        contactMessage.textContent=''
      },5000)
    } ,(error)=>{
      alert('OOPS! SOMETHING HAS FAILED...' , error)
    })

    // to clear the input field 

    contactName.value=''
    contactEmail.value=''
    contactProject.value=''
  }
}

contactForm.addEventListener('submit' , sendEmail);


// THIS ALL CODE IS BEING COPY PASTED OF SCROLL SECTION 

// scroll selection active links :

const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
const scrollY = window.pageYOffset

sections.forEach(current =>{
const sectionHeight = current.offsetHeight,
sectionTop = current.offsetTop-58,
sectionId = current.getAttribute('id'),
sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
sectionsClass.classList.add('active-link')
}
else{
sectionsClass.classList.remove('active-link')
}
})
}
window.addEventListener('scroll', scrollActive)


// show scroll up 


const scrollUp = () => {
const scrollUp = document.getElementById('scroll-up')
// When the scroll is higher than 350 viewport height, add the show-scroll class t
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// light to dark theme changing : 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)?'ri-sun-line':'ri-moon-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark'? 'add': 'remove'] (darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line'? 'add': 'remove'] (iconTheme)
}
  // Activate / deactivate the theme manually with the button
  themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
  })

  // change background header 
  const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50? header.classList.add('bg-header')
    : header.classList.remove('bg-header')

  }

  window.addEventListener('scroll' , scrollHeader)


// scrollrevealanimation we have apply cdn already in html file: 
 
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset:true  // animation repeaat
})

sr.reveal(`.home__data` )
sr.reveal(`.home__info div` ,{delay:600 , origin: 'bottom' , interval: 100 })
sr.reveal(`.skills__content:nth-child(1) ,  .contact__content:nth-child(1)` ,{origin: 'left'})

sr.reveal(`.skills__content:nth-child(2) , .contact__content:nth-child(2)` ,{origin: 'right'})
sr.reveal(`.skills__content:nth-child(3) , .contact__content:nth-child(3)` ,{origin: 'left'})

sr.reveal(`.qualification__content , .services__card` ,{  interval: 100 })

sr.reveal(`.home__data , .projects__container , .footer__container` ,{delay:600 , origin: 'bottom' , interval: 100 })


