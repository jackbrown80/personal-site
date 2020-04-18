const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const aboutSection = document.querySelector('.about-wrapper');
const contactSection = document.querySelector('.contact-wrapper');
const navBar = document.querySelector('.nav-wrapper');
const aboutIntro = document.querySelector('.about-introduction');
const workSection = document.querySelector('.work-wrapper');
const circleNav = document.querySelector('.circle');

/* Function and eventlistener to handle nav and arrow click*/
let linkClicked = '';
function handleLinkClick(){
  if (this.classList.value === "circle"){
    linkClicked = 'Work';
  } else {
    linkClicked = this.innerHTML;
  }
  sections.forEach(section => { 
    if (section.dataset.key === linkClicked) {
      window.scrollTo(0, section.offsetTop - 50);
    }
  });
}

circleNav.addEventListener('click', handleLinkClick);
navLinks.forEach(navLink => navLink.addEventListener('click', handleLinkClick));

/* Function to typescript introduction*/
let i = 0;
const introText = 'Hi, I am Jack.';
const speed = 350;

const introArr = [...introText];
let message = [];

function typeWriter() {
  if (i < introArr.length + 1 ) {
    message.push(introArr[i]);
    document.querySelector('.about-title').innerHTML = message.join('');
    i++;
    setTimeout(typeWriter, speed);
  } 
}

window.onload = typeWriter();

/* Function and eventlisteners to change scroll bar width based on scroll*/
function setScrollBar(){
  console.log(scrollY);
  amountScrolled = this.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  
  const scrollPercentage = amountScrolled / height * 100;
  document.querySelector('.indicator-bar').style.width = `${scrollPercentage}%`; 

}

window.addEventListener('scroll', setScrollBar)
document.querySelector('.indicator-bar').style.width = '0px';