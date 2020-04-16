const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const navBar = document.querySelector('.nav-wrapper');

function handleLinkClick(){
  const linkClicked = this.innerHTML;
  if (linkClicked === 'Blog') {
    // do nothing
  } else {
    window.location.href = '/';
    scrollToPlace()
  }
}

console.log(navLinks);
navLinks.forEach(navLink => navLink.addEventListener('click', handleLinkClick));

/* function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.innerHeight
const blogCards = document.querySelectorAll('.blog-card');

function checkSlide(e) {
  blogCards.forEach(blogCard => {   

    const slideInAt = (window.scrollY + window.innerHeight) - blogCard.clientHeight / 4;
    const cardBottom = blogCard.offsetTop + blogCard.clientHeight;
    const isHalfShown = slideInAt > blogCard.offsetTop;
    const isNotScrolledPast = window.scrollY < cardBottom;
    if (isHalfShown && isNotScrolledPast) {
      blogCard.classList.add('active');
    } else {
      blogCard.classList.remove('active');
    }
    
  });
  
}

window.onload = checkSlide();
window.addEventListener('scroll', debounce(checkSlide)); */