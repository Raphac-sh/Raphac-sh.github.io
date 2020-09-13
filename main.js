document.addEventListener('scroll', (e) => {
  let arr = document.querySelector('.arrow-nav');
  let head = document.querySelector('.header');
  let boxImages = document.querySelectorAll('.box-img');

  if (window.scrollY <= 100) {
    arr.style.transform = 'scale(1)';
    return;
  }

  if (window.scrollY <= 400) {
    head.style.filter = 'opacity(100%)';
    for (img of boxImages) {
      img.style.filter = 'opacity(0%)';
    }
    return;
  }

  for (img of boxImages) {
    if (
      window.scrollY >=
      img.getBoundingClientRect().top + window.pageYOffset - window.innerHeight
    ) {
      img.style.filter = 'opacity(100%)';
    }
  }

  head.style.filter = 'opacity(0%)';
  arr.style.transform = 'scale(0)';
});
