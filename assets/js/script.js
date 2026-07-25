// const html = document.querySelector('html');
// html.style.display = 'none';

// window.addEventListener("DOMContentLoaded", ()=>{
//   document.querySelector('html').style.display = '';
// })

////////////////////////////////////////



let productCatalog = [];
let catalogLoadPromise = null;

async function loadCatalogData() {
  if (catalogLoadPromise) {
    return catalogLoadPromise;
  }

  catalogLoadPromise = (async () => {
    try {
      const response = await fetch('/assets/js/products.json');
      if (!response.ok) {
        throw new Error(`Failed to load catalog: ${response.status}`);
      }

      productCatalog = await response.json();
      window.productCatalog = productCatalog;
      document.dispatchEvent(new CustomEvent('catalogLoaded', { detail: productCatalog }));
      return productCatalog;
    } catch (error) {
      return [];
    }
  })();

  return catalogLoadPromise;
}

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




let kitchenGrid = document.querySelector('.shop_grid.shop_kitchen');
let bedroomGrid = document.querySelector('.shop_grid.shop_bedroom');
let livingroomGrid = document.querySelector('.shop_grid.shop_livingroom');
let generalShopGrid = document.querySelector('.shop_grid.shop_allRooms');
let carousel_track = document.querySelector('.carousel_track');

async function addProductToCart(product, quantity = 1, selectedColor = null) {
  if (!window.gearGridCart) {
    await initializeCart();
  }

  if (!window.gearGridCart || !product) return;

  const normalizedColor = selectedColor ?? product.color?.[0] ?? null;
  window.gearGridCart.addItem(product, quantity, normalizedColor);
}

const createCard = (param) => {
  const cardwrapper = document.createElement('div');
  cardwrapper.classList.add('card');
  cardwrapper.dataset.sku = param.SKU || '';
  const cardImg = document.createElement('div');
  cardImg.classList.add('card_img');
  const img = document.createElement('img');
  img.src = param.imgPath;
  img.alt = param.name;
  img.loading = 'lazy';
  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card_footer');
  cardFooter.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    const productToAdd = productCatalog.find((item) => item.SKU === param.SKU) || param;
    if (productToAdd) {
      addProductToCart(productToAdd, 1, productToAdd.color?.[0] || null);
    }
  });
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

  cardwrapper.addEventListener('click', (event) => {
    if (event.target.closest('.card_footer, .card_wishlist')) return;
    window.location.href = `/product.html?sku=${param.SKU}`;
  });

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
  landingPageProductCarouselScroll();
});



