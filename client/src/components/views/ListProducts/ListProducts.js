import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook'
import './ListProducts.css'

export default function ListProducts(props) {
	const { products, setFilter, setPage } = props

	const handleFilter = e => {
		setFilter(e.target.value)
		setPage(0)
	}

	const displayProducts = () => {
		return props.products.map(elm => {
			const { active, name, description, _id, price } = elm

			return active ? (
				<div key={_id} className='col-12 col-md-6 mb-5'>
					<div className='card shadow-lg custom-border-success'>
						<div className='card-body'>
							<h5>{name}</h5>
							<p>{description}</p>
							<p className='text-bold'>Precio: {price}€/Kg</p>
							<div className='row'>
								<div className='col'>
									<Link to={`/editar/${_id}`}>
										<button className='btn btn-primary'>Editar</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className='col-12 col-md-6 mb-5'>
					<div className='card shadow-lg custom-border-danger'>
						<div className='card-body'>
							<h5>{name}</h5>
							<p>{description}</p>
							<p className='text-bold'>Precio: {price}€/Kg</p>
							<div className='row'>
								<div className='col'>
									<Link to={`/editar/${_id}`}>
										<button className='btn btn-primary'>Editar</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		})
	}

	return (
		<div className='header-image'>
			<div className='container transparency'>
				<div className=' '>
					<h1 className='text-center my-5'>Nuestros productos:</h1>
					<div className='row text-center mb-3'>
						<div className='col-6'>
							<Link to='/crear-producto'>
								<button className='btn-dark btn'>crear producto</button>
							</Link>
						</div>
						<div className='col-6'>
							<div className='row'>
								<div className='col-12'>
									<button className='btn btn-dark' value='actives' onClick={e => handleFilter(e)}>
										filtrar activos
									</button>
									<button
										className='btn btn-dark mx-1'
										value='inactives'
										onClick={e => handleFilter(e)}
									>
										filtrar inactivos
									</button>
									<button className='btn btn-dark' value='all' onClick={e => handleFilter(e)}>
										mostrar todos
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='row custom-height'>
						{products ? displayProducts() : <div>loading...</div>}

						<div className='row justify-content-center text-center align-items-end'>
							<Pagination {...props} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
