import logo from './logo.svg';
import './App.css';
import Child from './01_Fragment/Child'
import Design from './02_Default_props/Design'
import Biodata from './03_Props_Types/Biodata';
import CallOut from './04_React_Children/CallOut';
import {withPointlessHOC} from "./05_Higher_Order/withPointLessHOC"
import {withExtraPropAdded} from "./05_Higher_Order/withExtraPropAdded"
import Favourite from './05_Higher_Order_practice_1/component/Favourite'
import Menu from './05_Higher_Order_practice_1/component/Menu';

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
          export default withExtraPropAdded(App);
          console.log(props)

        05.1. HOC - Practice Example 01
         <Favourite/>
         <Menu/>
           */ }
           
         <Favourite/>
         <Menu/>
    </div>

  );
}

export default App;
