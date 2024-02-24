import CartDao from "./DAOs/cart/cart.dao.js";
import ProductDao from "./DAOs/product/product.dao.js";

import CartRepository from "./repository/cart.repository.js";
import ProductRepository from "./repository/product.repository.js";


const productDao = new ProductDao()
const cartDao = new CartDao()

export const productService = new ProductRepository(productDao)
export const cartService = new CartRepository(cartDao)
