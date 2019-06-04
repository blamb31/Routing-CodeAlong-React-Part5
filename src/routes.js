import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Store from './Components/Store'
import StoreLanding from './Components/StoreLanding'
import Products from './Components/Products'

export default (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/store' render={props => {
            return(
                <Store {...props} >
                    <Switch>
                        <Route path='/store' exact component={StoreLanding} />
                        <Route path='/store/products/:category' component={Products} />
                        
                        <Route path='/store/products' component={Products} />
                    </Switch>
                </Store>
            )
        }} />
    </Switch>
)