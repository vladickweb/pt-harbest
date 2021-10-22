import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import './CreateProduct.css'
import Swal from 'sweetalert2'

export default function CreateProduct(props) {
	const { productService, fetchProducts, countPages, createPages, countProducts, setPage } = props

	const [ name, setName ] = useState(null)
	const [ description, setDescription ] = useState(null)
	const [ price, setPrice ] = useState(null)
	const [ SKU, setSKU ] = useState(null)
	const [ active, setActive ] = useState(false)

	const history = useHistory()

	const handleSubmit = e => {
		e.preventDefault()
		productService
			.create({ name, description, price, SKU, active })
			.then(res => {
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Producto creado!',
					showConfirmButton: false,
					timer: 1500
				})
				fetchProducts()
				createPages()
				countProducts()
				countPages()
				setPage(0)
				history.push('/productos')
			})
			.catch(err => console.log(err))
	}

	return (
		<div className='header-image'>
			<div className='container'>
				<div className='row justify-content-center transparency  align-items-center'>
					<div className='col-md-8'>
						<h1>Crear producto</h1>
						<form className='mt-5' onSubmit={e => handleSubmit(e)}>
							<div className='form-group mb-5'>
								<label>
									<b>Nombre</b>
								</label>

								<input
									name='name'
									type='text'
									className='form-control custom-form'
									aria-describedby='emailHelp'
									autoComplete='off'
									placeholder='Introduce el nombre'
									onChange={e => setName(e.target.value)}
									required
								/>
							</div>
							<div className='form-group mb-5'>
								<label>
									<b>Descripción</b>
								</label>
								<textarea
									className='form-control custom-form'
									name='description'
									onChange={e => setDescription(e.target.value)}
									required
								/>
							</div>
							<div className='form-group mb-5'>
								<label>
									<b>Precio</b>
								</label>

								<input
									name='price'
									step='0.01'
									type='number'
									className='form-control custom-form'
									autoComplete='off'
									placeholder='Introduce el precio'
									onChange={e => setPrice(parseFloat(e.target.value))}
									required
								/>
							</div>
							<div className='form-group mb-5'>
								<label>
									<b>SKU</b>
								</label>

								<input
									name='SKU'
									type='text'
									className='form-control custom-form'
									autoComplete='off'
									placeholder='Introduce el SKU'
									onChange={e => setSKU(e.target.value)}
									required
								/>
							</div>
							<div className='form-check mb-5'>
								<label className='form-check-label'>
									<input
										type='checkbox'
										className='form-check-input'
										onChange={e => setActive(e.target.checked)}
									/>
									<b>¿Producto activo?</b>
								</label>
							</div>
							<div className='row justify-content-center'>
								<button type='submit' className='btn btn-primary mb-4'>
									Confirmar
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
	)
}
