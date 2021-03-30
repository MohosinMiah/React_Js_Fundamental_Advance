import React from "react"

import {Link, Switch, Route} from "react-router-dom"
import RouterAbout from "./RouterAbout"
import RouterHome from "./RouterHome"

function SwitchRoute() {
    
    return (
        <div>

        <div>
            <Link to="/" > Home</Link>
            <br />
            <Link to="/about"> About</Link>
            <br />
            
        </div>
            {/* Way Of Implement Method = 1 */}
           {/* <Switch>
           <Route path="/about" render={() => <h1>About Page</h1>}></Route>
           <Route path="/" render={() => <h1>Home Page</h1>}></Route>
           </Switch> */}

           {/* Way Of Implement Method = 2 */}
               
           {/* <Switch>

           <Route exact path="/" render={() => <h1>Home Page</h1>}></Route>

           <Route  path="/about" render={() => <h1>About Page</h1>}></Route>

           </Switch> */}


            {/* Way Of Implement Method = 3 */}

           <Switch>

           <Route exact path="/" > <RouterHome></RouterHome> </Route>
           <Route path="/about" component={RouterAbout}></Route>

           </Switch>

        </div>
    )
}


export default SwitchRoute