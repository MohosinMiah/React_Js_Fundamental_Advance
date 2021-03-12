import { React } from 'react';


import './Home.css'
import toss from "./toss.gif"

function Home () {
    return(
        <div className="main-area">
     
     <h1 className="heading-h1">Let's Play Typing Speed Game</h1>
       <h2>Remaining Time = <i class="fas fa-clock"></i>  60 s </h2>
     <img src={ toss } style={{ width:"250px",height:"100px", paddingBottom:"20px" }} />

       <div className="textAreaStyle">
       <textarea cols="100" rows="20"/>
       </div>
           
           <button className="button-start">Start</button>

        </div>
    )
}


export default Home