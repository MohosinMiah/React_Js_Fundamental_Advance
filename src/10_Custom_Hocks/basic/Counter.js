import { React,useState } from 'react';
import useCounter from "./useCounter"
function Counter() {

 const [number,increment] = useCounter()

    return(
        <div>
            <h2>Current Number {number}</h2>
             <button onClick={increment}>Add 1</button>

        </div>
    )
}


export default Counter