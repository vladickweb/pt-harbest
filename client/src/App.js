import './App.css'
import { useEffect, useState } from 'react'
import ProductService from './services/ProductService'
import Routes from './components/Routes/Routes'

const App = () => {
	const [ products, setProducts ] = useState(null)
	const [ numberOfProducts, setNumberOfProducts ] = useState(0)
	const [ page, setPage ] = useState(0)
	const [ numberOfPages, setNumberOfPages ] = useState(0)
	const [ pages, setPages ] = useState([])
	const [ filter, setFilter ] = useState('all')

	const productService = new ProductService()

	useEffect(
		() => {
			fetchProducts()
			createPages()
			countProducts()
			countPages()
		},
		[ filter ]
	)

	useEffect(() => {
		countProducts()
		fetchProducts()
	}, [])

	useEffect(
		() => {
			fetchProducts()
		},
		[ page ]
	)

	useEffect(
		() => {
			countPages()
		},
		[ numberOfProducts ]
	)

	useEffect(
		() => {
			createPages()
		},
		[ numberOfPages ]
	)

	const createPages = () => {
		const pages = []
		for (let i = 0; i < numberOfPages; i++) {
			pages.push(i + 1)
		}
		setPages(pages)
	}

	const countPages = () => {
		if (numberOfProducts % 5 === 0) {
			setNumberOfPages(numberOfProducts / 5)
		} else {
			setNumberOfPages(Math.floor(numberOfProducts / 5) + 1)
		}
	}

	const countProducts = () => {
		if (filter === 'all') {
			productService
				.count()
				.then(res => {
					const { data } = res
					setNumberOfProducts(data)
				})
				.catch(err => console.log(err))
		} else if (filter === 'actives') {
			productService
				.countActives()
				.then(res => {
					const { data } = res
					setNumberOfProducts(data)
				})
				.catch(err => console.log(err))
		} else if (filter === 'inactives') {
			productService
				.countInactives()
				.then(res => {
					const { data } = res
					setNumberOfProducts(data)
				})
				.catch(err => console.log(err))
		}
	}

	const fetchProducts = () => {
		if (filter === 'all') {
			productService
				.list(page)
				.then(res => {
					const { products } = res.data
					setProducts(products)
				})
				.catch(err => console.log(err))
		} else if (filter === 'actives') {
			productService
				.listActives(page)
				.then(res => {
					const { products } = res.data
					setProducts(products)
				})
				.catch(err => console.log(err))
		} else if (filter === 'inactives') {
			productService
				.listInactives(page)
				.then(res => {
					const { products } = res.data
					setProducts(products)
				})
				.catch(err => console.log(err))
		}
	}

	const handleChangePage = e => {
		const { value } = e.target
		setPage(parseInt(value - 1))
	}

	return (
		<div>
			<Routes
				handleChangePage={handleChangePage}
				products={products}
				numberOfProducts={numberOfProducts}
				page={page}
				setPage={setPage}
				numberOfPages={numberOfPages}
				pages={pages}
				productService={productService}
				fetchProducts={fetchProducts}
				countPages={countPages}
				createPages={createPages}
				countProducts={countProducts}
				setFilter={setFilter}
			/>
		</div>
	)
}

export default App
