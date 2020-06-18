import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import Home from './pages/Home'
import MyOrders from './pages/MyOrders'


//import components down here.




const Router =()=>{
    return(
        <Switch>
            <Route path='/Home' component={Home}/>
            <Route path='/MyOrders' component={MyOrders}/>
            <Redirect from='/' to="/Home"/>            
        </Switch>
    )
}

export default Router;