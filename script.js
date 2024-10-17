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

//   .nav{
//   display: flex;
//   align-items: center;
//   justify-content:space-between ;
//   background-color: var(--body-color);
//   box-shadow: 0 4px 20px hsla(207, 24%, 35% , .1);
//   height: calc(var(--header-height) + .5rem);
//   padding-inline: 1.5rem;
//   border-radius: 3rem;
//   /* for dark mode animation */
//   transition: background .4s;  
  

// }
// .nav__logo , .nav__toggle , .nav__close
// {
//   color: var(--title-color);
// }
// .nav__logo
// {
//   font-family: var(--title-font);
//   font-weight: var(--font-medium);

// }
// .nav__toggle 
// {
//   display: flex;
//    font-size: 1.25rem;
//    cursor: pointer;
// }


// @media screen and (max-width: 1023px)
// {
//        .nav__menu
//        {
//         position: fixed;
//         width: 88%;
//         left: 0;
//         right: 0;
//         margin: 0 auto;
//         /* becoz of this bottom we are getting are navmenu on navbar */
//         /* but this is used in js so when we click on it the navbar will show  */
//         /* bottom: 2rem; */   
//         /* but when we write this are menu got hidden  */
//         bottom: -60%;
//         background-color: var(--body-color);
//         border-radius: 2rem;
//         padding: 2rem 1.5rem 5rem ;
//         box-shadow: 0 4px 20px hsla(207, 24%, 35% , .1);
//         transition: bottom .3s;
//        }
      
//       }
//       .nav__list 
//       {
//         grid-template-columns: repeat(3 ,max-content);
//         justify-content: center;
//         gap: 2rem 3rem;
//       }
// .nav__link
// {
//   display: flex;
//   flex-direction: column;
//   row-gap:  0.5rem;
//   justify-content: center;
//   align-items: center;
//   color: var(--text-color-light);
//   transition: color .3s;
//   font-size: var(--smaller-font-size);
// }
// .nav__link:hover
// {
//   color: var(--title-color);
// }
// .nav__link i
// {
//    font-size: 1.25rem;
// }
// /* becoz of this bottom we are getting are navmenu on navbar */
//         /* but this is used in js so when we click on it the navbar will show  */
//         /* bottom: 2rem; */ 
// .nav__close
// {
//   /* becoz of position absolute only we get aur close at bottom  */
//   position: absolute;
//   right: 1.25rem;
//   bottom: .7rem;
//   font-size: 1.25rem;
//    cursor: pointer;
// }
// .show-menu
// {
//   bottom: 2rem;
// }
// /* active links  */

// .active-link
// {
//   color: var(--title-color);
// }




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




// .home__container  
// {
//   /* becoz by default it is already row direction */
//    row-gap: 3rem;
//    padding-top: 2rem;
// }

// .home__data
// {
//   row-gap: 2rem;

// }
// .home__title
// {



//    text-align: center;
  
   
//    font-size: var(--biggest-font-size);
  
   
//    letter-spacing: .3px;

   
//    margin-bottom: .5rem;

  

   
// }


// .home__blob
// {
 
//   height: 320px;
//   width: 220px;
//   position: relative;
//   background-color: var(--body-color);

//   border: 2px solid var(--text-color-light);
//  /* if we had given then image border will be in center but file img will not */

//   justify-self: center;
//  /* now to make file image in center we used placed items  */
//   place-items: center;
//   border-radius: 6.25rem;
//   /* for dark mode animation */
//   transition: background .4s;  
// }

// .home__perfil
// {
//   height: 290px;
//   width: 190px;
//   background: var(--gradient-color);
//   border-radius: 5.5rem;
//    overflow: hidden;
//    display: flex;
//    align-items: center;
//    justify-content: center;
// }

// /* now we have to add that waves image  */
// .home__shape-wawes ,
// .home__shape-circle
// {
//      /* becoz of position absolute the waves and circle will come at top of our file images   */

//      position: absolute;
//      opacity: .1;
// }

// .home__shape-wawes
// {
//   top: 5rem;
//   left: -1.5rem;
//   width: 50px;
// }
// .home__shape-circle
// {
 
