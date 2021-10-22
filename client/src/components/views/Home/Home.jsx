import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

export default function Home() {
	return (
		<div className='header-image text-center text-white'>
			<div className='text-home'>
				<h1 className='home-shadow'>Descubre nuestros productos más frescos</h1>
				<Link to='/productos'>
					<button className='btn-lg btn-light margin-button custom-button shadow-lg text-white' >Empieza ya</button>
				</Link>

				<div className='row'>
					<div className='col-3' />
					<div className='col-6'>
						<h3 className='home-shadow'>Conoce a nuestros Agricultores</h3>
					</div>
					<div className='col-3' />
					<div className='col farmer'>
						<img
							src='https://cdn.pixabay.com/photo/2014/08/07/14/26/people-412419_1280.jpg'
							alt='Antonio'
							height='100px'
						/>
						<div className='text-center mt-3'>
							<h5>Antonio</h5>
							<p>Agricultor en Madrid</p>
						</div>
					</div>

					<div className='col farmer'>
						<img
							src='https://harbestmarket.com/wp-content/uploads/2021/10/DSC_0168-600x900.jpg'
							alt='Mariano'
						/>
						<div className='text-center mt-3'>
							<h5>Mariano</h5>
							<p>Agricultor de Madrid</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