// landing Page Product Carousel
const landingPageProductCarouselScroll = () => {
  const productCarousel = document.querySelector('.carousel_track');
  const productArrows = document.querySelectorAll('.carousel_arrows');

  if (!productCarousel || !productArrows.length) return;

  const firstCarouselCard = document.querySelectorAll('.carousel_track .card')[1];
  if (!firstCarouselCard) return;

  const productMarginLeft = parseFloat(window.getComputedStyle(firstCarouselCard).marginLeft || '0');
  const firstProductWidth = firstCarouselCard.clientWidth + productMarginLeft;

  productArrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      if (arrow.id === 'carousel_arrows-left') {
        productCarousel.scrollLeft -= firstProductWidth;
      } else {
        productCarousel.scrollLeft += firstProductWidth;
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', landingPageProductCarouselScroll);


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


  productGrid.appendChild(productSlider)

  return productWrapper.outerHTML

}

// ============================================
// STAGE 1: URL SKU EXTRACTION
// ============================================

/**
 * Extracts the SKU query parameter from the URL
 * Example: /product.html?sku=12345 returns "12345"
 * @returns {string|null} The SKU value or null if not found
 */
function getProductSKUFromURL() {
  try {
    const params = new URLSearchParams(window.location.search);
    const sku = params.get('sku');

    if (!sku) {
      console.warn('[Stage 1] No SKU provided in URL');
      return null;
    }

    // Basic validation: SKU should not be empty string
    if (sku.trim() === '') {
      console.warn('[Stage 1] SKU is empty string');
      return null;
    }

    console.log('[Stage 1] SKU extracted from URL:', sku);
    return sku;

  } catch (error) {
    console.error('[Stage 1] Error extracting SKU from URL:', error);
    return null;
  }
}

/**
 * Displays a user-friendly error message when product is not found
 * Replaces product section content with error UI
 */
function showProductNotFoundError() {
  console.error('[Stage 1] Showing product not found error');

  const main = document.querySelector('main.main');
  const productSection = main?.querySelector('.product.wrapper');
  if (!productSection) {
    console.warn('[Stage 1] Product section not found in DOM');
    return;
  }

  productSection.innerHTML = `
    <div class="error_container" style="text-align: center; padding: 60px 20px;">
      <div style="max-width: 500px; margin: 0 auto;">
        <h2 style="font-size: 28px; margin-bottom: 16px; color: #333;">Product Not Found</h2>
        <p style="font-size: 16px; color: #666; margin-bottom: 32px;">
          Sorry, we couldn't find the product you're looking for. It may have been removed or the link might be incorrect.
        </p>
        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
          <a href="/shop.html" class="btn btn-black" style="text-decoration: none; display: inline-block;">
            <span>Back to Shop</span>
          </a>
          <a href="/index.html" class="btn btn-black" style="text-decoration: none; display: inline-block; background-color: #666;">
            <span>Go to Home</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

async function renderProductDetailsPage(products) {
  const main = document.querySelector('main.main');
  if (!main) return;

  const newsletter = main.querySelector('.newsletter');
  const existingProductSection = main.querySelector('.product.wrapper');

  if (existingProductSection) {
    existingProductSection.remove();
  }

  const sku = getProductSKUFromURL();
  const product = products.find((item) => item.SKU === sku);

  if (!product) {
    showProductNotFoundError();
    return;
  }

  const { createProductDetailsTemplate } = await import('./modules/products.js');
  const productSection = document.createElement('div');
  productSection.className = 'product wrapper';
  productSection.innerHTML = createProductDetailsTemplate(product);

  if (newsletter) {
    main.insertBefore(productSection, newsletter);
  } else {
    main.appendChild(productSection);
  }

  const addToCartButton = productSection.querySelector('.addToCart');
  if (addToCartButton) {
    addToCartButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const selectedColor = product.color?.[0] || null;
      const quantity = parseInt(document.querySelector('.counter_text')?.value || 1);
      addProductToCart(product, quantity, selectedColor);
    });
  }

  ProductTemplatePageMainSlider();
}
/**
 * Test Stage 1 functionality
 * Logs the extracted SKU and shows if it was successful
 */
function testStage1() {
  console.log('[Stage 1] Running Stage 1 tests...');

  const sku = getProductSKUFromURL();

  if (sku) {
    console.log('[Stage 1 TEST] SUCCESS: SKU extracted:', sku);
    console.log('[Stage 1 TEST] Ready for Stage 2: Product lookup');
  } else {
    console.log('[Stage 1 TEST] WARNING: No SKU found in URL');
    console.log('[Stage 1 TEST] Current URL:', window.location.href);
    console.log('[Stage 1 TEST] Expected format: /product.html?sku=YOUR_SKU_HERE');
  }
}

// Run Stage 1 tests on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Only run on product.html page
  if (document.querySelector('.product.wrapper')) {
    testStage1();
  }
});

let productPageRenderHandled = false;

async function initializeCart() {
  try {
    const { cart } = await import('/assets/js/modules/cart.js');
    window.gearGridCart = cart;
    cart.updateCartCount();
    return cart;
  } catch (error) {
    console.error('Could not initialize cart:', error);
    return null;
  }
}

initializeCart();

document.addEventListener('catalogLoaded', async (e) => {
  const products = e.detail;

  const isProductPage = window.location.pathname.includes('product.html') || window.location.pathname.endsWith('/product.html');
  if (isProductPage) {
    if (productPageRenderHandled) return;
    productPageRenderHandled = true;
    await renderProductDetailsPage(products);
    return;
  }
});