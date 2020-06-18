import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import Coffee from './components/Coffee'
import Tea from './components/Tea'
import Treats from './components/Treats'


//import components down here.




const HomeRouter =()=>{
    return(
        <Switch>
            
            <Route path='/Home/Coffee' component={Coffee}/>
            <Route path='/Home/Tea' component={Tea}/>
            <Route path='/Home/Treats' component={Treats}/>
            <Redirect from='/Home' to="/Home/Coffee"/>            
        </Switch>
    )
}

export default HomeRouter;