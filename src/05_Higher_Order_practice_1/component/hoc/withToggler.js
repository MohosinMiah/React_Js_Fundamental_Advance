import { func } from 'prop-types';
import { React,Component } from 'react';
import { render } from '@testing-library/react';

class Toggle extends Component {
    state = {
        show : true
    }

   toggle= ()=> {
       this.setState( prevState => {
         return {
             show : !prevState.show
         }
       }
        );
   }
  
  render(){

    const Component = this.props.component

      return(
            <Component on={this.state.show} toggle={this.toggle} {...this.props} />
        )      
  }
}




export default function withToggler(component) {


    return function(props) {
        return <Toggle  component={component} {...props} />
    }
}