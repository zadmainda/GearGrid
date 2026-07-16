
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
    <div class="card" data-sku="${product.SKU || ''}" style="cursor:pointer;" role="button" tabindex="0">
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

// Render Product's details in a single page

const formatCurrency = (value) => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return '$0.00';
  return `$${parsed.toFixed(2)}`;
};

const formatLabel = (value) => {
  if (!value) return '';
  return String(value)
    .replace(/-/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const createProductDetailsTemplate = (product = {}) => {
  const productName = product.name || 'Product';
  const imagePath = product.imgPath || '/assets/images/products/placeholder.png';
  const price = formatCurrency(product.price || 0);
  const oldPrice = product.oldprice ? formatCurrency(product.oldprice) : '';
  const description = product.description || `Discover ${productName}, crafted to bring comfort and style to your space.`;
  const reviewCount = product.ratings?.length || 0;
  const ratingStars = createStarRating(Math.round(product.rating || 0));
  const tags = (product.tags || [])
    .filter(tag => typeof tag === 'string' && tag.toLowerCase() !== 'new')
    .map(tag => formatLabel(tag))
    .join(', ');
  const colors = (product.color || [])
    .map((color, index) => {
      const normalizedColor = String(color).toLowerCase();
      const hexColor = getColorHex(normalizedColor);
      return `
        <div class="product_color product_color-${index + 1}">
          <span class="product_option-title">${formatLabel(normalizedColor)}</span>
          <span class="product_color_swatch" style="background:${hexColor};"></span>
        </div>
      `;
    })
    .join('');

  const reviews = (product.ratings || []).map((review, index) => {
    const comment = product.comments?.[index]?.comment || 'A great choice for your home.';
    return `
      <div class="reviews_card">
        <div class="reviews_customer">
          <div class="reviews_displayPhoto">
            <img src="https://placehold.co/100x100/png" alt="${review.user || 'Customer'}">
          </div>
          <div class="reviews_stars">
            <span class="reviews_name">${review.user || 'Customer'}</span>
            <span>${createStarRating(Math.round(review.rating || 0))}</span>
          </div>
        </div>
        <div class="reviews_text">${comment}</div>
      </div>
    `;
  }).join('');

  return `
  <ul class="breadcrumps">
    <div class="pageheader_crumps">
      <a href="/index.html" class="pageheader_crump">Home</a>
      <i class="fa-solid fa-angle-right"></i>
      <a href="/shop.html" class="pageheader_crump">Shop</a>
      <i class="fa-solid fa-angle-right"></i>
      <a href="/product.html" class="pageheader_crump active_link">${productName}</a>
    </div>
  </ul>

  <div class="product_grid">
    <div class="product_slider">
      <div class="product_slider-L">
        <div class="product_track">
          <img src="${imagePath}" alt="${productName}">
        </div>
        <i class="fa-solid fa-circle-arrow-left product_arrow product_arrow-left" id="product_arrow-left"></i>
        <i class="fa-solid fa-circle-arrow-right product_arrow product_arrow-right" id="product_arrow-right"></i>
      </div>
    </div>

    <div class="product_content">
      <div class="product_rating">
        <div class="product_stars">${ratingStars}</div>
        <span class="product_reviewers">${reviewCount} Review${reviewCount === 1 ? '' : 's'}</span>
      </div>
      <h3 class="product_title">${productName}</h3>
      <p class="product_description">${description}</p>

      <div class="product_prices">
        <span class="product_newprice">${price}</span>
        ${oldPrice ? `<span class="product_oldprice">${oldPrice}</span>` : ''}
      </div>

      <div class="product_measurement">
        <span>Measurements</span>
        <span>${product.measurement || 'Available on request'}</span>
      </div>

      <div class="product_options">
        <span>Choose color <i class="fa-solid fa-angle-right"></i></span>
        <div class="product_colors">${colors}</div>
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
          <span>${product.SKU || 'N/A'}</span>
        </div>
        <div class="product_category">
          <span>${tags || 'General'}</span>
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
        <span>${ratingStars}</span>
        <span>${reviewCount} Review${reviewCount === 1 ? '' : 's'}</span>
      </div>
      <form action="" method="post">
        <input type="text" placeholder="Your review...">
        <button class="btn btn-black"><span>write Review</span></button>
      </form>
      <div class="reviews_container">${reviews || '<p>No reviews yet.</p>'}</div>
    </div>
  </div>
  `;
};

export let productDetailsTemplateString = createProductDetailsTemplate({});
export const renderProductDetailsTemplate = (product) => {
  productDetailsTemplateString = createProductDetailsTemplate(product);
  return productDetailsTemplateString;
};
