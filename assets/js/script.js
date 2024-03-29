// const html = document.querySelector('html');
// html.style.display = 'none';

// window.addEventListener("DOMContentLoaded", ()=>{
//   document.querySelector('html').style.display = '';
// })

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
  let scrollWidth = heroImgSlider.scrollWidth - heroImgSlider.clientWidth;

  const showHideIcons = () =>{
    if(heroImgSlider.scrollLeft == 0){
      heroArrows[0].style.display = "none";
    }else{
      heroArrows[0].style.display = "block";
    };
    if(heroImgSlider.scrollLeft == scrollWidth){
      heroArrows[1].style.display = "none";
    }else{
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
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]   
  },
  {
    "name": "BedSide Lamp",
    "SKU": "23456",
    "price": "1800",
    "oldprice": "2000",
    "imgUrl": "/assets/images/products/bedroom/bedside-lamp.png",
    "discount": "15",
    "rating": 4,
    "color": ["brown", "beige", "gray"],
    "tags": ["bedroom", "new"],
    "available": true, 
    "new": true,
    "ratings": [
      { "user": "User1", "rating": 3 },
      { "user": "User2", "rating": 3 },
      { "user": "User3", "rating": 3 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Bamboo Basket",
    "SKU": "21226",
    "price": "30",
    "oldprice": "50",
    "imgUrl": "/assets/images/products/Bamboo Basket.png",
    "discount": "3",
    "rating": 4,
    "color": ["brown", "beige", "gray"],
    "tags": ["living"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Frying Pan",
    "SKU": "11526",
    "price": "20",
    "oldprice": "30",
    "imgUrl": "/assets/images/products/Bamboo Basket.png",
    "discount": "7",
    "rating": 4,
    "color": ["Yellow"],
    "tags": ["kitchen"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 2 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Tabletop Grill",
    "SKU": "10526",
    "price": "450",
    "oldprice": "530",
    "imgUrl": "/assets/images/products/kitchen/grill-3.png",
    "discount": "11",
    "rating": 2,
    "color": ["gray"],
    "tags": ["kitchen", "new"],
    "available": true, 
    'new': true,
    "ratings": [
      { "user": "User1", "rating": 3 },
      { "user": "User2", "rating": 4 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Yellow Armchair",
    "SKU": "10116",
    "price": "950",
    "oldprice": "1030",
    "imgUrl": "/assets/images/products/Living Room/yellow armchair.png",
    "discount": "11",
    "rating": 4,
    "color": ["gray"],
    "tags": ["living", "new"],
    "available": true, 
    "new": true,
    "ratings": [
      { "user": "User1", "rating": 2.5 },
      { "user": "User2", "rating": 4 },
      { "user": "User3", "rating": 3 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Bose",
    "SKU": "10996",
    "price": "550",
    "oldprice": "630",
    "imgUrl": "/assets/images/products/Bose.png",
    "discount": "7",
    "rating": 4,
    "color": ["gray"],
    "tags": ["living", "new"],
    "available": true, 
    "new": true,
    "ratings": [
      { "user": "User1", "rating": 5 },
      { "user": "User2", "rating": 2 },
      { "user": "User3", "rating": 3 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Sony - WH-1000xm5.png",
    "SKU": "454326",
    "price": "650",
    "oldprice": "680",
    "imgUrl": "/assets/images/products/sony - WH-1000xm5.png",
    "discount": "3.5",
    "rating": 4,
    "color": ["white"],
    "tags": ["living", "new"],
    "available": true, 
    "new": true,
    "ratings": [
      { "user": "User1", "rating": 4 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Desktop Lamp",
    "SKU": "64345",
    "price": "150",
    "oldprice": "180",
    "imgUrl": "/assets/images/products/Table Lamp.png",
    "discount": "7.5",
    "rating": 4,
    "color": ["white"],
    "tags": ["living", "new"],
    "available": true, 
    "new": true,
    "ratings": [
      { "user": "User1", "rating": 5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 5 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Beige Lamp",
    "SKU": "99554",
    "price": "120",
    "oldprice": "140",
    "imgUrl": "/assets/images/products/Beige Table Lamp.png",
    "discount": "7",
    "rating": 4,
    "color": ["white"],
    "tags": ["living", "new"],
    "available": true, 
    "new": true,
    "ratings": [
      { "user": "User1", "rating": 4 },
      { "user": "User2", "rating": 4 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
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
    "tags": ["bedroom", "new"],
    "available": true, 
    "new": true,
    "ratings": [
      { "user": "User1", "rating": 3.5 },
      { "user": "User2", "rating": 3 },
      { "user": "User3", "rating": 3 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
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
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 2.5 },
      { "user": "User2", "rating": 4 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
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
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 5 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Khaki Bed",
    "SKU": "67890",
    "price": "1500",
    "oldprice": "1700",
    "imgUrl": "/assets/images/products/bedroom/khaki-bed.png",
    "discount": "8",
    "rating": 4,
    "color": ["brown", "white"],
    "tags": ["bedroom"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 5 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
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
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Red Bed",
    "SKU": "89012",
    "price": "400",
    "oldprice": "450",
    "imgUrl": "/assets/images/products/bedroom/red bed.png",
    "discount": "10",
    "rating": 3.5,
    "color": ["black", "brown"],
    "tags": ["bedroom"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Vase",
    "SKU": "90123",
    "price": "50",
    "oldprice": "60",
    "imgUrl": "/assets/images/products/bedroom/vase.png",
    "discount": "20",
    "rating": 2,
    "color": ["brown", "white"],
    "tags": ["bedroom"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
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
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
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
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
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
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
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
    "tags": ["kitchen", "new"],
    "available": true, 
    "new": true,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Gas Stove",
    "SKU": "45678",
    "price": "350",
    "oldprice": "365",
    "imgUrl": "/assets/images/products/kitchen/gas stove 2.png",
    "discount": "5",
    "rating": 4,
    "color": ["brown", "white"],
    "tags": ["kitchen"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Gas Stove",
    "SKU": "56789",
    "price": "900",
    "oldprice": "1000",
    "imgUrl": "/assets/images/products/kitchen/gas stove.png",
    "discount": "6",
    "rating": 4,
    "color": ["gray", "beige"],
    "tags": ["kitchen"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
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
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
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
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
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
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
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
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Bean Bag",
    "SKU": "01234",
    "price": "350",
    "oldprice": "",
    "imgUrl": "/assets/images/products/bedroom/Bean Bag Chair_1.png",
    "discount": "",
    "rating": 4,
    "color": ["gray", "beige"],
    "tags": ["living", "bedroom"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Bean Bag",
    "SKU": "12345",
    "price": "200",
    "oldprice": "",
    "imgUrl": "/assets/images/products/bedroom/Bean Bag Chair_2.png",
    "discount": "",
    "rating": 4,
    "color": ["black", "brown"],
    "tags": ["bedroom", "living"],
    "available": true,
    "new": false, 
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Chocolate Themed Bed",
    "SKU": "23456",
    "price": "150",
    "oldprice": "",
    "imgUrl": "/assets/images/products/bedroom/choco-bed.png",
    "discount": "",
    "rating": 4,
    "color": ["brown", "white"],
    "tags": ["bedroom", "living"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Closet",
    "SKU": "34567",
    "price": "800",
    "oldprice": "",
    "imgUrl": "/assets/images/products/bedroom/closet.png",
    "discount": "",
    "rating": 4,
    "color": ["white", "gray"],
    "tags": ["bedroom"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Wrought Iron Infant Bed",
    "SKU": "45678",
    "price": "120",
    "oldprice": "",
    "imgUrl": "/assets/images/products/bedroom/wrought-iron-bed.png",
    "discount": "",
    "rating": 3.5,
    "color": ["black", "gray"],
    "tags": ["bedroom", "living"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Maasai Infant Bed",
    "SKU": "56789",
    "price": "300",
    "oldprice": "",
    "imgUrl": "/assets/images/products/bedroom/maasai-infant-bed.png",
    "discount": "",
    "rating": 4,
    "color": ["white", "brown"],
    "tags": ["bedroom"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Pink Infant bed",
    "SKU": "67890",
    "price": "1200",
    "oldprice": "",
    "imgUrl": "/assets/images/products/bedroom/pink-infant-bed.png",
    "discount": "",
    "rating": 4.5,
    "color": ["brown", "gray"],
    "tags": ["bedroom", "dining"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Oak Infant Bed",
    "SKU": "78901",
    "price": "70",
    "oldprice": "",
    "imgUrl": "/assets/images/products/bedroom/oak-Infant-bed.png",
    "discount": "",
    "rating": 4,
    "color": ["blue", "gray", "black"],
    "tags": ["living", "bedroom"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Bunk Bed",
    "SKU": "89012",
    "price": "80",
    "oldprice": "",
    "imgUrl": "/assets/images/products/bedroom/bunk-bed.png",
    "discount": "",
    "rating": 3.5,
    "color": ["white", "black"],
    "tags": ["bedroom"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Recliner",
    "SKU": "90123",
    "price": "1000",
    "oldprice": "1200",
    "imgUrl": "/assets/images/products/Living Room/recliner.png",
    "discount": "20",
    "rating": 4.5,
    "color": ["brown", "gray"],
    "tags": ["living"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Recliner Pro",
    "SKU": "01234",
    "price": "350",
    "oldprice": "",
    "imgUrl": "/assets/images/products/Living Room/recliner-pro.png",
    "discount": "",
    "rating": 4,
    "color": ["black", "brown"],
    "tags": ["living"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Woven Recliner",
    "SKU": "01234",
    "price": "350",
    "oldprice": "",
    "imgUrl": "/assets/images/products/Living Room/recliner-woven.png",
    "discount": "",
    "rating": 4,
    "color": ["black", "brown"],
    "tags": ["living"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Sony WH",
    "SKU": "1134",
    "price": "299",
    "oldprice": "",
    "imgUrl": "/assets/images/products/Sony-Wh.png",
    "discount": "",
    "rating": 4,
    "color": ["black", "brown"],
    "tags": ["living"],
    "available": true,
    "new": false, 
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Skull Candy Earbuds",
    "SKU": "2234",
    "price": "199",
    "oldprice": "",
    "imgUrl": "/assets/images/products/skullcandy-2.png",
    "discount": "",
    "rating": 5,
    "color": ["black", "brown"],
    "tags": ["living"],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Comfy Pillow",
    "SKU": "3342",
    "price": "29",
    "oldprice": "",
    "imgUrl": "/assets/images/products/Light Beige Pillow.png",
    "discount": "",
    "rating": 3,
    "color": ["black", "brown"],
    "tags": ["living", 'bedroom'],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Stainless Steel Pots",
    "SKU": "3342",
    "price": "87",
    "oldprice": "",
    "imgUrl": "/assets/images/products/tableware.png",
    "discount": "",
    "rating": 3,
    "color": ["black", "brown"],
    "tags": ['kitchen'],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "JBL Earbuds",
    "SKU": "0974",
    "price": "350",
    "oldprice": "",
    "imgUrl": "/assets/images/products/jbl.png",
    "discount": "",
    "rating": 3,
    "color": ["black", "brown"],
    "tags": ['living'],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Bose HeadPhones",
    "SKU": "0414",
    "price": "499",
    "oldprice": "",
    "imgUrl": "/assets/images/products/Bose.png",
    "discount": "",
    "rating": 3,
    "color": ["black", "brown"],
    "tags": ['living'],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Beats by DRE HeadPhones",
    "SKU": "472",
    "price": "699",
    "oldprice": "",
    "imgUrl": "/assets/images/products/beats.png",
    "discount": "",
    "rating": 3,
    "color": ["black", "brown"],
    "tags": ['living'],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  },
  {
    "name": "Beats by DRE Earbuds",
    "SKU": "472",
    "price": "459",
    "oldprice": "",
    "imgUrl": "/assets/images/products/beats-2.png",
    "discount": "",
    "rating": 3,
    "color": ["black", "brown"],
    "tags": ['living'],
    "available": true, 
    "new": false,
    "ratings": [
      { "user": "User1", "rating": 4.5 },
      { "user": "User2", "rating": 5 },
      { "user": "User3", "rating": 4 }
    ],
    "comments": [
      { "user": "User1", "comment": "Great Chair, highly recommended!" },
      { "user": "User2", "comment": "Fast delivery and excellent customer service." }
    ]  
  }
  
];



let kitchenGrid = document.querySelector('.shop_grid.shop_kitchen');
let bedroomGrid = document.querySelector('.shop_grid.shop_bedroom');
let livingroomGrid = document.querySelector('.shop_grid.shop_livingroom');
let generalShopGrid = document.querySelector('.shop_grid.shop_allRooms');
let carousel_track = document.querySelector('.carousel_track');



const renderProducts = (room, tag) => {

  room;

  if (!room) {
    return
  }

  let productsToBeRendered = []

  let filteredProducts = [];
  if (tag != 'all'){
  productCatalog.forEach( product =>{
    if (product.tags.includes(tag)){
      filteredProducts.push(product)
    }
  })}
  else{
    filteredProducts = productCatalog;
    console.log(filteredProducts)
  }

  
  filteredProducts.map(function (product) {
    const cardwrapper = document.createElement('div');
    cardwrapper.classList.add('card');
    const cardImg = document.createElement('div');
    cardImg.classList.add('card_img');
    const img = document.createElement('img');
    img.src = product.imgUrl;
    img.alt = product.name;
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card_footer');
    const span = document.createElement('span');
    span.textContent = 'Add to Cart';


    const cardRating = document.createElement('span');
    cardRating.classList.add('card_rating');

    productRating = Math.round(product.rating);
    cardRatingInnerHTML = ''
    for (let i = 0; i < productRating; i++) {
      cardRatingInnerHTML += ' &#9733; '
    }
    cardRating.innerHTML = cardRatingInnerHTML;
    cardRating.style.color = '#ff8b00';

    const cardTitle = document.createElement('span');
    cardTitle.classList.add('card_title');
    cardTitle.textContent = product.name;

    const priceWrapper = document.createElement('div');
    priceWrapper.classList.add('card_pricewrapper')

    const cardPrice = document.createElement('span');
    cardPrice.classList.add('card_price');
    cardPrice.textContent = '$' + product.price + '.99';

    const oldPrice = document.createElement('span');
    oldPrice.textContent = '$' + product.oldprice + '.00';
    if (product.oldprice) {
      oldPrice.classList.add('card_oldprice');
    } else {
      oldPrice.style.display = 'none';
    }


    const cardBanner = document.createElement('span');
    cardBanner.classList.add('card_banner');
    cardBanner.textContent = 'New';

    const cardDiscount = document.createElement('span');
    cardDiscount.textContent = product.discount + '%';
    if (product.discount) {
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

    productsToBeRendered.push(cardwrapper)

  }
  )

  productsToBeRendered.forEach(card => {
    room.appendChild(card)
  })

}

//Product Tags
const kitchen = 'kitchen';
const bedroom = 'bedroom';
const living = 'living';
const all = 'all'
const newTag = 'new'

renderProducts(kitchenGrid, kitchen);
renderProducts(bedroomGrid, bedroom);
renderProducts(livingroomGrid, living);
renderProducts(generalShopGrid, all)
renderProducts(carousel_track, newTag)



document.querySelectorAll('.carousel_track .card .card_footer').forEach(function(card){
  card.addEventListener('click', function(e){
    console.log(e.target.closest('.card').children[2].textContent)
  })
})


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
document.addEventListener("DOMContentLoaded", landingPageProductCarouselScroll)




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















