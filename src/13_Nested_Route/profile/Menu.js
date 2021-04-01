import { React } from 'react';
import {Link,Route,Switch} from "react-router-dom"
import Setting from './Setting';
import Profile from './Profile';

function Menu(){
    return(
        <div>
            <h1>Hello Profile Setting Nested Menu</h1>
            <nav>
            <Link to="/profile/profile" >Profile Info</Link>
            <br />

            <Link to="/profile/setting" >Profile Settings</Link>
            </nav>

            {/* <Switch>
            <Route path="/profile/profile"  render={() => <h1>Profile Profile</h1>}></Route>
            <Route path="/profile/setting"  render={() => <Setting />}></Route>
            </Switch> */}

            <Switch>

            <Route path="/profile/profile"  ><Profile /></Route>
            <Route path="/profile/setting"  > <Setting /></Route>

            </Switch>

        </div>
    )
}

export default Menu