//   bottom: -2rem;
//   right: -3rem;
//   width: 150px;  
//   transform: rotate(15deg);
//   /* the circle image will go back of file image */
//   z-index: -1;
// }

// .home__social
// {
//   justify-self: center;
//    display: flex;
//    column-gap: 1.24rem;
// }
// .home__social-link
// {
//   font-size: 1.25rem;
//   color: var(--text-color-light);
//   transition: color .3s;
// }
// .home__social-link:hover
// {
//   color: var(--title-color);
// }

// .home__info
// {
//   display: grid;
//   row-gap: 1rem;

// }
// .home__info-title{
//   font-family: var(--body-font);
//   font-size: var(--small-font-size);
//   font-weight: 400;
//   color: var(--text-color-light);
//   margin-bottom: .5rem;
// }
// .home__info-description ,
//  .home__info-number
// {
//     font-family: var(--body-font);
//     color: var(--title-color);

// }

// .home__info-description
// {
//    padding-right: 4rem;
// }
// .home__info-description a {
//   font-size: 1rem;
//   color: blue;
//   transition: transform .3s;
// }

// .home__info-description a:hover {
//   transform: translateY(.25rem);
//   color: rgb(79, 79, 222)
// }

// .home__info-number
// {
//   font-size: var(--h1-font-size);
//   font-weight: var(--font-semi-bold);
// }

// .skills__container
// {
//    row-gap: 3.5rem;
// }

// .skill__section
// {
//  margin-top: 2rem;
// }

 
// .skills__title
// {

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   column-gap: .5rem;
//   font-size: var(--small-font-size);
//   font-weight: var(--font-semi-bold);
//   margin-bottom: 2.5rem;
// }
// .skills__title i
// {
//   font-size: 1rem;
//   font-weight: initial;
// }


// .skills__info ,
// .skills__blob,
// .skills__data
// {

//   display: grid;
  
   
// }
// .skills__info 
// {
//    grid-template-columns: repeat(3, 1fr);
//    gap: 2.5rem 2rem;
// }
// .skills__blob
// {
//    height: 100px;
//    width: 80px;
//    background-color: var(--container-color);
//   /* display: flex; */
//   /* align-items: center;
//   justify-content: center;
//   border-radius: 40%; */
//   border-radius: 3rem;
//   place-items: center;
//   margin-bottom: 1rem;
// /* for dark mode animation */
// transition: background .4s;  
// }

// .skills__blob img
// {

//   width: 50px;
// }

// .skills__data
// {
//   justify-content: center;
//   text-align: center;
// }

// .skills__name
// {
//   font-size: var(--smaller-font-size);
//   margin-bottom: .25rem;
// }
// .skills__subtitle
// {
//   font-size: var(--tiny-font-size);

//   color: var(--text-color-light);
// }

// .skills__blob:hover img
// {
//   animation: bounce-skills .6s;
// }
// @keyframes bounce-skills
// {
//    0%
//    {
//       transform: translate(0);
//    }
//    20%
//    {
//     transform: translateY(-6px);
//    }
//    40%
//    {
//     transform: translate(0);
//    }
//    60%
//    {
//     transform: translateY(-3px);
//    }
//    80%
//    {
//     transform: translate(0);
//    }

// }



// <section class="home__section" id="home">
         
// <!-- container grid  section__border is also a class in which we have provided different styling .   -->
// <div class="home__container container grid  section__border">
   
//    <div class="home__data grid">
        
//        <h1 class="home__title">
         
//            Hi, I'm Nazil<br>

//           Frontend Developer , currently learning Backend .<br>
          


//        </h1>

//            <div class="home__blob grid">

//                <div class="home__perfil" >
//                    <img src="images/file.png" alt="home perfil">
//                </div>
//                <img src="images/shape-wawes.svg" alt="" class="home__shape-wawes">
//                <img src="images/shape-circle.svg" alt="" class="home__shape-circle">
//            </div>

//                   <ul class="home__social">


