import { Fragment } from "react";

import PropTypes from 'prop-types';

function Biodata (props) {


    return (
        <div style={{ border:'1px solid red',margin:'100px', }}>
            <h1>Name : {props.name} </h1>
            <h1>Age : {props.age} </h1>
            <h1>Occupation : {props.occupation} </h1>
            <h1>Details Info : {props.info} </h1>

        </div>
    )
}


Biodata.propTypes = {
  name: PropTypes.string
}



export default Biodata