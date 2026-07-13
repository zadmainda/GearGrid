// const html = document.querySelector('html');
// html.style.display = 'none';

// window.addEventListener("DOMContentLoaded", ()=>{
//   document.querySelector('html').style.display = '';
// })

////////////////////////////////////////

const header = document.querySelector('.header');
const main = document.querySelector('.main');


const headerObserver = new ResizeObserver((entries) => {

  let rect = entries[0].contentRect;
  let rectHeight = rect.height;
  main.style.marginTop = `${rectHeight}px`;


  const sideBarTop = () => {
    const sideBar = document.querySelector('.shop_sidebar');
    if (!sideBar) {
      return
    } else {
      sideBar.style.top = `${rectHeight}px`;
    }
  }
  sideBarTop();

})

headerObserver.observe(header)

const messageBar = () => {
  const headerBar = document.querySelector('.header_bar');
  const headerBarClose = document.querySelector('.header_close');

  if (!headerBar || !headerBarClose) return;

  headerBarClose.addEventListener('click', () => {
    headerBar.remove();
  });
}
messageBar()



//HERO SLIDER
const heroSlider = () => {
  const heroImgSlider = document.querySelector('.hero_slide');
  const heroArrows = document.querySelectorAll('.hero_arrow');

  if (!heroImgSlider || !heroArrows) return;

  const firstHeroImg = document.querySelectorAll('.hero_slide img');

  if (!firstHeroImg) return;

  const firstHeroImgWidth = document.querySelectorAll('.hero_slide img')[0].clientWidth;
  let scrollWidth = heroImgSlider.scrollWidth - heroImgSlider.clientWidth;

  const showHideIcons = () => {
    if (heroImgSlider.scrollLeft == 0) {
      heroArrows[0].style.display = "none";
    } else {
      heroArrows[0].style.display = "block";
    };
    if (heroImgSlider.scrollLeft == scrollWidth) {
      heroArrows[1].style.display = "none";
    } else {
      heroArrows[1].style.display = "block";
    }
  }

  if (heroImgSlider && heroArrows && firstHeroImgWidth) {
    heroArrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        if (arrow.id == "hero_arrow-left") {
          heroImgSlider.scrollLeft -= firstHeroImgWidth;
        } else {
          heroImgSlider.scrollLeft += firstHeroImgWidth;
        }
        showHideIcons();
      });
    });
  } else {
    return;
  }
}
heroSlider()




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



