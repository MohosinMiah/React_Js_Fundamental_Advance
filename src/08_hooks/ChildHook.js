import React, {useState, useEffect} from "react"


function ChildHook(props) {

    const [childText,setchildText] = useState("Hello Bangladesh")

    const [count,setCount] =  useState(0)

    const [color, setColor] = useState("")

  function decrement(){
      setCount( (prevCount) => {

          return prevCount - 1

      }

      )
  }

// useEffect()  second parameter fine based on which value It will effect

  useEffect(() => {

    setColor("#" + ((1<<24)*Math.random() | 0).toString(16) )

    }, [count])


    return (
        <div>
            <h1> {childText} </h1>
            
            <hr />
            <br />
            <h1 style={{ color:color }}>Current Number = {count}</h1>
            <button onClick={() => setCount(prevCount =>  prevCount + 1) }>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    )
}


export default ChildHook