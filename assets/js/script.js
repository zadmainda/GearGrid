const headerBar = document.querySelector('.header_bar');
const headerBarClose = document.querySelector('.header_close');

headerBarClose.addEventListener('click', () =>{
  headerBar.remove()
})

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
