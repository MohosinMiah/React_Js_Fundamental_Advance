import { React,useState } from 'react';
import useCounter from "./useCounter"
function Counter() {

 const {count,increment} = useCounter()

    return(
        <div>
            <h2>Current Number {count}</h2>
             <button onClick={increment}>Add 1</button>

        </div>
    )
}


export default Counter