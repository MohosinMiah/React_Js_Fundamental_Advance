
import { render } from '@testing-library/react';
import { Component } from 'react';


// function Block(props) {
//     console.log(props)

//     return (
        
//         <div style={{ backgroundColor:"black" }}>
//          <h1 style={{ color:props.textColor }}>Block Class</h1>

//         </div>
//     )
// }


// // Specifies the default values for props:
// Block.defaultProps = {
//     textColor: 'green'
//   };
// export default Block


class Block extends Component {

static defaultProps = {

    textColor: 'green'

}


render () {

    return (
        <div style={{ backgroundColor:"black" }}>
            <h1 style={{ color:this.props.textColor }}>Block Class</h1>
        </div>
    )
}

}

export default Block