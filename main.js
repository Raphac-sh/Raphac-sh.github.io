document.addEventListener('scroll', (e) => {
  let arr = document.querySelector('.arrow-nav');
  let head = document.querySelector('.header');
  let boxes = document.querySelectorAll('.text, .box-img');

  // Navigation arrow Animation
  if (window.scrollY <= 100) {
    arr.style.transform = 'scale(1)';
  } else {
    arr.style.transform = 'scale(0)';
  }

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
