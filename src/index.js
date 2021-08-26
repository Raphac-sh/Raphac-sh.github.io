let boxes = document.querySelectorAll('.text, .box-img');

document.addEventListener('scroll', () => {
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