document.addEventListener("DOMContentLoaded", function () {
  let minusButtons = document.querySelectorAll('.counter_minus');
  let plusButtons = document.querySelectorAll('.counter_plus');

  minusButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      let input = this.parentNode.querySelector('input');
      let count = parseInt(input.value) - 1;
      count = count < 1 ? 1 : count;
      input.value = count;
      return false;
    });
  });

  plusButtons.forEach(function (button) {
    button.addEventListener('click', function () {
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

cartInputs.forEach(function (cardInput) {
  let types = ['text', 'email', 'tel']
  let inputLabel = cardInput.children[0].textContent
  let input = cardInput.children[1].setAttribute('placeholder', inputLabel)
})


const cartProductTemplateString = `
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


//SELECT OR UNSELECT ALL ROOM Filters

const allRoomsBoxesChecked = () => {
  let allRoomsChecked = document.querySelector('#allRooms')

  if (!allRoomsChecked) return

  allRoomsChecked.addEventListener('change', function () {
    const allRoomsCheckboxes = document.querySelectorAll('.room_field input')
    if (!allRoomsChecked) {
      return;
    } else if (allRoomsChecked.checked) {
      allRoomsCheckboxes.forEach(function (checkbox) {
        checkbox.checked = true;
      })

    } else {
      allRoomsCheckboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
    }
  })
}


allRoomsBoxesChecked()


//SELECT OR UNSELECT ALL CHECKBOX Filters

const allPriceBoxesChecked = () => {
  let allPricesChecked = document.querySelector('#allPrices')

  if (!allPricesChecked) return

  allPricesChecked.addEventListener('change', function () {
    const allPricesCheckboxes = document.querySelectorAll('.price_field input')
    if (!allPricesChecked) {
      return;
    } else if (allPricesChecked.checked) {
      allPricesCheckboxes.forEach(function (checkbox) {
        checkbox.checked = true;
      })

    } else {
      allPricesCheckboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
    }
  })
}

allPriceBoxesChecked()



const fieldSet = () => {
  const accountFieldSets = document.querySelectorAll('.account_fieldset');
  const accountFieldSetsLabels = document.querySelectorAll('.account_fieldset label');

  if (!accountFieldSets || !accountFieldSetsLabels) return

  accountFieldSets.forEach(function (accountFieldSet) {
    let FieldSetsLabel = accountFieldSet.children[0].textContent
    let input = accountFieldSet.children[1].setAttribute('placeholder', FieldSetsLabel)
  })


  cartInputs.forEach(function (cardInput) {
    let types = ['text', 'email', 'tel']

    let inputLabel = cardInput.children[0].textContent
    let input = cardInput.children[1].setAttribute('placeholder', inputLabel)
  })
}
fieldSet()


let productCatalog = [];

async function loadCatalogData() {
  try {
    const response = await fetch('/assets/js/products.json');
    if (!response.ok) {
      throw new Error(`Failed to load catalog: ${response.status}`);
    }

    productCatalog = await response.json();
    console.log('Catalog loaded successfully!', productCatalog);
    return productCatalog;
  } catch (error) {
    console.error('Could not load the product catalog:', error);
    return [];
  }
}

let kitchenGrid = document.querySelector('.shop_grid.shop_kitchen');
let bedroomGrid = document.querySelector('.shop_grid.shop_bedroom');
let livingroomGrid = document.querySelector('.shop_grid.shop_livingroom');
let generalShopGrid = document.querySelector('.shop_grid.shop_allRooms');
let carousel_track = document.querySelector('.carousel_track');


const createCard = (param) => {
  const cardwrapper = document.createElement('div');
  cardwrapper.classList.add('card');
  const cardImg = document.createElement('div');
  cardImg.classList.add('card_img');
  const img = document.createElement('img');
  img.src = param.imgPath;
  img.alt = param.name;
  img.loading = 'lazy';
  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card_footer');
  const span = document.createElement('span');
  span.textContent = 'Add to Cart';

  const cardRating = document.createElement('span');
  cardRating.classList.add('card_rating');

  paramRating = Math.round(param.rating);
  cardRatingInnerHTML = ''
  for (let i = 0; i < paramRating; i++) {
    cardRatingInnerHTML += ' &#9733; '
  }
  cardRating.innerHTML = cardRatingInnerHTML;
  cardRating.style.color = '#ff8b00';

  const cardTitle = document.createElement('span');
  cardTitle.classList.add('card_title');
  cardTitle.textContent = param.name;

  const priceWrapper = document.createElement('div');
  priceWrapper.classList.add('card_pricewrapper')

  const cardPrice = document.createElement('span');
  cardPrice.classList.add('card_price');
  cardPrice.textContent = '$' + param.price + '.99';

  const oldPrice = document.createElement('span');
  oldPrice.textContent = '$' + param.oldprice + '.00';
  if (param.oldprice) {
    oldPrice.classList.add('card_oldprice');
  } else {
    oldPrice.style.display = 'none';
  }

  const cardBanner = document.createElement('span');
  cardBanner.classList.add('card_banner');
  cardBanner.textContent = 'New';

  const cardDiscount = document.createElement('span');
  cardDiscount.textContent = param.discount + '%';
  if (param.discount) {
    cardDiscount.classList.add('card_discount');
  } else {
    cardDiscount.style.display = 'none';
  }

  const cardWishlist = document.createElement('span');
  cardWishlist.classList.add('card_wishlist');
  cardWishlist.innerHTML = '<i class="fa-regular fa-heart"></i>';

  cardwrapper.appendChild(cardImg)
  cardImg.appendChild(img)
  cardFooter.appendChild(span)
  cardImg.appendChild(cardFooter)
  cardwrapper.appendChild(cardRating)
  cardwrapper.appendChild(cardTitle)
  cardwrapper.appendChild(priceWrapper)
  priceWrapper.appendChild(cardPrice)
  priceWrapper.appendChild(oldPrice)
  cardwrapper.appendChild(cardBanner)
  cardwrapper.appendChild(cardDiscount)
  cardwrapper.appendChild(cardWishlist)

  return cardwrapper
}


const renderRoomProducts = (room, tag) => {

  room;

  if (!room) {
    return
  }

  

  //array of DIVs/Products cards that will render with HTML
  let productsToBeRendered = []

  //array of objects selected from the product Catalog
  let filteredProducts = [];
  if (tag != 'all') {
    productCatalog.forEach(product => {
      if (product.tags.includes(tag)) {
        filteredProducts.push(product)
      }
    })
  }
  else {
    filteredProducts = productCatalog;
  }

  filteredProducts.forEach((product) => {
    productsToBeRendered.push(createCard(product))
  })

  productsToBeRendered.forEach(card => {
    room.appendChild(card)
  })

}

//Product Tags
const kitchen = 'kitchen';
const bedroom = 'bedroom';
const living = 'living';
const all = 'all';
const newTag = 'new';

const renderCatalog = () => {
  if (kitchenGrid) renderRoomProducts(kitchenGrid, kitchen);
  if (bedroomGrid) renderRoomProducts(bedroomGrid, bedroom);
  if (livingroomGrid) renderRoomProducts(livingroomGrid, living);
  if (generalShopGrid) renderRoomProducts(generalShopGrid, all);
  if (carousel_track) renderRoomProducts(carousel_track, newTag);
};

loadCatalogData().then(() => {
  renderCatalog();
});

document.querySelectorAll('.carousel_track .card .card_footer').forEach(function (card) {
  card.addEventListener('click', function (e) {
    console.log(e.target.closest('.card').children[2].textContent)
  })
})


// landing Page Product Carousel
const landingPageProductCarouselScroll = () => {

  const productCarousel = document.querySelector('.carousel_track');
  const productArrows = document.querySelectorAll('.carousel_arrows');

  if (!productCarousel || !productArrows) return;

  firstCarouselCard = document.querySelectorAll('.carousel_track .card')[1];
  if (!firstCarouselCard) return;

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
document.addEventListener("DOMContentLoaded", landingPageProductCarouselScroll)


let productCards = document.querySelectorAll('.card')
let addToCartBtn = document.querySelectorAll('.card_footer')
addToCartBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.closest('.card').querySelector('.card_title').textContent)
  })
})


//cart Checkout Tabs
const checkOutTabsContainer = document.querySelector('.cart_tabs');
const checkOutTabs = document.querySelectorAll('.cart_tab');
const checkOutcartContent = document.querySelectorAll('.cart_content');

const cartTabs = () => {
  if (!checkOutTabs || !checkOutcartContent || !checkOutTabsContainer) {
    return
  } else {
    checkOutTabsContainer.addEventListener('click', e => {
      const clicked = e.target.closest('.cart_tab');
      if (!clicked) return;

      const clickedNum = clicked.querySelector('span').textContent;

      checkOutTabs.forEach(tab => {
        tab.classList.remove('cart_tab-active');
      })

      clicked.classList.add('cart_tab-active');

      checkOutcartContent.forEach(t => {
        t.classList.remove('cart_content-active');
      })

      cartContent = document.querySelector(`.cart_content-${clickedNum}`)
      cartContent.classList.add('cart_content-active');

    });
  }
}
cartTabs()




// Render Product's details in a single page


let productDetailsTemplateString = `
<section class="product wrapper">

<ul class="breadcrumps">
  <div class="pageheader_crumps">

    <a href="/index.html" class="pageheader_crump">Home</a>
    <i class="fa-solid fa-angle-right"></i>

    <a href="/shop.html" class="pageheader_crump">Shop</a>
    <i class="fa-solid fa-angle-right"></i>

    <a href="/shop/living-room.html" class="pageheader_crump">Living room</a>
    <i class="fa-solid fa-angle-right"></i>

    <a href="/product.html" class="pageheader_crump">Product</a>
  </div>
</ul>

<div class="product_grid"> 
  <div class="product_slider">
    <div class="product_slider-L">
      <div class="product_track">
        <img src="/assets/images/products/Living Room/black Tray table.png" alt="">
        <img src="/assets/images/products/Living Room/black Tray table.png" alt="">
        <img src="/assets/images/products/Living Room/black Tray table.png" alt="">
      </div>
      <i class="fa-solid fa-circle-arrow-left  product_arrow product_arrow-left" id="product_arrow-left"></i>
      <i class="fa-solid fa-circle-arrow-right product_arrow product_arrow-right" id="product_arrow-right"></i>
    </div>

    <div class="product_slider-S">
      <img src="/assets/images/products/Living Room/black Tray table-1.png" alt="">
      <img src="/assets/images/products/Living Room/black Tray table-2.png" alt="">
      <img src="/assets/images/products/Living Room/black Tray table-3.png" alt="">
    </div>
  </div>

  <div class="product_content">
    <div class="product_rating">
      <div class="product_stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <span class="product_reviewers">11 Reviewers</span>
    </div>
    <h3 class="product_title">
      Tray Table
    </h3>
    <p class="product_description">
      Buy one or buy a few and make every space wher you sit more convnient. Light and easy to move around with removable tray, top, handy for serving snacks.
    </p>

    <div class="product_prices">
      <span class="product_newprice">$199.00</span>
      <span class="product_oldprice">$400.00 </span>
    </div>
    <div class="product_countdown">
      <span>Offer expires in:</span>
      <div class="product_timer">
        <div class="product_num">
          <span>02</span>
          <span>Days</span>
        </div>
        <div class="product_num">
          <span>12</span>
          <span>Hours</span>
        </div>
        <div class="product_num">
          <span>45</span>
          <span>Minutes</span>
        </div>
        <div class="product_num">
          <span>09</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
    <div class="product_measurement">
      <span>Measurements</span>
      <span>17 1/2x20 5/8"</span>
    </div>
    <div class="product_options">
      <span>Choose color <i class="fa-solid fa-angle-right"></i> </span>
      <div class="product_colors">
        <div class="product_color product_color-1">
          <span class="product_option-title">Black</span>
          <img src="https://placehold.co/100x100/png" alt="">
        </div>
        <div class="product_color product_color-2">
          <span class="product_option-title">Red</span>
          <img src="https://placehold.co/100x100/png" alt="">
        </div>
        <div class="product_color product_color-3">
          <span class="product_option-title">Purple</span>
          <img src="https://placehold.co/100x100/png" alt="">
        </div>
        <div class="product_color product_color-4">
          <span class="product_option-title">Green</span>
          <img src="https://placehold.co/100x100/png" alt="">
        </div>
      </div>

    </div>
    <div class="product_count">
      <div class="counter">
        <span class="counter_minus"><i class="fa-solid fa-minus"></i></span>
        <input class="counter_text" type="text" value="1" />
        <span class="counter_plus"><i class="fa-solid fa-plus"></i></span>
      </div>
      <div class="product_wishlist">
        <i class="fa-regular fa-heart"></i>
        <span>wishlist</span>
      </div>
    </div>
    <div class="btn btn-black addToCart">
      <span>Add to Cart</span>
  </div>
    <div class="product_meta">
      <div class="product_sku">
        <span>SKU</span>
        <span>117</span>
      </div>
      <div class="product_category">
        <span>Living Room, </span>
        <span>Bedroom</span>
      </div>
    </div>
  </div>
</div>
<div class="product_info">
  <div class="product_infoTabs">
    <span class="product_infoTabs product_infoTabs-active" id="product_additionalInfo">Additional Info</span>
    <span class="product_infoTabs" id="product_questions">Questions</span>
    <span class="product_infoTabs" id="product_reviews">Reviews</span>
  </div>
  <div class="product_additionalInfo"></div>
  <div class="product_questions"></div>
  <div class="product_reviews">
    <h3>Customer Reviews</h3>
    <div class="reviews_summary">
      <span>&star; &star; &star; &star; &star;</span>
      <span>11 Reviews</span>
    </div>
    <form action="" method="post">
      <input type="text" placeholder="Your review...">
      <button class="btn btn-black"><span>write Review</span></button>
    </form>
    <div class="reviews_sortby">
      <span>11 Reviews</span>
      <select name="sort" id="sort">
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="Highest">Highest</option>
        <option value="Lowest">Lowest</option>
      </select>
    </div>
    <div class="reviews_container">
      <div class="reviews_card">
        <div class="reviews_customer">
          <div class="reviews_displayPhoto">
            <img src="https://placehold.co/100x100/png" alt="">
          </div>
          <div class="reviews_stars">
            <span class="reviews_name">Sofia Havertz</span>
            <span>&star; &star; &star;</span>
          </div>
        </div>
        <div class="reviews_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur corporis optio saepe officiis atque, dolor quis odio laboriosam error quia aliquid nesciunt beatae asperiores incidunt. At deserunt temporibus quidem unde, similique vero voluptatem tempore fuga.
        </div>
      </div>
      <div class="reviews_card">
        <div class="reviews_customer">
          <div class="reviews_displayPhoto">
            <img src="https://placehold.co/100x100/png" alt="">
          </div>
          <div class="reviews_stars">
            <span class="reviews_name">Sofia Havertz</span>
            <span>&star; &star; &star;</span>
          </div>

        </div>
        <div class="reviews_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur corporis optio saepe officiis atque, dolor quis odio laboriosam error quia aliquid nesciunt beatae asperiores incidunt. At deserunt temporibus quidem unde, similique vero voluptatem tempore fuga.
        </div>
      </div>
      <div class="reviews_card">
        <div class="reviews_customer">
          <div class="reviews_displayPhoto">
            <img src="https://placehold.co/100x100/png" alt="">
          </div>
          <div class="reviews_stars">
            <span class="reviews_name">Sofia Havertz</span>
            <span>&star; &star; &star;</span>
          </div>
        </div>
        <div class="reviews_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur corporis optio saepe officiis atque, dolor quis odio laboriosam error quia aliquid nesciunt beatae asperiores incidunt. At deserunt temporibus quidem unde, similique vero voluptatem tempore fuga.
        </div>
      </div>
      <div class="reviews_card">
        <div class="reviews_customer">
          <div class="reviews_displayPhoto">
            <img src="https://placehold.co/100x100/png" alt="">
          </div>
          <div class="reviews_stars">
            <span class="reviews_name">Sofia Havertz</span>
            <span>&star; &star; &star;</span>
          </div>
        </div>
        <div class="reviews_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur corporis optio saepe officiis atque, dolor quis odio laboriosam error quia aliquid nesciunt beatae asperiores incidunt. At deserunt temporibus quidem unde, similique vero voluptatem tempore fuga.
        </div>
      </div>
      <div class="reviews_card">
        <div class="reviews_customer">
          <div class="reviews_displayPhoto">
            <img src="https://placehold.co/100x100/png" alt="">
          </div>
          <div class="reviews_stars">
            <span class="reviews_name">Sofia Havertz</span>
            <span>&star; &star; &star;</span>
          </div>
        </div>
        <div class="reviews_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur corporis optio saepe officiis atque, dolor quis odio laboriosam error quia aliquid nesciunt beatae asperiores incidunt. At deserunt temporibus quidem unde, similique vero voluptatem tempore fuga.
        </div>
      </div>
      <div class="reviews_card">
        <div class="reviews_customer">
          <div class="reviews_displayPhoto">
            <img src="https://placehold.co/100x100/png" alt="">
          </div>
          <div class="reviews_stars">
            <span class="reviews_name">Sofia Havertz</span>
            <span>&star; &star; &star;</span>
          </div>
        </div>
        <div class="reviews_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur corporis optio saepe officiis atque, dolor quis odio laboriosam error quia aliquid nesciunt beatae asperiores incidunt. At deserunt temporibus quidem unde, similique vero voluptatem tempore fuga.
        </div>
      </div>
    </div>

  </div>
</div>
</section>

`


const createProductPage = (product) => {


  const productWrapper = document.createElement('section');
  productWrapper.classList.add('product');
  productWrapper.classList.add('wrapper');


  const productBreadCrumbsUL = document.createElement('ul');
  productBreadCrumbsUL.classList.add('breadCrumps');

  productWrapper.appendChild(productBreadCrumbsUL);


  const pageheaderCrumpsDiv = document.createElement('div');
  pageheaderCrumpsDiv.classList.add('pageheader_crumps');

  productBreadCrumbsUL.appendChild(pageheaderCrumpsDiv);

  const pageHeaderCrumpHome = document.createElement('a');
  pageHeaderCrumpHome.href = "/index.html";
  pageHeaderCrumpHome.textContent = "Home";
  pageHeaderCrumpHome.classList.add('pageheader_crump');

  pageheaderCrumpsDiv.appendChild(pageHeaderCrumpHome);


  const rightCaret = document.createElement('i');
  rightCaret.classList.add('fa-solid')
  rightCaret.classList.add('fa-angle-right');
  pageheaderCrumpsDiv.appendChild(rightCaret);

  const pageHeaderCrumpShop = document.createElement('a');
  pageHeaderCrumpShop.href = "/shop.html";
  pageHeaderCrumpShop.textContent = "Shop";
  pageHeaderCrumpShop.classList.add('pageheader_crump');

  pageheaderCrumpsDiv.appendChild(pageHeaderCrumpShop);

  pageheaderCrumpsDiv.appendChild(rightCaret);


  const pageHeaderTitle = document.createElement('a');
  pageHeaderTitle.href = "/shop.html";
  pageHeaderTitle.textContent = product.name;
  pageHeaderTitle.classList.add('pageheader_crump');

  pageheaderCrumpsDiv.appendChild(pageHeaderTitle);


  const productGrid = document.createElement('div');
  productGrid.classList.add('product_grid');
  productWrapper.appendChild(productGrid);


  const productSlider = document.createElement('div');
  productSlider.classList.add('product_slider');




  // productGrid.appendChild(productSlider)






  return productWrapper.outerHTML


}
//TEST PROGRESS
console.log(createProductPage(productCatalog[1]))

console.log(productCatalog)

for (const pro of productCatalog) {
  console.log(pro.name)
}