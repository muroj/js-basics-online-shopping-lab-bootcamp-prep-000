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
  
  // Only add length-1 items to prevent appending extra comma ','
  for (let i = 0; i < cart.length - 1; i++) {
    msg += `${cart[i].itemName} at $${cart[i].itemPrice}, `
  }
  
   var conjunction = '';
  
  // Conjunction only needed if cart contains more than one item 
  if (cart.length > 1) {
    conjuntion = 'and'
  }
  
  // Add the last item 
  var lastItem = cart.length - 1;
  
  msg += `${conjunction} ${cart[lastItem].itemName} at $${cart[lastItem].itemPrice}.` 
  
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
