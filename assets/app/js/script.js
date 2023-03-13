function cardHover () {
  document.getElementById('cards').onmousemove = e => {
      for (const card of document.getElementsByClassName("card")) {
          const rect = 
              card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
      };
  }


  document.getElementById('cards').onmousemove = e => {
      for (const card of document.getElementsByClassName("card")) {
          const rect = 
              card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
      };
  }
}
cardHover();



/*
const slides = document.querySelectorAll(`[data-status]`);
let currentSlide = document.querySelector(`[data-status="active"]`);
let idx = currentSlide.dataset.index;
let nextSlide = slides.item(Number(idx));
//let prevSlide = slides.item((Number(idx) - 1));
let prevSlide;
const carousel = document.querySelector('.carousel-wrapper');
const handleUpClick = () =>{

    prevSlide = currentSlide.previousElementSibling;
    let testidx = currentSlide.dataset.index;
    if((idx < 1 || idx > 6) || (testidx < 1 || testidx > 6) || (currentSlide.previousElementSibling == null) ) {
        console.log('hey')
        console.log('me')
        //handle certain edge cases
        prevSlide = slides.item((Number(idx) + 4));
        idx = prevSlide.dataset.index;
        currentSlide.dataset.status = 'active';
        currentSlide = slides.item((Number(idx) - 1));
        //currentSlide.dataset.status = 'active';
        //currentSlide.nextElementSibling.dataset.status = 'inactive'
        console.log(currentSlide)
        
        console.log(prevSlide);
        let changeToSlide  = prevSlide;
        currentSlide = changeToSlide;
        //currentSlide.dataset.status = 'active';
        //slides.item(0).dataset.status = 'inactive';
        //let changeStatus = currentSlide.nextElementSibling.dataset.status = 'inactive';
        //let b = document.querySelector(`[data-status=${slides.item((Number(resetidx))).dataset.status ='active'}]`).dataset.status = 'inactive';
      console.log("finished")
        //currentSlide.dataset.status = "inactive";
        //nextSlide.dataset.status = "active";
        
    }else{
        currentSlide.dataset.status = "inactive";
        //prevSlide.dataset.status = "active";

        prevSlide = currentSlide.previousElementSibling;
        const amountToMove = prevSlide.style.bottom;
        currentSlide = prevSlide;
        currentSlide.dataset.status = "active";
        //console.log(currentSlide);
        //console.log(prevSlide);
        const carouselHeight = document.querySelector('.carousel-wrapper').getBoundingClientRect().height;
        console.log(carousel.offsetHeight);

        const rect = currentSlide.getBoundingClientRect(),
            height = rect.height,
            y = rect.y;
            //console.log(height);
            currentSlide.style.setProperty('--height', `${(carousel.offsetHeight)}px`);
            currentSlide.style.setProperty('--y-coord',`${((((carousel.offsetHeight) + (carouselHeight) / height) / (height - y) *  y) * -1)}px`)
            console.log(((((carousel.offsetHeight * y) + (carouselHeight * y) / height) * (height * y) + y) * -1) + " px")
        idx = currentSlide.dataset.index;
        //currentSlide.style.transform= `translateX(0%) translateY(calc(0% - ${Math.max(height,y) * 7}))`;
        console.log(idx);
        
        //prevSlide = slides.item((Number(idx) - 1));
        //console.log(prevSlide);
    }
}

const handleDownClick = () => {
    let testidx = nextSlide.dataset.index;
    if((idx < 1 || idx > 6) || (testidx < 1 || testidx > 6) ) {
        let resetidx = 1;
        idx = nextSlide.dataset.index = `${resetidx + 1}`;
        nextslide = slides.item((Number(resetidx))).dataset.status ='active';
        document.querySelector(`[data-status=${slides.item((Number(resetidx))).dataset.status ='active'}]`)
        console.log(document.querySelector(`[data-status=${slides.item((Number(resetidx))).dataset.status ='active'}]`));
        //currentSlide.dataset.status = "inactive";
        //nextSlide.dataset.status = "active";
        nextSlide = slides.item((Number(idx)));
    }else{
        currentSlide.dataset.status = "inactive";
        nextSlide.dataset.status = "active";

        currentSlide = nextSlide;
        //console.log(currentSlide);
        //console.log(nextSlide);
        const rect = currentSlide.getBoundingClientRect(),
            height = rect.height,
            y = rect.y;
            //console.log(height);
            currentSlide.style.setProperty('--height', `${height}px`);
            currentSlide.style.setProperty('--y-coord',`${y}px`)
        idx = currentSlide.dataset.index;
        nextSlide = slides.item((Number(idx)));
        console.log(idx)
    }
    


/*
  for (const slide of slides) {
    const rect = slide.getBoundingClientRect(),
      y = rect.height;
    slide.style.setProperty("--offset", `${y}px`);
  }
};
*/

//window.window.onload(handleDownClick());
/*function updateSlide(){
    let currentSlide = document.querySelector(`[data-status="active"]`);
    let slideIndex = currentSlide.dataset.index;
    document.querySelector('#upbutton').addEventListener('click', handleUpClick(slideIndex));
    document.querySelector('#downbutton').addEventListener('click', handleUpClick(slideIndex));
}
const slides = document.querySelectorAll(`[data-status]`);
const handleDownClick = (currentSlide, idx, nextSlide) => {
    idx = document.querySelector(`[data-status="active"]`).dataset.index;
    //console.log(Number(idx));
    //console.log(typeof idx);
    //console.log(document.querySelector(`[data-status="active"]`).dataset.index) 
    currentSlide = slides.item(idx - 1);
    //prevSlide = slides.item(((Number(currentSlide.dataset.index) - 1)+1));
    nextSlide = slides.item(((Number(currentSlide.dataset.index) + 1)-1));
    //console.log(prevSlide);
    //console.log(Number(currentSlide.dataset.index) + 1);
    document.getElementsByTagName('main');
    console.log(nextSlide);
    currentSlide.dataset.status="inactive";
    console.log("hello");
    console.log(currentSlide);
    for(const slide of slides  ){
        const rect = slide.getBoundingClientRect(),
            y = rect.height;
        slide.style.setProperty("--offset", `${y}px`);
    }    
    
    nextSlide.dataset.status="active";
    

}*/
/*
let activeIndex = 1;

const slides = document.querySelectorAll(`[data-status]`);
//console.log(slides)
const handleUpClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex - 1}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
        
  currentSlide.dataset.status = "after";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  console.log(currentSlide);
  console.log(nextSlide);
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
    console.log(`might be after ${nextSlide}`);
    console.log(nextSlide)
  });
}

const handleDownClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  

        
  currentSlide.dataset.status = "before";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  console.log(currentSlide);
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
    console.log(nextSlide);
  });
}

/* -- Mobile Nav Toggle -- 

const nav = document.querySelector("nav");

const handleNavToggle = () => {  
  nav.dataset.transitionable = "true";
  
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};
*/
