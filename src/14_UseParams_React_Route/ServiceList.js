import { React } from 'react';
import {Link} from "react-router-dom"
import servicesData from "./servicesData"

function ServiceList(){

 const services =  servicesData.map(service => {
     return (
         <div>
            <Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}
         </div>
     )
 }
     )

 return(
     <div>
         <h1>Services List</h1>
         {services}
     </div>
 )

}

export default ServiceList
