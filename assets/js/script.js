const headerBar = document.querySelector('.header_bar');
const headerBarClose = document.querySelector('.header_close');

headerBarClose.addEventListener('click', () =>{
  headerBar.remove()
})


//HERO SLIDER
const heroSlider = () => {
  const heroImgSlider = document.querySelector('.hero_slide');
  const heroArrows = document.querySelectorAll('.hero_arrow');
  
  if (!heroImgSlider || !heroArrows ) {
    return;
  }

  const firstHeroImg = document.querySelectorAll('.hero_slide img');

  if ( !firstHeroImg ) {
    return;
  }

  const firstHeroImgWidth = document.querySelectorAll('.hero_slide img')[0].clientWidth;

  if (heroImgSlider && heroArrows && firstHeroImgWidth) {
    heroArrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        if (arrow.id == "hero_arrow-left") {
          heroImgSlider.scrollLeft -= firstHeroImgWidth;
        } else {
          heroImgSlider.scrollLeft += firstHeroImgWidth;
        }
      });
    });
  } else {
    return;
  }
}

heroSlider()

// landing Page Product Carousel

const landingPageProductCarousel = () => {

  const productCarousel = document.querySelector('.carousel_track');
  const productArrows = document.querySelectorAll('.carousel_arrows');

  if( !productCarousel || !productArrows) return;

  firstCarouselCard = document.querySelectorAll('.carousel_track .card')[1];
  if(!firstCarouselCard) return ;

  let productMarginLeft = parseFloat(window.getComputedStyle(firstCarouselCard).marginLeft)
  let firstProductWidth = firstCarouselCard.clientWidth + productMarginLeft;

  productArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      if (arrow.id == "carousel_arrows-left") {
        productCarousel.scrollLeft -= firstProductWidth;
      } else {
        productCarousel.scrollLeft += firstProductWidth;
      }
    });
  });
}

landingPageProductCarousel()


// Product Template Page Main Slider 
const productTemplateTrack = document.querySelector('.product_track');
const productTemplateArrows = document.querySelectorAll('.product_arrow');
let firstProductSlideWidth = document.querySelectorAll('.product_track img');

console.log(firstProductSlideWidth)


productTemplateArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if(arrow.id == "product_arrow-left"){
      productTemplateTrack.scrollLeft -= firstProductSlideWidth;
    }else{
      productTemplateTrack.scrollLeft += firstProductSlideWidth;
    }
  });
});