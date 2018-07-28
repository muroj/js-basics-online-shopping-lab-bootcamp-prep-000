var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  var cartItem = { 
    itemName : item, 
    itemPrice: Math.floor(Math.random() * 100 + 1)
  };
  
  cart.push(cartItem);
  
  return `${item} has been added to your cart.`
}

function viewCart() {
  
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }
  
  var msg = 'In your cart, you have ';
  
  for (let i = 0; i < cart.length - 1; i++) {
    msg += `${cart[i].itemName} at $${cart[i].itemPrice}, `
  }
  
  var lastItem = cart.length - 1;
  
  
  msg += `${cart[lastItem].itemName} at $${cart[lastItem].itemPrice}.` 
  
  return msg;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
