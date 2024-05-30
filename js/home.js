const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimenstions = item.getBoundingClientRect();
  let containerWidth = containerDimenstions.width;

  nxtBtn[i].addEventListener('click',() => {
    item.scrollLeft += containerWidth;
})
  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})

// Landing Image
// document.addEventListener('click', function(){
//   const scrollButton = document.getElementById('landing');

//   scrollButton.addEventListener('click', function(){
//     const sectionToScrollTo = document.getElementById('landing-img');

//     sectionToScrollTo.scrollIntoView({behavior: 'smooth'});
//   })
// })

document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.getElementById("landing");

  // Show the button when the user scrolls down 20px from the top of the document
  window.onscroll = function() {scrollFunction()};

  // When the button is clicked, scroll to the top of the document
  scrollToTopBtn.addEventListener("click", function() {
    scrollToTop({ top: 0, behavior: 'smooth' });
  });

  function scrollToTop(options) {
    window.scrollTo(options);
  };
});

// Best Seller Button 
document.addEventListener('click', function(){
  const scrollButton = document.getElementById('link-best');

  scrollButton.addEventListener('click', function(){
    const sectionToScrollTo = document.getElementById('best-seller');

    sectionToScrollTo.scrollIntoView({behavior: 'smooth'});
  })
})

// Stone Button
document.addEventListener('click', function(){
  const scrollButton = document.getElementById('link');

  scrollButton.addEventListener('click', function(){
    const sectionToScrollTo = document.getElementById('stone-section');

    sectionToScrollTo.scrollIntoView({behavior: 'smooth'});
  })
})

const carousel = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-inner img');

let currentIndex = 0;
let direction = 1; // 1 for clockwise, -1 for anti-clockwise
const slideWidth = slides[0].clientWidth;

function nextSlide() {
  currentIndex = (currentIndex + direction) % slides.length;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * slideWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 3000);

// Change direction after every 3 cycles
setInterval(() => {
  direction *= -1;
}, 9000); // 3 cycles * 3 seconds per cycle
