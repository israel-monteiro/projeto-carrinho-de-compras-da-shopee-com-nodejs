import createitem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createitem("Mousepad", 25, 1);
const item2 = await createitem("Mouse", 79.99, 2);
const item3 = await createitem("Monitor 24 Pol.", 1999.95, 3);
const item4 = await createitem("PC Gamer", 14000.99, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);

await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);

await cartService.removeItem(myCart, item3)
await cartService.removeItem(myCart, item3)

await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);

// await cartService.deleteItem(myCart, "PC Gamer");

