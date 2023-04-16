// navbar 
const navbar = document.querySelector('#navbar');
// const navLink = document.querySelector("#link_1");
// const navlinks = document.querySelectorAll('.nav-link');

// add scroll event listener to window object
window.addEventListener('scroll', function () {
  // check the current scroll position
  const scrollPosition = window.scrollY;
  console.log(scrollPosition);
  // check if scroll position is greater than 100px
  if (scrollPosition > 100) {
    // add CSS class to navbar element
    navbar.classList.add('backgroundChange2', 'shadow');
    // navLink.classList.add('text_color')
    // navLink.classList.add('text_color');
  } else {
    // remove CSS class from navbar element
    navbar.classList.remove('backgroundChange2', 'shadow');
    // navLink.classList.remove('text_color');
    // navlinks.style.Color = 'white';
  }
});


// best seller img
