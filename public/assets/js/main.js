/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));




/*==================== features SWIPER  ====================*/
let swiperfeatures = new Swiper('.features__container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*==================== tools ====================*/
let swipertools = new Swiper('.tools__container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints:{
    568:{
      slidesPerView: 2,
    }
  },
    autoplay: 
    {
      delay: 2000,
    },
    // loop: true,
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
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

//form submisssion

      const butt = document.getElementById('formbutton')
      const mess = document.getElementById('form__message')
      const mname = document.getElementById('fname')
      const memail = document.getElementById('femail')
      const mmess = document.getElementById('fmessage')
      var content1 = document.getElementsByClassName('contact__input')
       content1[0].value="";       
       content1[1].value="";       
       content1[2].value=""; 
      console.log(mname,memail,mmess)
      console.log(butt)
      try 
      {
        butt.addEventListener('click',async(e)=>{
          e.preventDefault()
          mname.innerHTML="";
          memail.innerHTML="";
          mmess.innerHTML="";
          var content = document.getElementsByClassName('contact__input')
          if(content[0].value==null || content[0].value=="")
          {
             mname.style.color="var(--first-colr)";
             mname.innerHTML="Please enter the name";
             // mname.focus();
             return
          }
          if(content[1].value==null || content[1].value=="")
          {
             memail.style.color="var(--first-colr)";
             memail.innerHTML="Please enter your email";
             // memail.focus();
             return
          }
           var em = content[1].value;
           var illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/;
           var n1=em.indexOf("@");
           var n2=em.lastIndexOf(".");
           if(em.match(illegalChars))
           {
             memail.style.color="var(--first-colr)";
             memail.innerHTML="Invalid Email address<br>";
             // tf.eid.focus();
             return 
           }
           if(n1<1 || n2-n1<2)
           {
             memail.style.color="var(--first-colr)";
             memail.innerHTML="Invalid Email address<br>";
             // tf.eid.focus();
             return 
           }
          if(content[2].value==null || content[2].value=="")
          {
             mmess.style.color="var(--first-colr)";
             mmess.innerHTML="Please enter your message";
             // mmess.focus();
             return
          }
          console.log(content);
          const formData1 ={
          name:content[0].value,
          email:content[1].value,
          message:content[2].value
        }
          await  axios.post('/mail',formData1).then(res=>console.log(res)).catch(error=>console.log(error))
          mess.classList.add('active__message');   
          content[0].value=" ";       
          content[1].value=" ";       
          content[2].value=" ";       
        })
      } 
      catch (error) 
      {
         console.log(error);
      }

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.services__content, .home__content`, {
    interval: 200
})