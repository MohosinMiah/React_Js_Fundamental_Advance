import { React } from 'react';
import {useParams} from "react-router-dom"
import servicesData from "./servicesData"

function ServiceDetails(){

    const {serviceId} = useParams()

    const service = servicesData.find((service) => service._id == serviceId)

 return(
     <div>
         <h1>Service Details</h1>
         <hr />
         <h1>ID : {service._id} </h1>
         <h1>Name : {service.name} </h1>
         <h1>Price : ${service.price}</h1>
         <hr />
         <p>{service.description}</p>
     </div>
 )

}

export default ServiceDetails
