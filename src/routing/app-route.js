import React from 'react';
import { Switch, Route,  Link } from 'react-router-dom';
import './app-route.css';
import Intro from '../features/intro/intro';
import Order from '../features/order/order.container';

function AppRoute() {
    return (
        <>
            <nav>
                <Link to="/">Intro</Link>
                <Link to="/order">Order</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={Intro} />
                <Route path="/order" component={Order} />
            </Switch>
        </>
    );
}

export default AppRoute;