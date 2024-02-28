

////////////////////////////////////////

const messageBar = () => {
  const headerBar = document.querySelector('.header_bar');
  const headerBarClose = document.querySelector('.header_close');

  if(!headerBar || !headerBarClose) return;

  headerBarClose.addEventListener('click', () => {
    headerBar.remove()
  });
}
messageBar()



//HERO SLIDER
const heroSlider = () => {
  const heroImgSlider = document.querySelector('.hero_slide');
  const heroArrows = document.querySelectorAll('.hero_arrow');
  
  if (!heroImgSlider || !heroArrows ) return;

  const firstHeroImg = document.querySelectorAll('.hero_slide img');

  if ( !firstHeroImg ) return;
  
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
const ProductTemplatePageMainSlider = () => {
  const productTemplateTrack = document.querySelector('.product_track');
  const productTemplateArrows = document.querySelectorAll('.product_arrow');

  if (!productTemplateTrack || !productTemplateArrows) return;

  let firstProductSlideImg = document.querySelectorAll('.product_track img')[0];
  if (!firstProductSlideImg) return;

  let firstProductSlideImgWidth = firstProductSlideImg.clientWidth

  productTemplateArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      if (arrow.id == "product_arrow-left") {
        productTemplateTrack.scrollLeft -= firstProductSlideImgWidth;
      } else {
        productTemplateTrack.scrollLeft += firstProductSlideImgWidth;
      }
    });
  });
}
ProductTemplatePageMainSlider()



document.addEventListener("DOMContentLoaded", function() {
    let minusButtons = document.querySelectorAll('.counter_minus');
    let plusButtons = document.querySelectorAll('.counter_plus');
    
    minusButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let input = this.parentNode.querySelector('input');
            let count = parseInt(input.value) - 1;
            count = count < 1 ? 1 : count;
            input.value = count;
            return false;
        });
    });

    plusButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let input = this.parentNode.querySelector('input');
            input.value = parseInt(input.value) + 1;
            return false;
        });
    });
});



//Shopping cart


const cart = () => {
  const cartTable = document.querySelector('.cart_table');
  if (!cartTable) return
  let cartItemsCount = cartTable.childElementCount - 1;

}

cart()


const removeCartItems = () => {
  const removeCartItemBtns = document.querySelectorAll('.cart_remove')

  removeCartItemBtns.forEach(function (btn) {
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      const clicked = e.target.closest('.cart_remove');

      console.log(clicked.closest('.cart_row').remove());

    })
  })
}
removeCartItems()

// Subtotal
cartItemsSubtotal = 0  
cartItemsSubtotal = document.querySelectorAll('.cart_price')


const cartInputs = document.querySelectorAll('.checkout_field')

cartInputs.forEach(function(cardInput){
  let types = ['text', 'email', 'tel']
  let inputLabel = cardInput.children[0].textContent
  let input = cardInput.children[1].setAttribute('placeholder', inputLabel)
})


const productTemplateString = `
  <div class="cart_row">
    <div class="cart_description">
      <div class="cart_img">
        <img src="{{ product.imagePath }}" alt="{{ product.imgAlt }}">
      </div>
      <div class="cart_meta">
        <p class="cart_name">{{ product.name }}</p>
        <p class="cart_color">Color: <span>{{ product.color }}</span></p>
        <div class="counter">
          <span class="counter_minus"><i class="fa-solid fa-minus"></i></span>
          <input class="counter_text" type="text" value="1" />
          <span class="counter_plus"><i class="fa-solid fa-plus"></i></span>
        </div>
      </div>
    </div>
    <div class="cart_price">$<span> {{ product.price }}</span></div>
  </div>
`