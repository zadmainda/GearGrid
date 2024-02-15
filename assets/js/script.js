const headerBar = document.querySelector('.header_bar');
const headerBarClose = document.querySelector('.header_close');

headerBarClose.addEventListener('click', () =>{
  headerBar.remove()
})


//HERO SLIDER

const heroImgSlider = document.querySelector('.hero_slide');
const heroArrows = document.querySelectorAll('.hero_arrow');
let firstHeroImgWidth = document.querySelectorAll('.hero_slide img')[0].clientWidth;


heroArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if(arrow.id == "hero_arrow-left"){
      heroImgSlider.scrollLeft -= firstHeroImgWidth;
    }else{
      heroImgSlider.scrollLeft += firstHeroImgWidth;
    }
  });
});

// Product Carousel
const productCarousel = document.querySelector('.carousel_track');
const productArrows = document.querySelectorAll('.carousel_arrows');
let productMarginLeft = parseFloat(window.getComputedStyle(document.querySelectorAll('.carousel_track .card')[1]).marginLeft)
let firstProductWidth = document.querySelectorAll('.carousel_track .card')[0].clientWidth + productMarginLeft;


productArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if(arrow.id == "carousel_arrows-left"){
      productCarousel.scrollLeft -= firstProductWidth;
    }else{
      productCarousel.scrollLeft += firstProductWidth;
    }
  });
});