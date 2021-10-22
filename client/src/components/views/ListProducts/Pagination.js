import React, { useState, useEffect } from 'react'

export default function Pagination(props) {
	const { page, handleChangePage, pages } = props

	const displayPages = () => {
		return pages.map((elm, idx) => {
			return (
				<li key={idx} className='page-item'>
					<button
						className='page-link py-2 text-dark'
						href='#'
						value={elm}
						onClick={e => props.handleChangePage(e)}
					>
						{elm}
					</button>
				</li>
			)
		})
	}

	return (
		<div className=''>
			<nav aria-label='Page navigation example'>
				<ul className='pagination justify-content-center'>
					{page > 0 ? (
						<li className='page-item'>
							<button
								className='page-link py-2 text-dark'
								href='#'
								value={page}
								onClick={e => handleChangePage(e)}
							>
								Anterior
							</button>
						</li>
					) : (
						<li className='page-item'>
							<button
								className='page-link text-secondary py-2'
								disabled
								href='#'
								value={page}
								onClick={e => handleChangePage(e)}
							>
								Anterior
							</button>
						</li>
					)}
					{displayPages()}

					{page < pages[pages.length - 2] ? (
						<li className='page-item'>
							<button
								className='page-link text-dark py-2'
								href='#'
								value={page + 2}
								onClick={e => props.handleChangePage(e)}
							>
								Siguiente
							</button>
						</li>
					) : (
						<li className='page-item'>
							<button
								disabled
								className='page-link text-secondary py-2'
								href='#'
								value={page + 2}
								onClick={e => props.handleChangePage(e)}
							>
								Siguiente
							</button>
						</li>
					)}
				</ul>
			</nav>
		</div>
	)
}
