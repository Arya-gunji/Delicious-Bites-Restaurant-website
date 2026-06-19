// Utility Functions for Cart Operations

/**
 * Format price to currency format
 * @param {number} price - The price to format
 * @returns {string} Formatted price string
 */
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

/**
 * Calculate subtotal from cart items
 * @param {Array} cartItems - Array of cart items
 * @returns {number} Subtotal amount
 */
function calculateSubtotal(cartItems) {
    return cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

/**
 * Calculate tax amount (10% tax rate)
 * @param {number} subtotal - Subtotal amount
 * @returns {number} Tax amount
 */
function calculateTax(subtotal) {
    return subtotal * 0.10;
}

/**
 * Calculate total amount (subtotal + tax)
 * @param {number} subtotal - Subtotal amount
 * @param {number} tax - Tax amount
 * @returns {number} Total amount
 */
function calculateTotal(subtotal, tax) {
    return subtotal + tax;
}

/**
 * Get cart from localStorage
 * @returns {Array} Cart items array
 */
function getCartFromStorage() {
    const cartJson = localStorage.getItem('restaurantCart');
    return cartJson ? JSON.parse(cartJson) : [];
}

/**
 * Save cart to localStorage
 * @param {Array} cartItems - Cart items array
 */
function saveCartToStorage(cartItems) {
    localStorage.setItem('restaurantCart', JSON.stringify(cartItems));
}

/**
 * Find item in cart by ID
 * @param {Array} cartItems - Cart items array
 * @param {number} itemId - Item ID to find
 * @returns {Object|null} Found item or null
 */
function findCartItem(cartItems, itemId) {
    return cartItems.find(item => item.id === itemId);
}

/**
 * Add item to cart or update quantity if exists
 * @param {Array} cartItems - Current cart items
 * @param {Object} menuItem - Menu item to add
 * @returns {Array} Updated cart items
 */
function addToCart(cartItems, menuItem) {
    const existingItem = findCartItem(cartItems, menuItem.id);
    
    if (existingItem) {
        // Update quantity if item already exists
        existingItem.quantity += 1;
    } else {
        // Add new item to cart
        cartItems.push({
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
            image: menuItem.image
        });
    }
    
    return cartItems;
}

/**
 * Update item quantity in cart
 * @param {Array} cartItems - Current cart items
 * @param {number} itemId - Item ID to update
 * @param {number} quantity - New quantity
 * @returns {Array} Updated cart items
 */
function updateCartItemQuantity(cartItems, itemId, quantity) {
    if (quantity <= 0) {
        return removeFromCart(cartItems, itemId);
    }
    
    const item = findCartItem(cartItems, itemId);
    if (item) {
        item.quantity = quantity;
    }
    
    return cartItems;
}

/**
 * Remove item from cart
 * @param {Array} cartItems - Current cart items
 * @param {number} itemId - Item ID to remove
 * @returns {Array} Updated cart items
 */
function removeFromCart(cartItems, itemId) {
    return cartItems.filter(item => item.id !== itemId);
}

/**
 * Get total number of items in cart
 * @param {Array} cartItems - Cart items array
 * @returns {number} Total quantity of items
 */
function getCartItemCount(cartItems) {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
}

/**
 * Clear entire cart
 * @returns {Array} Empty cart array
 */
function clearCart() {
    return [];
}

/**
 * Show notification/toast message
 * @param {string} message - Message to display
 * @param {string} type - Type of notification (success, error, info)
 */
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info'} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 80px; right: 20px; z-index: 9999; min-width: 300px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}
