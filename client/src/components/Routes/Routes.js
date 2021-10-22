import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CreateProduct from '../views/CreateProduct/CreateProduct'
import Home from '../views/Home/Home'
import ListProducts from '../views/ListProducts/ListProducts'
import UpdateProduct from '../views/UpdateProduct/UpdateProduct'

const Routes = props => {
	return (
		<Switch>
			<Route exact path='/' render={() => <Home />} />
			<Route exact path='/productos' render={() => <ListProducts {...props} />} />
			<Route exact path='/crear-producto' render={() => <CreateProduct {...props} />} />
			<Route path='/editar/:id' render={() => <UpdateProduct {...props} />} />
		</Switch>
	)
}

export default Routes