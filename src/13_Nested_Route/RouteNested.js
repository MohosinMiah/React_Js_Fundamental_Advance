import { React } from 'react';
import {Link,Route,Switch} from "react-router-dom"
import { render } from '@testing-library/react';
import MainHome from './MainHome';
import Menu from './profile/Menu';

function RouteNested() {

    return (
        <div>
            <h1>Route Nested Page</h1>
            <nav>
            <Link to="/" > Home </Link>
            <br />
            <Link to="/profile" > Profile </Link>
            </nav>

            <Switch>
            <Route exact path="/">  <MainHome />  </Route>
            <Route  path="/profile">  <Menu />  </Route>
                
            </Switch>
        </div>
    )
    
}

export default RouteNested
