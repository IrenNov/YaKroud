const sliderList = document.querySelector('.stages__list');
const slides = document.querySelectorAll('.stages__item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dotsContainer = document.querySelector('.dots');
let currentSlide = 0;

const slideWidth = 375; 
const totalVisibleSlides = 5; 
const totalSlides = Math.min(slides.length, totalVisibleSlides); 


function updateSliderPosition() {
    
  sliderList.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  updateActiveDot();
}


function updateActiveDot() {
  document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
  document.querySelector(`.dot[data-slide="${currentSlide}"]`).classList.add('active');
}


for (let i = 0; i < totalVisibleSlides; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.setAttribute('data-slide', i);
  dotsContainer.appendChild(dot);
}


nextButton.addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSliderPosition();
  }
  
  
  nextButton.disabled = currentSlide === totalSlides - 1;
  prevButton.disabled = false; 
});

prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSliderPosition();
  }
  
  
  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = false; 
});


prevButton.disabled = true; 
nextButton.disabled = false; 


function resetSliderStyles() {
  sliderList.style.width = 'auto'; 
  sliderList.style.transform = 'none'; 
  currentSlide = 0; 
  updateActiveDot(); 
  prevButton.style.display = 'none'; 
  nextButton.style.display = 'none'; 
}


function initSlider() {
  sliderList.style.width = `${slideWidth * totalVisibleSlides}px`; 
  prevButton.style.display = ''; 
  nextButton.style.display = ''; 
  updateSliderPosition(); 
}


function handleResize() {
  if (window.innerWidth > 375) {
    resetSliderStyles(); 
  } else {
    initSlider(); 
  }
}


document.addEventListener('DOMContentLoaded', handleResize);


window.addEventListener('resize', handleResize);
