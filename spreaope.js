let product = ['mouse', 'keyboard', 'touchpad', 'monitor'];
let productName = [...product];
console.log("original  = " + product);
console.log("original call in different variable = " + productName);
productName.push('laptop', 'earphone');
console.log("after pushing some new product = " + productName);
console.log("same as original = " + product);