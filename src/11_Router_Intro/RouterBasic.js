import { React } from 'react';
import {Link} from "react-router-dom"



function RouterBasic() {

    return(
        <div>
            <Link to="/" > Home</Link>
            <br />
            <Link to="/about"> About</Link>
        </div>
    )
}

export default RouterBasic
