

// Product Card Template
export const productCardTemplate = (product) => {
  return `
    <div class="product_card">
      <div class="product_image">
        ${product.new ? '<div class="product_badge product_badge-new">New</div>' : ''}
        ${product.discount ? `<div class="product_badge product_badge-discount">-${product.discount}%</div>` : ''}
        <img src="${product.imgPath}" alt="${product.name}">
        <div class="product_overlay">
          <div class="product_actions">
            <button class="product_btn product_btn-wishlist" title="Add to wishlist">
              <i class="fa-regular fa-heart"></i>
            </button>
            <button class="product_btn product_btn-view" title="Quick view">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="product_info">
        <h3 class="product_name">${product.name}</h3>
        <div class="product_rating">
          ${createStarRating(product.rating)}
          <span class="product_rating_text">(${product.rating})</span>
        </div>
        <div class="product_price">
          <span class="product_price_current">$${parseFloat(product.price).toFixed(2)}</span>
          ${product.oldprice ? `<span class="product_price_original">$${parseFloat(product.oldprice).toFixed(2)}</span>` : ''}
        </div>
        <div class="product_colors">
          ${product.color.map(color => 
            `<span class="product_color" data-color="${color}" title="${color}" style="background-color: ${getColorHex(color)}"></span>`
          ).join('')}
        </div>
        <button class="product_btn-add btn btn-black" data-sku="${product.SKU}">
          <span>Add to Cart</span>
          <i class="fa-solid fa-bag-shopping"></i>
        </button>
      </div>
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
