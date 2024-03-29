import { useState,useRef,useEffect } from 'react';


function useMonstar() {
    
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
  setCounter(60)

}

function totalwordCount(value) {
    setwordCount(value)

}

return [counter,non_edit,inputRef,wordCount,wordLength,startGameHandler,totalwordCount]

}

export default useMonstar


// Same Thing but Written differnt Way. (Code from Bob)
// const STARTING_TIME = 5
    
// const [text, setText] = useState("")
// const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
// const [isTimeRunning, setIsTimeRunning] = useState(false)
// const [wordCount, setWordCount] = useState(0)
// const textBoxRef = useRef(null)

// function handleChange(e) {
//     const {value} = e.target
//     setText(value)
// }

// function calculateWordCount(text) {
//     const wordsArr = text.trim().split(" ")
//     return wordsArr.filter(word => word !== "").length
// }

// function startGame() {
//     setIsTimeRunning(true)
//     setTimeRemaining(STARTING_TIME)
//     setText("")
//     textBoxRef.current.disabled = false
//     textBoxRef.current.focus()
// }

// function endGame() {
//     setIsTimeRunning(false)
//     setWordCount(calculateWordCount(text))
// }

// useEffect(() => {
//     if(isTimeRunning && timeRemaining > 0) {
//         setTimeout(() => {
//             setTimeRemaining(time => time - 1)
//         }, 1000)
//     } else if(timeRemaining === 0) {
//         endGame()
//     }
// }, [timeRemaining, isTimeRunning])