//                    <a href="https://www.linkedin.com/in/nazil-sheikh-21985a267"  target="_blank"   class="footer__social-link" >
//                        <i class="ri-linkedin-box-line"></i>
//                    </a> 
//                    <a href="https://leetcode.com/u/nazilsheikh84/"  target="_blank" class="footer__social-link">
//                        <i class="ri-code-s-slash-line"></i>
//                    </a>

                
//                     <a href="https://github.com/NazilSheikh"  target="_blank" class="footer__social-link">
//                        <i class="ri-github-line"></i>
//                    </a>

                       
                      


//                    </ul>
//                    <a href="https://drive.google.com/file/d/1pkgAfEoiXv08K033gdyYWvHZLCzW-ws3/view?usp=drivesdk" class="resume__button">
//                        resume <i class="ri-download-2-line"></i>
//                      </a>
               
//    </div>

//    <!-- home info 1 -->

//    <div class="home__info">
         
//        <div>
//            <h3 class="home__info-title">
//               BIOGRAPHY
//            </h3>


//            <p class="home__info-description">
//                 I'm diving deep into the <b style="color: brown;">MERN Stack</b>, gaining hands-on experience with MongoDB, Express.js, React, and Node.js to build dynamic and responsive web applications. My passion for coding is equally reflected in problem-solving, having solved over 230+ questions on
//                <b style="color: brown">LeetCode</b>
//                 <a href="https://leetcode.com/u/nazilsheikh84/"  target="_blank" >
//                    click here <i class="ri-arrow-right-up-line"></i>
//                </a>  and recently earning the prestigious "100 Days LeetCode" badge.

//                 I'm always eager to learn and explore new technologies, and I thrive on applying innovative solutions to real-world challenges in the tech industry.
//                </p>
//        </div>

//        <div>
//            <h3 class="home__info-title">
//               CONTACT
//            </h3>

//            <p class="home__info-description">
//                 nazilsheikh653@gmail.com<br>
//                 +91 9827740653<br>
//            </p>
//        </div>

//        <div>
//            <h3 class="home__info-title">
//                 SERVICES
//            </h3>

//            <p class="home__info-description">
//                Responsive Web Design<br>
//                Interactive Elements & Animations<br>
//                Website Optimization and Performance<br>
//                Version Control & Collaboration<br>

//            </p>

//        </div>





       

//    </div>
    

//    <!-- home info2  -->
    

//    <div class="home__info">
//        <div>
//            <h3 class="home__info-title">
//            YEARS OF EXPERIENCE
//            </h3>

//            <p class="home__info-number">
//              01
//            </p>


//        </div>


//        <div>
//            <h3 class="home__info-title">
//                  COMPLETED PROJECTS
//            </h3>

//            <p class="home__info-number">
//                    10+
//            </p>
//        </div>



//        <!-- <div>
//            <h3 class="home__info-title">
//                    COMPANIES WORKED
//            </h3>

//            <p class="home__info-number">
//                      0
//            </p>

//        </div> -->







//    </div>
// </div>










// </section>




// <section class="skill__section" id="skill">
  
// <!-- becoz we globally declare that section title will make text in center  -->
// <h1 class="section__title">Skills</h1>
// <span class="section__subtitle"> My favorite Skills</span>

// <div class="skills__container container grid section__border">
   

//    <!-- skills SECTION A  -->
//    <div class="skills__content">
//        <h3 class="skills__title">
//            <i class="ri-braces-line"></i> Frontend 
//        </h3>


//     <!-- skills1 -->
      
//     <div class="skills__info">
//        <div class="skills__data">
//            <div class="skills__blob">
//                <img src="images/css-3.svg" alt="skills image">
//            </div>
//            <h3 class="skills__name">
//                   CSS
//            </h3>

//            <span class="skills__subtitle">
//                Intermediate
//            </span>

//        </div>
       
//        <!-- skills2 -->
//        <div class="skills__data">
//            <div class="skills__blob">
//                <img src="images/html-1.svg" alt="skills image">
//            </div>
//            <h3 class="skills__name">
//              HTML
//            </h3>

//            <span class="skills__subtitle">
//                Intermediate
//            </span>

//        </div>
       

//     <!-- skills3 -->
    
