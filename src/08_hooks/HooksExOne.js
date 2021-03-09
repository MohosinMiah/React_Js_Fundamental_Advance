import React,{useState} from "react"


function HooksExOne(params) {
    
  const [value,setValue] = useState("Hello World! I love you so much. Are you here me.That's great to hear all short of things.")
  console.log(value)
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={(prevValue) => setValue("Change as Text is now display")  }>Change Text</button>
        </div>
    )


}

export default HooksExOne