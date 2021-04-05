import React from "react"
import {Switch,Route,Link} from "react-router-dom"
import ServiceList from './ServiceList';
import ServiceDetails from './ServiceDetails';
import HomeParames from "./HomeParames"

function HeaderUse() {
    return (
        <div> 
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
        </header>

         <Switch>
             
        
                
         <Route exact path="/services" >
                    <ServiceList />
        </Route>

        <Route path="/services/:serviceId" >
                    <ServiceDetails />
        </Route>

       
            </Switch>

            </div>
    )
}

export default HeaderUse