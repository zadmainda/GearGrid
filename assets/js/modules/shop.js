import { createPageHeader } from './pageHeaderTemplate.js';
import { productCardTemplate, } from './products.js';
import { cart } from './cart.js';

document.addEventListener('productsLoaded', (e) => {
  const productCatalog = e.detail;
  new ProductShop(productCatalog);
});

export class ProductShop {
  constructor(productCatalog) {
    this.allProducts = productCatalog;
    this.filteredProducts = [...productCatalog];
    this.activeFilters = {
      categories: [],
      priceRange: null,
      searchQuery: ''
    };
    this.initializeFilters();
    this.applyCategoryFromUrl();
    this.renderPageHeader();
    this.renderProducts();
  }

  initializeFilters() {
    this.setupCategoryFilters();
    this.setupPriceFilters();
    this.setupSearch();
    this.setupSort();
  }

  setupCategoryFilters() {
    const roomCheckboxes = document.querySelectorAll('.room_field input');
    const allRoomsCheckbox = document.querySelector('#allRooms');

    roomCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.updateCategoryFilters();
      });
    });

    if (allRoomsCheckbox) {
      allRoomsCheckbox.addEventListener('change', () => {
        const isChecked = allRoomsCheckbox.checked;
        roomCheckboxes.forEach(checkbox => {
          if (checkbox.id !== 'allRooms') {
            checkbox.checked = isChecked;
          }
        });
        this.updateCategoryFilters();
      });
    }
  }

  updateCategoryFilters() {
    const checkedBoxes = document.querySelectorAll('.room_field input:checked');
    this.activeFilters.categories = Array.from(checkedBoxes)
      .map(box => box.value)
      .filter(value => value !== 'all');
    
    this.applyFilters();
  }

  applyCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');

    if (!categoryParam) return;

    const normalizedCategory = this.normalizeCategory(categoryParam);
    const matchingCheckbox = document.querySelector(`.room_field input[value="${normalizedCategory}"]`);

    if (!matchingCheckbox) return;

    document.querySelectorAll('.room_field input').forEach(checkbox => {
      checkbox.checked = checkbox.value === normalizedCategory;
    });

    this.activeFilters.categories = [normalizedCategory];
    this.applyFilters();
  }

  normalizeCategory(category) {
    const mapping = {
      'living-room': 'living',
      'living room': 'living',
      'living': 'living',
      'bedroom': 'bedroom',
      'kitchen': 'kitchen',
      'bathroom': 'bathroom',
      'dining': 'dining',
      'outdoor': 'outdoor'
    };

    return mapping[category.toLowerCase()] || category.toLowerCase();
  }

  setupPriceFilters() {
    const priceCheckboxes = document.querySelectorAll('.price_field input');
    const allPricesCheckbox = document.querySelector('#allPrices');

    priceCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.updatePriceFilters();
      });
    });

    if (allPricesCheckbox) {
      allPricesCheckbox.addEventListener('change', () => {
        const isChecked = allPricesCheckbox.checked;
        priceCheckboxes.forEach(checkbox => {
          if (checkbox.id !== 'allPrices') {
            checkbox.checked = isChecked;
          }
        });
        this.updatePriceFilters();
      });
    }
  }

  updatePriceFilters() {
    const checkedBoxes = document.querySelectorAll('.price_field input:checked');
    const priceRanges = [];

    checkedBoxes.forEach(box => {
      if (box.id === '1') priceRanges.push([0, 99.99]);
      if (box.id === '2') priceRanges.push([100, 199.99]);
      if (box.id === '3') priceRanges.push([200, 299.99]);
      if (box.id === '4') priceRanges.push([300, 399.99]);
      if (box.id === '5') priceRanges.push([400, Infinity]);
    });

    this.activeFilters.priceRange = priceRanges.length > 0 ? priceRanges : null;
    this.applyFilters();
  }

  setupSearch() {
    const searchIcon = document.querySelector('.header_icons .header_icon:first-child');
    if (!searchIcon) return;

    searchIcon.addEventListener('click', () => {
      this.showSearchModal();
    });
  }

  showSearchModal() {
    const existingModal = document.querySelector('.search_modal');
    if (existingModal) existingModal.remove();

    const searchModal = document.createElement('div');
    searchModal.className = 'search_modal';
    searchModal.innerHTML = `
      <div class="search_modal_content">
        <div class="search_modal_header">
          <input type="text" class="search_input" placeholder="Search products...">
          <button class="search_close_btn"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="search_results"></div>
      </div>
    `;

    document.body.appendChild(searchModal);

    const searchInput = searchModal.querySelector('.search_input');
    const closeBtn = searchModal.querySelector('.search_close_btn');
    const resultsContainer = searchModal.querySelector('.search_results');

    searchInput.focus();

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      this.activeFilters.searchQuery = query;
      
      if (query.length > 0) {
        const results = this.allProducts.filter(product =>
          product.name.toLowerCase().includes(query)
        );
        
        resultsContainer.innerHTML = '';
        if (results.length > 0) {
          results.forEach(product => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search_result_item';
            resultItem.innerHTML = `
              <img src="${product.imgPath}" alt="${product.name}">
              <div class="search_result_info">
                <p>${product.name}</p>
                <span>$${parseFloat(product.price).toFixed(2)}</span>
              </div>
            `;
            resultItem.addEventListener('click', () => {
              window.location.href = `/product.html?sku=${product.SKU}`;
            });
            resultsContainer.appendChild(resultItem);
          });
        } else {
          resultsContainer.innerHTML = '<p class="search_no_results">No products found</p>';
        }
      } else {
        resultsContainer.innerHTML = '';
      }
      
      this.applyFilters();
    });

    closeBtn.addEventListener('click', () => {
      searchModal.remove();
      this.activeFilters.searchQuery = '';
      this.applyFilters();
    });

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        searchModal.remove();
        this.activeFilters.searchQuery = '';
        this.applyFilters();
      }
    });
  }

  setupSort() {
    const dropdown = document.querySelector('.shop_dropdown');
    if (!dropdown) return;

    dropdown.innerHTML = `
      <select class="sort_select">
        <option value="">Sort by</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="newest">Newest</option>
        <option value="rating">Top Rated</option>
      </select>
    `;

    const select = dropdown.querySelector('.sort_select');
    select.addEventListener('change', (e) => {
      this.sortProducts(e.target.value);
    });
  }

  sortProducts(sortBy) {
    const products = [...this.filteredProducts];

    switch(sortBy) {
      case 'price-low':
        products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'price-high':
        products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'newest':
        products.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
    }

    this.filteredProducts = products;
    this.renderProducts();
  }

  applyFilters() {
    let filtered = [...this.allProducts];

    if (this.activeFilters.searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(this.activeFilters.searchQuery)
      );
    }

    if (this.activeFilters.categories.length > 0) {
      filtered = filtered.filter(product =>
        product.tags.some(tag => this.activeFilters.categories.includes(tag))
      );
    }

    if (this.activeFilters.priceRange) {
      filtered = filtered.filter(product => {
        const price = parseFloat(product.price);
        return this.activeFilters.priceRange.some(range =>
          price >= range[0] && price <= range[1]
        );
      });
    }

    this.filteredProducts = filtered;
    this.renderPageHeader();
    this.renderProducts();
  }

  renderPageHeader() {
    const header = document.querySelector('#shopPageHeader');
    if (!header) return;

    const selectedCategories = this.activeFilters.categories.length > 0
      ? this.activeFilters.categories
      : [];
    const hasPriceFilter = Boolean(this.activeFilters.priceRange && this.activeFilters.priceRange.length > 0);

    const title = selectedCategories.length === 1
      ? selectedCategories[0]
      : hasPriceFilter
        ? 'Filtered Results'
        : 'Shop';

    const toolbarTitle = document.querySelector('.shop_title');

    if (toolbarTitle) {
      toolbarTitle.textContent = title === 'Shop' ? 'All Rooms' : title === 'Filtered Results' ? 'Filtered Results' : title.charAt(0).toUpperCase() + title.slice(1);
    }

    header.innerHTML = createPageHeader(selectedCategories.length > 0 ? selectedCategories : ['Shop']);
  }

  renderProducts() {
    const grid = document.querySelector('.shop_allRooms');
    if (!grid) return;

    grid.innerHTML = '';

    if (this.filteredProducts.length === 0) {
      grid.innerHTML = '<p class="no_products">No products found. Try adjusting your filters.</p>';
      return;
    }

    this.filteredProducts.forEach(product => {
      const productCardHTML = productCardTemplate(product);
      const wrapper = document.createElement('div');
      wrapper.innerHTML = productCardHTML;
      const productCard = wrapper.firstElementChild;
      grid.appendChild(productCard);

      this.attachProductCardListeners(productCard, product);
    });
  }

  attachProductCardListeners(card, product) {
    const addBtn = card.querySelector('.product_btn-add');
    let selectedColor = product.color[0];

    const colorButtons = card.querySelectorAll('.product_color');
    colorButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        colorButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedColor = btn.dataset.color;
      });
    });

    if (addBtn) {
      addBtn.addEventListener('click', () => {
        cart.addItem(product, 1, selectedColor);
        this.showAddToCartNotification(product.name);
      });
    }
  }

  showAddToCartNotification(productName) {
    const notification = document.createElement('div');
    notification.className = 'add_to_cart_notification';
    notification.innerHTML = `
      <i class="fa-solid fa-check"></i>
      <span>${productName} added to cart!</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('show');
    }, 10);

    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}