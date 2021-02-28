import logo from './logo.svg';
import './App.css';
import Child from './01_Fragment/Child'
import Design from './02_Default_props/Design'
import Biodata from './03_Props_Types/Biodata';
import CallOut from './04_React_Children/CallOut';

function App() {
  return (
    <div className="App">
           {/* 01. Fragment  ******************************* 
          <Child/>
        
          02. Default Props 
         <Design />

          03. Props Types 
        <Biodata name="SRK" age="22" occupation="Actor" info="SRK is very popular Actor in the Worls.He is very popular in Asia"></Biodata>

         04. CallOut 
           */ }

         <CallOut>
                <h2>Don't miss out!</h2>
                <p>Unless you don't suffer from FOMO, you better make sure you fill out the email form below!</p>
            </CallOut>
            
            
            <CallOut>
                <img src="https://picsum.photos/id/102/4320/3240" width="500px" />
                <figcaption>Just look at those sparkling raspberries!</figcaption>
            </CallOut>
            
            
            <CallOut>
                <h2>Give us your email. We definitely won't sell it to anyone.</h2>
                <input type="email" placeholder="Enter Email"/>
                <button>Sign me up!</button>
            </CallOut>


    </div>
  );
}

export default App;
