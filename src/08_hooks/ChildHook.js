import { React,useState } from 'react';


function ChildHook(props) {

    const [childText,setchildText] = useState("Hello Bangladesh")

    const [count,setCount] =  useState(0)


  function decrement(){
      setCount( (prevCount) => {

          return prevCount - 1
          
      }

      )
  }


    return (
        <div>
            <h1> {childText} </h1>
            
            <hr />
            <br />
            <h1>Current Number = {count}</h1>
            <button onClick={() => setCount(prevCount =>  prevCount + 1) }>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    )
}


export default ChildHook