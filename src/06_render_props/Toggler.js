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

      return(
          <div>
              
          {this.props.render(this.state.show,this.toggle)}

          </div>
         )      
  }
}



export default Toggle