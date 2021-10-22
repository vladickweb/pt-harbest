import axios from 'axios'

class ProductService {
	constructor() {
		this.instance = axios.create({
			baseURL: `${process.env.REACT_APP_BASE_URL}/products`
		})
	}

	list = page => this.instance.get(`/get-products/${page}`)
	one = id => this.instance.get(`/get-one/${id}`)
	create = data => this.instance.post('/create-product', data)
	edit = data => this.instance.put(`/edit-product`, data)
	delete = id => this.instance.delete(`/remove/${id}`)
	count = () => this.instance.get('/count-products')
	listActives = page => this.instance.get(`/get-products-actives/${page}`)
	listInactives = page => this.instance.get(`/get-products-inactives/${page}`)
	countActives = () => this.instance.get(`/count-product-actives`)
	countInactives = () => this.instance.get('/count-product-inactives')
}

export default ProductService
