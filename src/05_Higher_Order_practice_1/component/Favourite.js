
import { React,Component } from 'react';
import withToggler from "./hoc/withToggler"

class Favourite extends Component {

    render() {
        return (
                    <div>
                        <h3>Click heart to favorite</h3>
                        <h1>
                            <span 
                                onClick={this.props.toggle}
                            >
                                {this.props.on ? "❤️" : "♡"}
                            </span>
                        </h1>
                    </div>
                ) 
    }
}


export default withToggler(Favourite)