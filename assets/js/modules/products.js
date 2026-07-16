
export function getColorHex(color) {
  const colorMap = {
    'red': '#EF4444',
    'green': '#10B981',
    'blue': '#3B82F6',
    'yellow': '#FBBF24',
    'brown': '#92400E',
    'beige': '#F5E6D3',
    'gray': '#9CA3AF',
    'black': '#1F2937',
    'white': '#F3F4F6',
    'silver': '#D1D5DB'
  };
  return colorMap[color.toLowerCase()] || '#6B7280';
}


// Product Card Template
// Product Card Template (matches createCard structure)
export const productCardTemplate = (product) => {
  const paramRating = Math.round(product.rating);
  let cardRatingInnerHTML = '';
  for (let i = 0; i < paramRating; i++) {
    cardRatingInnerHTML += ' &#9733; ';
  }

  return `
    <div class="card">
      <div class="card_img">
        <img src="${product.imgPath}" alt="${product.name}" loading="lazy">
        <div class="card_footer">
          <span>Add to Cart</span>
        </div>
      </div>
      <span class="card_rating" style="color: #ff8b00;">
        ${cardRatingInnerHTML}
      </span>
      <span class="card_title">${product.name}</span>
      <div class="card_pricewrapper">
        <span class="card_price">$${product.price}.99</span>
        ${product.oldprice ? `<span class="card_oldprice">$${product.oldprice}.00</span>` : '<span style="display: none;"></span>'}
      </div>
      <span class="card_banner">New</span>
      ${product.discount ? `<span class="card_discount">${product.discount}%</span>` : '<span style="display: none;"></span>'}
      <span class="card_wishlist">
        <i class="fa-regular fa-heart"></i>
      </span>
    </div>
  `;
};

// Cart Row Template
export const cartRowTemplate = (item, index) => {
  return `
    <div class="cart_row">
      <div class="cart_description">
        <div class="cart_img">
          <img src="${item.imgPath}" alt="${item.name}">
        </div>
        <div class="cart_meta">
          <p class="cart_name">${item.name}</p>
          <p class="cart_color">Color: <span>${item.selectedColor}</span></p>
          <span class="cart_remove" data-sku="${item.SKU}" data-color="${item.selectedColor}">
            <i class="fa-solid fa-xmark"></i>
            Remove
          </span>
        </div>
      </div>
      <div class="counter">
        <span class="counter_minus" data-index="${index}"><i class="fa-solid fa-minus"></i></span>
        <input class="counter_text" type="text" value="${item.quantity}" data-index="${index}" />
        <span class="counter_plus" data-index="${index}"><i class="fa-solid fa-plus"></i></span>
      </div>
      <div class="cart_price">$<span>${item.price.toFixed(2)}</span></div>
      <div class="cart_subtotal">$<span>${(item.price * item.quantity).toFixed(2)}</span></div>
    </div>
  `;
};

// Helper Functions
export function createStarRating(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<i class="fa-solid fa-star"></i>';
    } else {
      stars += '<i class="fa-regular fa-star"></i>';
    }
  }
  return stars;
}
