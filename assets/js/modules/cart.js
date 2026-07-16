import { cartRowTemplate } from './products.js';

export class ShoppingCart {
  constructor() {
    this.cartKey = 'gearGridCart';
    this.cart = this.loadCart();
    this.initializeCartUI();
  }

  loadCart() {
    const saved = localStorage.getItem(this.cartKey);
    return saved ? JSON.parse(saved) : [];
  }

  saveCart() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
    this.updateCartUI();
  }

  addItem(product, quantity = 1, selectedColor = null) {
    const existingItem = this.cart.find(item => 
      item.SKU === product.SKU && item.selectedColor === selectedColor
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({
        SKU: product.SKU,
        name: product.name,
        price: parseFloat(product.price),
        imgPath: product.imgPath,
        quantity: quantity,
        selectedColor: selectedColor || product.color[0]
      });
    }
    this.saveCart();
  }

  removeItem(SKU, selectedColor) {
    this.cart = this.cart.filter(item => 
      !(item.SKU === SKU && item.selectedColor === selectedColor)
    );
    this.saveCart();
  }

  updateQuantity(SKU, selectedColor, quantity) {
    const item = this.cart.find(item => 
      item.SKU === SKU && item.selectedColor === selectedColor
    );
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart();
    }
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getItemCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  initializeCartUI() {
    this.updateCartCount();
  }

  updateCartUI() {
    this.updateCartCount();
    this.renderCartPage();
  }

  updateCartCount() {
    const headerCount = document.querySelector('.header_count');
    const countSpan = headerCount?.querySelector('span');

    if (countSpan) {
      countSpan.textContent = this.getItemCount();
      return;
    }

    const cartCountElements = document.querySelectorAll('.header_icon span');
    if (cartCountElements.length > 0) {
      cartCountElements[cartCountElements.length - 1].textContent = this.getItemCount();
    }
  }

  renderCartPage() {
    const cartTable = document.querySelector('.cart_table');
    if (!cartTable) return;

    const headerRow = cartTable.querySelector('.cart_row-header');
    cartTable.innerHTML = '';
    
    if (headerRow) {
      cartTable.appendChild(headerRow);
    }

    if (this.cart.length === 0) {
      const emptyMessage = document.createElement('div');
      emptyMessage.className = 'cart_empty';
      emptyMessage.innerHTML = '<p>Your cart is empty</p>';
      cartTable.appendChild(emptyMessage);
      this.updateCartSummary();
      return;
    }

    this.cart.forEach((item, index) => {
      const cartRowHTML = cartRowTemplate(item, index);
      const cartRow = document.createElement('div');
      cartRow.innerHTML = cartRowHTML;
      cartTable.appendChild(cartRow.firstElementChild);

      // Attach event listeners
      this.attachCartRowListeners(cartTable.lastElementChild, item, index);
    });

    this.updateCartSummary();
  }

  attachCartRowListeners(row, item, index) {
    const removeBtn = row.querySelector('.cart_remove');
    const minusBtn = row.querySelector('.counter_minus');
    const plusBtn = row.querySelector('.counter_plus');
    const quantityInput = row.querySelector('.counter_text');

    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        this.removeItem(item.SKU, item.selectedColor);
      });
    }

    if (minusBtn) {
      minusBtn.addEventListener('click', () => {
        const newQty = Math.max(1, parseInt(quantityInput.value) - 1);
        quantityInput.value = newQty;
        this.updateQuantity(item.SKU, item.selectedColor, newQty);
      });
    }

    if (plusBtn) {
      plusBtn.addEventListener('click', () => {
        const newQty = parseInt(quantityInput.value) + 1;
        quantityInput.value = newQty;
        this.updateQuantity(item.SKU, item.selectedColor, newQty);
      });
    }

    if (quantityInput) {
      quantityInput.addEventListener('change', () => {
        const newQty = Math.max(1, parseInt(quantityInput.value) || 1);
        quantityInput.value = newQty;
        this.updateQuantity(item.SKU, item.selectedColor, newQty);
      });
    }
  }

  updateCartSummary() {
    const checkoutDetails = document.querySelector('.checkout_finalDetails');
    if (!checkoutDetails) return;

    const spans = checkoutDetails.querySelectorAll('.checkout_span');
    if (spans.length >= 4) {
      const subtotalSpan = spans[2].querySelector('span:last-child');
      const totalSpan = spans[3].querySelector('span:last-child');
      
      if (subtotalSpan) subtotalSpan.textContent = `$${this.getTotal().toFixed(2)}`;
      if (totalSpan) totalSpan.textContent = `$${this.getTotal().toFixed(2)}`;
    }
  }
}

// Create global cart instance
export const cart = new ShoppingCart();