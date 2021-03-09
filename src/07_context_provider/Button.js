import React, {Component} from "react"
import ThemeContext from './ThemeContext';

class Button extends Component {

    //    As It is class Component We can Write  
    //     static contextType = ThemeContext

    themeToggleHandler = ()  =>  {
        console.log("BD 001 "+ Math.random)
        this.context.value = "light"
    }

    render() {

        const theme = this.context
        console.log(theme)
        return (
            <button  className={theme+"-theme"}>Switch Theme</button>
        )    
    }
}


// We can use it both in Class and Functional Component
Button.contextType = ThemeContext


export default Button