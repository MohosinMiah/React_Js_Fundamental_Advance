import { React, useState, useEffect, useRef } from 'react';


import './Home.css'
import toss from "./toss.gif"
import useMonstar from './useMonstar';

function Home() {

  const [counter,non_edit,inputRef,wordCount,wordLength,startGameHandler,totalwordCount] = useMonstar()

  return (
    <div className="main-area">

      <h1 className="heading-h1">Let's Play Typing Speed Game</h1>
      <h2>Remaining Time =  {counter} s </h2>

      <img src={toss} style={{ width: "250px", height: "100px", paddingBottom: "20px" }} />

      <div className="textAreaStyle">
        <textarea cols="100" rows="20" style={non_edit}   

        ref={inputRef}
        value={wordCount}
        onChange={e => totalwordCount(e.target.value)} 
        
        />

        {wordLength > 0  ? <p className="typedResult">Your Typied {wordLength } Words in a Minute (60 s).Start Game by clicking <strong className="heading-h1">Start Button</strong></p> : ""}

      </div>

      <button className="button-start" onClick={startGameHandler}>Start  </button>

    </div>
  )
}


export default Home