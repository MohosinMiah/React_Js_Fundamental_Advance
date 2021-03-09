
import React, {Component} from "react"
import ThemeContext from './ThemeContext';


class Header extends Component {

    //    As It is class Component We can Write  
    //     static contextType = ThemeContext


    render() {
        
         const theme = this.context
        return (
            <header className={theme+"-theme"}>
                <h2>{theme} Theme</h2>
            </header>
        )    
    }
}

// We can use it Both Function and Class Component

Header.contextType = ThemeContext

export default Header
