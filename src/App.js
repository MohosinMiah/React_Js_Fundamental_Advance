import logo from './logo.svg';
import './App.css';
import Child from './01_Fragment/Child'
import Design from './02_Default_props/Design'
import Biodata from './03_Props_Types/Biodata';
import CallOut from './04_React_Children/CallOut';
import {withPointlessHOC} from "./05_Higher_Order/withPointLessHOC"
import {withExtraPropAdded} from "./05_Higher_Order/withExtraPropAdded"
import Favourite from './06_render_props/Favourite'
import Menu from './06_render_props/Menu'
// import Favourite from './06_render_props/05_Higher_Order_practice_1/component/Favourite';
// import Menu from './06_render_props/05_Higher_Order_practice_1/component/Menu';
import DataFetcher from './06_render_props/DataFetcher';
import Header from './07_context_provider/Header';
import Button from './07_context_provider/Button';
import HooksExOne from './08_hooks/HooksExOne';
import HandleInput from "./08_hooks/HandleInput"

import ChildHook from './08_hooks/ChildHook'
import Home from './typing_monstar_game/Home';
import UseRefExample from './09_useRef/useRefExample';
import Counter from './10_Custom_Hocks/basic/Counter';
import RouterBasic from './11_Router_Intro/RouterBasic';
import SwitchRoute from './12_Switch_Route/SwitchRoute';
import RouteNested from './13_Nested_Route/RouteNested';
import HomeParames from './14_UseParams_React_Route/HomeParames';
import HeaderUse from './14_UseParams_React_Route/HeaderUse';

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

        06. Render Props
         <Favourite/>
         <Menu/>

         06.1 Render Props Example
 .....................................
         <div>
            <DataFetcher url="https://swapi.dev/api/people/2/">
                {(data, loading) => {
                    return (
                        
                        loading ? 
                        <h1>Loading...</h1> :
                        <p>{JSON.stringify(data)}</p>
                    )
                }}
            </DataFetcher>
        </div>
.................................................................
         
      07. Context Provider 
        <Header />
        <Button />

      08.1 useState() example One  

      08.1.1 useState() example   

      08.1.2 useState() Form Data Handle Using Hooks   

      <HooksExOne />
     
      <ChildHook />
    
      <HandleInput />

      09. Typing Mon Star Game
    <Home />

      09. Use Ref Example == To Do List
          <UseRefExample />

      10. Custom Hooks - useState() Example One = Increment Functionality using Custom Hooks - 10.0
        <Counter />

      11. Use Custom Hooks replacing of Render Props
         <Favourite/>
         <Menu/>  

      12. Use Custom Hooks in Typing Speed Game
      <Home />
   =========================================================================================
   ************   React Route **************************************************************
   13.  BrowserRouter 
   13.1  Link Example
   14. Switch and Route
   15.Nested Route Example
   14. useParames() React Router
     <HeaderUse />

   useRouteMatch Example shows in   = Nested Route Example


           */ }
           <RouteNested />


    </div>

  );
}


export default App;
