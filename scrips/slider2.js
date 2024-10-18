const sliderList1 = document.querySelector('.persons__list');
const slides1 = document.querySelectorAll('.persons__item');
const prevButton1 = document.getElementById('pers_prev');
const nextButton1 = document.getElementById('pers_next');
const slideCounter1 = document.getElementById('counts');

let currentSlide1 = 0;
let slidesToShow1 = window.innerWidth <= 375 ? 1 : 3; 

const totalSlides1 = slides1.length; 


function updateSliderPosition1() {
  const slideWidth = slides1[0].offsetWidth; 
  sliderList1.style.transform = `translateX(-${currentSlide1 * slideWidth}px)`; 
  updateSlideCounter1(); 
}


function updateSlideCounter1() {
  if (window.innerWidth <= 375) {
    slideCounter1.textContent = `${currentSlide1 + 1}/${totalSlides1}`; 
  } else {
    const endSlide = Math.min(currentSlide1 + slidesToShow1, totalSlides1);
    slideCounter1.textContent = `${currentSlide1 + 1}-${endSlide}/${totalSlides1}`; 
  }
}


nextButton1.addEventListener('click', () => {
  if (currentSlide1 < totalSlides1 - slidesToShow1) {
    currentSlide1++;
    updateSliderPosition1();
  }

  nextButton1.disabled = currentSlide1 >= totalSlides1 - slidesToShow1;
  prevButton1.disabled = currentSlide1 === 0;
});

prevButton1.addEventListener('click', () => {
  if (currentSlide1 > 0) {
    currentSlide1--;
    updateSliderPosition1();
  }

  prevButton1.disabled = currentSlide1 === 0;
  nextButton1.disabled = currentSlide1 >= totalSlides1 - slidesToShow1;
});


window.addEventListener('resize', () => {
  slidesToShow1 = window.innerWidth <= 375 ? 1 : 3; 
  currentSlide1 = 0; 
  sliderList1.style.transform = 'none'; 
  updateSliderPosition1(); 
  prevButton1.disabled = true; 
  nextButton1.disabled = totalSlides1 <= slidesToShow1; 
});


function initSlider1() {
  prevButton1.disabled = true; 
  nextButton1.disabled = totalSlides1 <= slidesToShow1; 
  updateSliderPosition1(); 
}


initSlider1();
