
import {useState} from "react"

function useToggler(defaultOnValue = false) {
    const [on,setOn] = useState(defaultOnValue)

   function toggler(){
       setOn(!on)
   } 
   
   return [on,toggler]   
    
}

export default useToggler