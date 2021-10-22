import { Router } from 'express'
import * as productsController from './products.controller.js'

const router = Router()

router.get('/', productsController.test)

router.get('/get-products/:page', productsController.listProducts)

router.get('/get-one/:id', productsController.getOne)

router.post('/create-product', productsController.createProduct)

router.put('/edit-product', productsController.editProduct)

router.delete('/remove/:id', productsController.removeProduct)

router.get('/count-products', productsController.countProducts)

router.get('/get-products-actives/:page', productsController.listProductsActives)

router.get('/get-products-inactives/:page', productsController.listProductsInactives)

router.get('/count-product-actives', productsController.countProductsActives)

router.get('/count-product-inactives', productsController.countProductsInactives)

export default router
