//import express
const express = require('express')

//Router()              Router-it setup oro path in browser, Router is predefined in express for setup path
const router = new express.Router()
//import controller
const controllers = require('../controller/productController')
//import wishlistcontroller
const wishlistcontroller = require('../controller/wishlistController')
//cart controller import
const cartController = require('../controller/cartController')


//here first path define for all products that comes our first page in our project to pet items from mongodb to here theres a calling by,
//get-all-products             '/'1st put for connecting localhost:3000,then path,

// router.http-request(path,callback to define logic to resolve api) 
router.get('/products/get-all-products',controllers.getallproducts)
//router for view single product deatails
router.get('/products/:id',controllers.viewproduct)
//router for add to wishlist
router.post('/products/add-to-wishlist',wishlistcontroller.addToWishlist)
//route for get all wishlist item
router.get('/wishlist/get-all-items',wishlistcontroller.getAllWishlistItems)
//route for removing an item from wishlist
router.delete('/wishlist/remove-item/:id',wishlistcontroller.removeWishlistItems)
//route for adding item to cart
router.post('/products/add-to-cart',cartController.addToCart)
//route for get all cart items
router.get('/cart/get-all-items',cartController.getCartItems)
//route for remove item from class
router.delete('/cart/item/:id',cartController.removeCartItem)
//route for increment cart item
router.get('/cart/increment-item/:id',cartController.incrCartItem)
//route for decrement cart item
router.get('/cart/decrement-item/:id',cartController.decrCartItem)
//route for empty cart
router.delete('/cart/empty-cart',cartController.emptyCart)

//export router
module.exports =router
