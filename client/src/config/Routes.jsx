import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Home from '../pages/Home';
import Register from '../pages/register/Register';


const Routes = () => {
    return (
        <Switch>
            <Route path="/register" component={Register} />
            <Route 
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route 
                path='/:category/:id'
                component={Detail}
            />
            <Route 
                path='/:category/'
                component={Catalog}
            />
            <Route 
                path='/'
                component={Home}
                exact
            />
        </Switch>
    )
}

export default Routes
