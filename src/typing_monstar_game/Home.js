import { React, useState, useEffect, useRef } from 'react';


import './Home.css'
import toss from "./toss.gif"

function Home() {

  // Variable that store Edit Able or not Edit Able css 
  let non_edit

  const [wordLength,setwordLength] = useState(0)

  const [nonEdit, setnonEdit] = useState(true)

  const [counter, setCounter] = useState('Pending');

  const [wordCount,setwordCount] = useState("")
  
  // Store a reference to the input's DOM node
  const inputRef = useRef();


  if (nonEdit) {

    non_edit = { pointerEvents: "none", backgroundColor: "green", color: "#fff" }

  } else {

    non_edit = { backgroundColor: "#fff", color: "#000" }

  }


  useEffect(
    () => {
      // This runs AFTER the first render,
      // so the ref is set by now.
      inputRef.current.focus();
    },
		// The effect "depends on" inputRef
    [inputRef]
  );


  useEffect(() => {


    if (counter > 0) {
      console.log("Start Game")

      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

    }

    if (counter == 0) {
      setnonEdit((!nonEdit))
      console.log("NON EDIT CHANGED")
        setwordLength(wordCount.split(' ').length)

       console.log(wordLength)

    }

   

  }, [counter]);


  function startGameHandler() {

    setwordCount("")
    setnonEdit((!nonEdit))
    setCounter(5)

  }


  return (
    <div className="main-area">

      <h1 className="heading-h1">Let's Play Typing Speed Game</h1>
      <h2>Remaining Time =  {counter} s </h2>

      <img src={toss} style={{ width: "250px", height: "100px", paddingBottom: "20px" }} />

      <div className="textAreaStyle">
        <textarea cols="100" rows="20" style={non_edit}   

        ref={inputRef}
        value={wordCount}
        onChange={e => setwordCount(e.target.value)} 
        
        />

        {nonEdit == true  ? <p className="typedResult">Your Typied {wordLength } Words in a Minute (60 s).Start Game by clicking <strong className="heading-h1">Start Button</strong></p> : ""}

      </div>

      <button className="button-start" onClick={startGameHandler}>Start  </button>

    </div>
  )
}


export default Home