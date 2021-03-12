import { React, useState } from 'react';


import './Home.css'
import toss from "./toss.gif"

function Home() {

  // Variable that store Edit Able or not Edit Able css 
  let non_edit

  const [nonEdit, setnonEdit] = useState(true)

  if (nonEdit) {

    non_edit = { pointerEvents: "none", backgroundColor: "green", color: "#fff" }

  } else {

    non_edit = { backgroundColor: "#fff", color: "#000" }
    
  }

  return (
    <div className="main-area">

      <h1 className="heading-h1">Let's Play Typing Speed Game</h1>
      <h2>Remaining Time =  60 s </h2>
      <img src={toss} style={{ width: "250px", height: "100px", paddingBottom: "20px" }} />

      <div className="textAreaStyle">
        <textarea cols="100" rows="20" style={non_edit} />
      </div>

      <button className="button-start">Start</button>

    </div>
  )
}


export default Home