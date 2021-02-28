import { Fragment } from "react"

function Child() {

    return (
          
      //   <Fragment>
      //         <h1> I am From Child Class ! </h1>
      //         <p>Example of Fragment</p>
      //   </Fragment>

// We can Also Use Fragment 
<>
<Fragment>
              <h1> I am From Child Class ! </h1>
              <p>Example of Fragment</p>
        </Fragment>
</>


      )

}

export default Child