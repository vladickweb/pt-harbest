import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function UpdateProduct(props) {
	const params = useParams()
	const history = useHistory()
	const { productService, fetchProducts, countPages, createPages, countProducts, setPage } = props
	const [ product, setProduct ] = useState(null)
	const [ name, setName ] = useState(null)
	const [ description, setDescription ] = useState(null)
	const [ price, setPrice ] = useState(null)
	const [ SKU, setSKU ] = useState(null)
	const [ active, setActive ] = useState(null)
	const [ id, setId ] = useState(null)

	useEffect(() => {
		productService
			.one(params.id)
			.then(product => {
				const { name, description, active, price, SKU, _id } = product.data
				setProduct(product.data)
				setName(name)
				setDescription(description)
				setActive(active)
				setPrice(price)
				setSKU(SKU)
				setId(_id)
			})
			.catch(err => console.log(err))
	}, [])

	const handleSubmit = e => {
		e.preventDefault()
		productService
			.edit({ name, description, active, price, SKU, id })
			.then(res => {
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Editado con exito',
					showConfirmButton: false,
					timer: 1500
				})
				history.push('/productos')
			})
			.catch(err => console.log(err))
	}

	const removeProduct = (e) => {
		e.preventDefault()
		productService
			.delete(id)
			.then(res => {
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Producto eliminado',
					showConfirmButton: false,
					timer: 1500
				})
				countProducts()
				setPage(0)
				fetchProducts()
				countPages()
				createPages()
				history.push('/productos')
			})
			.catch(err => console.log(err))
	}

	return (
		<div>
			{product && (
				<div className='header-image'>
					<div className='container'>
						<div className='row justify-content-center transparency align-items-center'>
							<div className='col-md-8'>
								<h1>Editar producto</h1>
								<form className='mt-5' onSubmit={e => handleSubmit(e)}>
									<div className='form-group'>
										<label>
											<b>Nombre</b>
										</label>

										<input
											name='name'
											type='text'
											className='form-control mb-5'
											aria-describedby='emailHelp'
											autoComplete='off'
											placeholder='Introduce el nombre'
											onChange={e => setName(e.target.value)}
											required
											value={name}
										/>
									</div>
									<div className='form-group'>
										<label>
											<b>Descripción</b>
										</label>
										<textarea
											className='form-control mb-5'
											name='description'
											onChange={e => setDescription(e.target.value)}
											required
											value={description}
										/>
									</div>
									<div className='form-group'>
										<label>
											<b>Precio</b>
										</label>

										<input
											name='price'
											step='0.01'
											type='number'
											className='form-control mb-5'
											autoComplete='off'
											placeholder='Introduce el precio'
											onChange={e => setPrice(parseFloat(e.target.value))}
											required
											value={price}
										/>
									</div>
									<div className='form-group'>
										<label>
											<b>SKU</b>
										</label>

										<input
											name='SKU'
											type='text'
											className='mb-5 form-control'
											autoComplete='off'
											placeholder='Introduce el SKU'
											onChange={e => setSKU(e.target.value)}
											required
											value={SKU}
										/>
									</div>
									<div className='form-check'>
										<label className='form-check-label mb-4'>
											{active ? (
												<input
													type='checkbox'
													className='form-check-input'
													onChange={e => setActive(e.target.checked)}
													checked
												/>
											) : (
												<input
													type='checkbox'
													className='form-check-input'
													onChange={e => setActive(e.target.checked)}
												/>
											)}
											<b>¿Producto activo?</b>
										</label>
									</div>
									<div className='row justify-content-center'>
										<button type='submit' className='btn btn-primary mb-4'>
											Confirmar
										</button>
										<button className='btn btn-danger mb-4' onClick={(e) => removeProduct(e)}>
											Eliminar
										</button>
										<button className='btn btn-dark' onClick={() => history.push('/productos')}>
											Volver
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
