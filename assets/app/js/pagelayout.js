let slideIndex = 1
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function nextSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let idx;
  if( document.querySelector('button').click == 'false') {
    setTimeout(showSlides(idx++), 200)
    console.log('timeout');
  } else {
    const sections = document.querySelectorAll('.carousel-slide');
    if( n > sections.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = sections.length;
    }
    sections.forEach(section =>{
       section.style.display ='none';
    });
    sections[slideIndex - 1].style.display = 'inherit';
  }
}


function handlePageNavTo() {
    let currentPageUrl = document.URL;
    console.log(currentPageUrl)
    let n = document.querySelectorAll('.carousel-slide');
    n.forEach(slide => currentPageUrl.includes(slide.id) ? currentSlide(Number(slide.dataset.index)) : console.log('boo'));
}
handlePageNavTo();