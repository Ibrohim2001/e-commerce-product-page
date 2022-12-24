const cartBtn = document.querySelector('.cart_btn');
const cartModal = document.querySelector('.cart_container');
const menuBtn = document.querySelector('.menu_btn');
const navMenu = document.querySelector('.nav_menu');
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImg = document.querySelector('.main_img img');
const slides = document.querySelectorAll('.slide_thumbnail');
const thumbnail = [...thumbnails];
const slide = [...slides];
const images = [];
const carouselContainer = document.querySelector('.slides');
const carousel = document.querySelectorAll('.slide'); 
const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');
const closeBtn = document.querySelector('.close_slide');
const slider = document.querySelector('.slider');

mainImg.addEventListener('click', () => {
  slider.classList.add('open')
})
closeBtn.addEventListener('click', () => {
  if(slider.classList.contains('open')) slider.classList.remove('open')
})


let currentSlide = 0;
let lastSlide = carousel.length - 1;

carousel.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

nextBtn.addEventListener('click', () => {
  currentSlide === lastSlide ? currentSlide = 0 : currentSlide++;
  carousel.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
});
prevBtn.addEventListener('click', () => {
  currentSlide === 0 ? currentSlide = lastSlide : currentSlide--;
  
  carousel.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
});

const slideImage = [...carousel];
menuBtn.addEventListener('click', () => removeClasses(navMenu));

cartBtn.addEventListener('click', () => removeClasses(cartModal));

function removeClasses(item) {
  if(item.classList.contains('open')) {
    item.classList.remove('open');
  } else {
    item.classList.add('open');
  }
}

for(let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener("click", function() {
  const current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  const srcAtt = thumbnail[i].getElementsByTagName('img')[0].getAttribute('src');
  mainImg.setAttribute('src', srcAtt);
  });
}

for(let i = 0; i < slide.length; i++) {
  slide[i].addEventListener("click", function() {
  const current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  const srcAtt = slide[i].getElementsByTagName('img')[0].getAttribute('src');
  slideImage[currentSlide].getElementsByTagName('img')[0].setAttribute('src', srcAtt);
  });
}

window.addEventListener('click', (e) => {
  if(!cartModal.contains(e.target) && (!cartBtn.contains(e.target))) {
    cartModal.classList.remove('open');
  }
});