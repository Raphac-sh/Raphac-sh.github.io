let head = document.querySelector('.header');
let boxes = document.querySelectorAll('.text, .box-img');

document.addEventListener('scroll', (e) => {
  // Header Animation
  if (window.scrollY <= 350) {
    head.style.filter = 'opacity(100%)';
  } else {
    head.style.filter = 'opacity(0%)';
  }

  // Animation for every box
  for (elem of boxes) {
    let pos =
      elem.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight;

    if (window.scrollY >= pos) {
      elem.style.filter = 'opacity(100%)';
    } else {
      elem.style.filter = 'opacity(0%)';
    }
  }
});
