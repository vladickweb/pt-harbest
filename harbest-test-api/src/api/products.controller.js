import * as ProductsService from './products.service.js'
import productModel from './product.model.js'

function test(req, res, next) {
	try {
		const result = ProductsService.test()
		res.json(result)
	} catch (error) {
		return next(error)
	}
}

const listProducts = (req, res) => {
	const { page } = req.params

	productModel
		.find()
		.limit(5)
		.skip(5 * page)
		.then(products => {
			res.status(200).json({ products })
		})
		.catch(err => res.status(500).json({ code: 500, errMsg: err }))
}

const listProductsActives = (req, res) => {
	const { page } = req.params

	productModel
		.find({active: 'true'})
		.limit(5)
		.skip(5 * page)
		.then(products => {
			res.status(200).json({ products })
		})
		.catch(err => res.status(500).json({ code: 500, errMsg: err }))
}

const listProductsInactives = (req, res) => {
	const { page } = req.params

	productModel
		.find({active: false})
		.limit(5)
		.skip(5 * page)
		.then(products => {
			res.status(200).json({ products })
		})
		.catch(err => res.status(500).json({ code: 500, errMsg: err }))
}

const countProductsActives = (req, res) => {
productModel.count({active: 'true'}).then(number => res.status(200).json(number)).catch(err => res.status(500).json({ err }))
}

const countProductsInactives = (req, res) => {
productModel.count({active: 'false'}).then(number => res.status(200).json(number)).catch(err => res.status(500).json({ err }))
}

const createProduct = (req, res) => {
	const { description, SKU, active, price, name } = req.body

	productModel
		.create({ description, SKU, active, price, name })
		.then(product => res.status(200).json({ message: 'successfully created', product }))
		.catch(err => res.status(500).json({ message: 'failed creation', Code: 500, errMsg: err }))
}

const getOne = (req, res) => {
	const { id } = req.params

	productModel
		.findById(id)
		.then(product => res.status(200).json(product))
		.catch(err => res.status(500).json({ code: 500, errMsg: err }))
}

const editProduct = (req, res) => {
	const { id, description, SKU, active, price, name } = req.body

	productModel
		.findByIdAndUpdate(id, { description, SKU, active, price, name }, { new: true })
		.then(product => res.status(200).json({ message: 'updated successfully', product }))
		.catch(err => res.status(500).json({ message: 'update failed', errMsg: err }))
}

const removeProduct = (req, res) => {
	const { id } = req.params

	productModel
		.findByIdAndDelete(id)
		.then(product => res.status(200).json({ message: 'deleted successfully', product }))
		.catch(err => res.status(200).json({ message: 'error deleting product', errMsg: err }))
}

const countProducts = (req, res) => {
	productModel.count().then(number => res.status(200).json(number)).catch(err => res.status(500).json({ err }))
}

export { test, listProducts, createProduct, getOne, editProduct, removeProduct, countProducts, listProductsActives, listProductsInactives, countProductsActives, countProductsInactives }
