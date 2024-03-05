

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
const landingPageProductCarouselScroll = () => {

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
landingPageProductCarouselScroll()


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


const allPriceBoxesChecked = () => {
let allPricesChecked = document.querySelector('#all')

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
}})
}


allPriceBoxesChecked()



const fieldSet = () => {
  const accountFieldSets = document.querySelectorAll('.account_fieldset');
  const accountFieldSetsLabels = document.querySelectorAll('.account_fieldset label');

  if(!accountFieldSets || !accountFieldSetsLabels) return

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


const productCatalog = [
  {
    "name": "Bed Cabinet Combo",
    "SKU": "12321",
    "price": "1200",
    "oldprice": "1350",
    "imgUrl": "/assets/images/products/bedroom/bed cabinet combo.png",
    "discount": "50",
    "rating": 4,
    "color": ["red", "green", "blue"],
    "tags": ["living", "bedroom"],
    "available": true
  },
  {
    "name": "BedSide Lamp",
    "SKU": "23456",
    "price": "1800",
    "oldprice": "2000",
    "imgUrl": "/assets/images/products/bedroom/bedside-lamp.png",
    "discount": "15",
    "rating": 4.5,
    "color": ["brown", "beige", "gray"],
    "tags": ["bedroom"],
    "available": true
  },
  {
    "name": "Beige Bed",
    "SKU": "34567",
    "price": "900",
    "oldprice": "995",
    "imgUrl": "/assets/images/products/bedroom/beige-bed.png",
    "discount": "5",
    "rating": 4,
    "color": ["black", "white"],
    "tags": ["bedroom"],
    "available": true
  },
  {
    "name": "Dressing Table",
    "SKU": "45678",
    "price": "150",
    "oldprice": "200",
    "imgUrl": "/assets/images/products/bedroom/dressing table.png",
    "discount": "25",
    "rating": 3.5,
    "color": ["black", "gray"],
    "tags": ["bedroom"],
    "available": true
  },
  {
    "name": "Grey Bed",
    "SKU": "56789",
    "price": "300",
    "oldprice": "320",
    "imgUrl": "/assets/images/products/bedroom/grey-bed.png",
    "discount": "5",
    "rating": 4,
    "color": ["brown", "black"],
    "tags": ["living"],
    "available": true
  },
  {
    "name": "Khaki Bed",
    "SKU": "67890",
    "price": "1500",
    "oldprice": "1700",
    "imgUrl": "/assets/images/products/bedroom/khaki-bed.png",
    "discount": "8%",
    "rating": 4,
    "color": ["brown", "white"],
    "tags": ["bedroom"],
    "available": true
  },
  {
    "name": "Mahogany",
    "SKU": "78901",
    "price": "250",
    "oldprice": "260",
    "imgUrl": "/assets/images/products/bedroom/mahogany.png",
    "discount": "5",
    "rating": 4,
    "color": ["black", "white"],
    "tags": ["bedroom"],
    "available": true
  },
  {
    "name": "Red Bed",
    "SKU": "89012",
    "price": "400",
    "oldprice": "450",
    "imgUrl": "/assets/images/products/bedroom/red bed.png",
    "discount": "10%",
    "rating": 3.5,
    "color": ["black", "brown"],
    "tags": ["bedroom"],
    "available": true
  },
  {
    "name": "Vase",
    "SKU": "90123",
    "price": "50",
    "oldprice": "60",
    "imgUrl": "/assets/images/products/bedroom/vase.png",
    "discount": "20%",
    "rating": 5,
    "color": ["brown", "white"],
    "tags": ["bedroom"],
    "available": true
  },
  {
    "name": "Baby Bottle",
    "SKU": "01234",
    "price": "20",
    "oldprice": "30",
    "imgUrl": "/assets/images/products/kitchen/baby bottle.png",
    "discount": "3",
    "rating": 3.5,
    "color": ["black", "white"],
    "tags": ["Kitchen"],
    "available": true
  },
  {
    "name": "Bottle Opener",
    "SKU": "12345",
    "price": "2",
    "oldprice": "5",
    "imgUrl": "/assets/images/products/kitchen/bottle opener.png",
    "discount": "10",
    "rating": 3.5,
    "color": ["black", "white"],
    "tags": ["kitchen"],
    "available": true
  },
  {
    "name": "Cork",
    "SKU": "23456",
    "price": "2",
    "oldprice": "3",
    "imgUrl": "/assets/images/products/kitchen/cork.png",
    "discount": "20",
    "rating": 4,
    "color": ["brown", "black"],
    "tags": ["kitchen"],
    "available": true
  },
  {
    "name": "Frying Pan",
    "SKU": "34567",
    "price": "30",
    "oldprice": "32",
    "imgUrl": "/assets/images/products/kitchen/frying pan.png",
    "discount": "3",
    "rating": 4.5,
    "color": ["gray", "beige"],
    "tags": ["kitchen"],
    "available": true
  },
  {
    "name": "Gas Stove",
    "SKU": "45678",
    "price": "350",
    "oldprice": "365",
    "imgUrl": "/assets/images/products/kitchen/gas stove 2.png",
    "discount": "5%",
    "rating": 4,
    "color": ["brown", "white"],
    "tags": ["kitchen"],
    "available": true
  },
  {
    "name": "Gas Stove",
    "SKU": "56789",
    "price": "900",
    "oldprice": "1000",
    "imgUrl": "/assets/images/products/kitchen/gas stove.png",
    "discount": "6%",
    "rating": 4,
    "color": ["gray", "beige"],
    "tags": ["kitchen"],
    "available": true
  },
  {
    "name": "Grill",
    "SKU": "67890",
    "price": "180",
    "oldprice": "190",
    "imgUrl": "/assets/images/products/kitchen/grill-2.png",
    "discount": "3",
    "rating": 3.5,
    "color": ["blue", "gray"],
    "tags": ["kitchen"],
    "available": true
  },
  {
    "name": "Grill",
    "SKU": "78901",
    "price": "250",
    "oldprice": "270",
    "imgUrl": "/assets/images/products/kitchen/grill-3.png",
    "discount": "1",
    "rating": 4,
    "color": ["black", "white"],
    "tags": ["kitchen"],
    "available": true
  },
  {
    "name": "Grill",
    "SKU": "89012",
    "price": "600",
    "oldprice": "650",
    "imgUrl": "/assets/images/products/kitchen/grill.png",
    "discount": "12",
    "rating": 4,
    "color": ["brown", "white"],
    "tags": ["kitchen"],
    "available": true
  },
  {
    "name": "Sink",
    "SKU": "90123",
    "price": "120",
    "oldprice": "130",
    "imgUrl": "/assets/images/products/kitchen/sink.png",
    "discount": "4",
    "rating": 3.5,
    "color": ["brown", "white"],
    "tags": ["kitchen"],
    "available": true
  },
  {
    "name": "Futon",
    "SKU": "01234",
    "price": "350",
    "oldprice": "",
    "imgUrl": "path/to/image20.jpg",
    "discount": "",
    "rating": 4,
    "color": ["gray", "beige"],
    "tags": ["living", "bedroom"],
    "available": true
  },
  {
    "name": "Desk",
    "SKU": "12345",
    "price": "200",
    "oldprice": "",
    "imgUrl": "path/to/image21.jpg",
    "discount": "",
    "rating": 4,
    "color": ["black", "brown"],
    "tags": ["office"],
    "available": true
  },
  {
    "name": "Rocking Chair",
    "SKU": "23456",
    "price": "150",
    "oldprice": "",
    "imgUrl": "path/to/image22.jpg",
    "discount": "",
    "rating": 4,
    "color": ["brown", "white"],
    "tags": ["living"],
    "available": true
  },
  {
    "name": "Bunk Bed",
    "SKU": "34567",
    "price": "800",
    "oldprice": "",
    "imgUrl": "path/to/image23.jpg",
    "discount": "",
    "rating": 4,
    "color": ["white", "gray"],
    "tags": ["bedroom"],
    "available": true
  },
  {
    "name": "Armchair",
    "SKU": "45678",
    "price": "120",
    "oldprice": "",
    "imgUrl": "path/to/image24.jpg",
    "discount": "",
    "rating": 3.5,
    "color": ["black", "gray"],
    "tags": ["living"],
    "available": true
  },
  {
    "name": "Dresdsing Table",
    "SKU": "56789",
    "price": "300",
    "oldprice": "",
    "imgUrl": "path/to/image25.jpg",
    "discount": "",
    "rating": 4,
    "color": ["white", "brown"],
    "tags": ["bedroom"],
    "available": true
  },
  {
    "name": "Outdoor Dining Set",
    "SKU": "67890",
    "price": "1200",
    "oldprice": "",
    "imgUrl": "path/to/image26.jpg",
    "discount": "",
    "rating": 4.5,
    "color": ["brown", "gray"],
    "tags": ["outdoor", "dining"],
    "available": true
  },
  {
    "name": "Bean Bag Chair",
    "SKU": "78901",
    "price": "70",
    "oldprice": "",
    "imgUrl": "path/to/image27.jpg",
    "discount": "",
    "rating": 4,
    "color": ["blue", "gray", "black"],
    "tags": ["living"],
    "available": true
  },
  {
    "name": "Corner Shelf",
    "SKU": "89012",
    "price": "80",
    "oldprice": "",
    "imgUrl": "path/to/image28.jpg",
    "discount": "",
    "rating": 3.5,
    "color": ["white", "black"],
    "tags": ["living"],
    "available": true
  },
  {
    "name": "Patio Set",
    "SKU": "90123",
    "price": "1000",
    "oldprice": "1200",
    "imgUrl": "path/to/image29.jpg",
    "discount": "20%",
    "rating": 4.5,
    "color": ["brown", "gray"],
    "tags": ["outdoor"],
    "available": true
  },
  {
    "name": "Recliner Chair",
    "SKU": "01234",
    "price": "350",
    "oldprice": "",
    "imgUrl": "path/to/image30.jpg",
    "discount": "",
    "rating": 4,
    "color": ["black", "brown"],
    "tags": ["living"],
    "available": true
  }
];


productCarouselItems = [
  'Bed Cabinet Combo', 'BedSide Lamp', 'Beige Bed', 'Dressing Table', 
]
let productCarouselCards = ''

productCarouselItems.forEach(function(item){

  productCatalog.forEach(function(product){
  
      if(product.name.toLowerCase() == item.toLowerCase()){
        productCarouselCards +=  `
          <div class="card">
            <div class="card_img">
            <img src=".${product.imgUrl}" alt="" >
              <div class="card_footer">
                <span>Add to Cart</span>
              </div>
            </div>
            <span class="card_rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span class="card_title">${product.name}</span>
            <span class="card_price">$${product.price}</span>
            <span class="card_banner">New</span>
            <span class="card_discount">-${product.discount}%</span>
            <span class="card_wishlist"> <i class="fa-regular fa-heart"></i></span>
          </div>
        `
      }
  })
 
})


let carousel_track = document.querySelector('.carousel_track')
const renderCarouselProducts = () => {
  if(!carousel_track)return
carousel_track.insertAdjacentHTML('beforeend', productCarouselCards)
}

renderCarouselProducts()

// const accountSidebar = document.querySelector('.account_sidebar')

// accountSidebar.addEventListener('click', function(e){
//   e.target.classList.toggle("account_tab-active")

// })


document.querySelectorAll('.carousel_track .card .card_footer').forEach(function(card){
  card.addEventListener('click', function(e){
    console.log(e.target.closest('.card').children[2].textContent)
  })
})


// Function to render cards programmatically into the Shop Grid 
let shopGrid = document.querySelector('.shop_grid.shop_kitchen')


const renderShopGrid = () => {
  if (!shopGrid) return;
  let shopGridHTML = ''

  productCatalog.forEach(function (catalog) {
    if (catalog.tags.includes('kitchen')){
      shopGridHTML += 
      `
          <div class="card">
            <div class="card_img">
            <img src="..${catalog.imgUrl}" alt="" >
              <div class="card_footer">
                <span>Add to Cart</span>
              </div>
            </div>
            <span class="card_rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span class="card_title">${catalog.name}</span>
            <span class="card_price">$${catalog.price}</span>
            <span class="card_banner">New</span>
            <span class="card_discount">-${catalog.discount}%</span>
            <span class="card_wishlist"> <i class="fa-regular fa-heart"></i></span>
          </div>
        `
    }
  })
  shopGrid.insertAdjacentHTML('afterbegin', shopGridHTML)
}

renderShopGrid()


// Render Product's details in a single page















