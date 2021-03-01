import logo from './logo.svg';
import './App.css';
import Child from './01_Fragment/Child'
import Design from './02_Default_props/Design'
import Biodata from './03_Props_Types/Biodata';
import CallOut from './04_React_Children/CallOut';
import {withPointlessHOC} from "./05_Higher_Order/withPointLessHOC"
import {withExtraPropAdded} from "./05_Higher_Order/withExtraPropAdded"

function App(props) {
  return (
    <div className="App">
           {/* 01. Fragment  ******************************* 
          <Child/>
        
          02. Default Props 
         <Design />

          03. Props Types 
          <Biodata name="SRK" age="22" occupation="Actor" info="SRK is very popular Actor in the Worls.He is very popular in Asia"></Biodata>

         04. CallOut 

         05. Higher Order Component

           */ }
  <h1>Hello</h1>
         
    {console.log(props)}
    </div>

  );
}

export default withExtraPropAdded(App);
