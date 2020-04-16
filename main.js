const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const aboutSection = document.querySelectorAll('.about-wrapper');
const navBar = document.querySelector('.nav-wrapper');
const aboutIntro = document.querySelector('.about-introduction');

function handleLinkClick(){
  const linkClicked = this.innerHTML;
  if (linkClicked === 'Blog') {
    window.location.href = '/blog.html';
  } else {
    sections.forEach(section => { 
      if (section.dataset.key === linkClicked) {
        window.scrollTo(0, section.offsetTop - navBar.offsetHeight);
      }
    });
  }
}

navLinks.forEach(navLink => navLink.addEventListener('click', handleLinkClick));