//        <div class="skills__data">
//            <div class="skills__blob">
//                <img src="images/logo-javascript.svg" alt="skills image">
//            </div>
//            <h3 class="skills__name">
//                Javascript
//            </h3>
           
//            <span class="skills__subtitle">
//                Intermediate
               
//            </span>
           
//        </div>
       
       
//        <!-- skills4 -->
       
//        <div class="skills__data">
//            <div class="skills__blob">
//                <img src="images/react-2.svg" alt="skills image">
//            </div>
//            <h3 class="skills__name">
//                React

//            </h3>
           
//            <span class="skills__subtitle">
//                Intermediate
//            </span>
           
//        </div>


//        <!-- skills5 -->

//        <div class="skills__data">
//            <div class="skills__blob">
//                <img src="images/github-icon-1-logo-svgrepo-com.svg" alt="skills image">
//            </div>
//            <h3 class="skills__name">
//              Github
//            </h3>

//            <span class="skills__subtitle">
//                Intermediate
//            </span>

//        </div>

//        <div class="skills__data">
//            <div class="skills__blob">
//                <img src="images/git-icon.svg" alt="skills image">
//            </div>
//            <h3 class="skills__name">
//              Git
//            </h3>

//            <span class="skills__subtitle">
//                Intermediate
//            </span>

//        </div>
       
//        <div class="skills__data">
//            <div class="skills__blob">
//                <img src="images/tailwind-css-icon.svg" alt="skills image">
//            </div>
//            <h3 class="skills__name">
//             Tailwind 
//            </h3>

//            <span class="skills__subtitle">
//                Intermediate
//            </span>

//        </div>

       

//        </div>

//    </div>



//    <!-- SKILLS SECTION B -->


//    <div class="skills__content">
//        <h3 class="skills__title">
//            <i class="ri-pantone-line"></i> Backend
//        </h3>


//     <!-- skills1 -->
      
//     <div class="skills__info">
//        <div class="skills__data">
//            <div class="skills__blob">
//                <img src="images/mongodb-icon.svg" alt="skills image">
//            </div>
//            <h3 class="skills__name">
//                   MongoDb
//            </h3>

//            <span class="skills__subtitle">
//                Basic
//            </span>

//        </div>
       
//        <!-- skills2 -->
//        <div class="skills__data">
//            <div class="skills__blob">
//                <img src="images/node-js.svg" alt="skills image">
//            </div>
//            <h3 class="skills__name">
//              NodeJs
//            </h3>

//            <span class="skills__subtitle">
//                Basic
//            </span>

//        </div>
       

//     <!-- skills3 -->
    
//        <div class="skills__data">
//            <div class="skills__blob">
//                <img src="images/ExpressJS.webp" alt="skills image">
//            </div>
//            <h3 class="skills__name">
//                ExpressJs
//            </h3>
           
//            <span class="skills__subtitle">
//                Basic
               
//            </span>
           
//        </div>
       
       
       
//        </div>

//    </div>


//    <div class="skills__content">
//        <h3 class="skills__title">
//            <i class="ri-speak-line"></i>Coding Languages
//        </h3>


//     <!-- skills1 -->
      
//     <div class="skills__info">
//        <div class="skills__data">
//            <div class="skills__blob">
//                <img src="images/c.svg" alt="skills image">
//            </div>
//            <h3 class="skills__name">
//                   C++
//            </h3>

//            <span class="skills__subtitle">
//               Advanced
//            </span>

//        </div>
       
//        <!-- skills2 -->
//        <div class="skills__data">
//            <div class="skills__blob">
//                <img src="images/java-4.svg" alt="skills image">
//            </div>
//            <h3 class="skills__name">
//              Java
//            </h3>

//            <span class="skills__subtitle">
//                Intermediate
//            </span>

//        </div>
       

//     <!-- skills3 -->
    
//        <div class="skills__data">
//            <div class="skills__blob">
//                <img src="images/c-1.svg" alt="skills image">
//            </div>
//            <h3 class="skills__name">
//              C
//            </h3>
           
//            <span class="skills__subtitle">
               
//                Intermediate
//            </span>
           
//        </div>
       
       
       
//        </div>

//    </div>





//    </div>
   
// </section>
