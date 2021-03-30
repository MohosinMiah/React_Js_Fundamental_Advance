
import {useState} from "react"

function useToggler() {
    const [on,setOn] = useState(false)

   function toggler(){
       setOn(!on)
   } 
   
   return [on,toggler]   
    
}

export default useToggler