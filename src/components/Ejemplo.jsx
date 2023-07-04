import axios from "axios"
import { useState, useEffect } from "react"
const City = () => {

    let latitude
    let longitude
    navigator.geolocation.getCurrentPosition(position => {
         latitude = position.coords.latitude
         longitude = position.coords.longitude
         console.log(latitude)
         console.log(longitude)
         let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=69b4289ef8cc5d720923a84d432f017b&units=metric`
         console.log(url)
         
        })
        const [ city, setCity ] = useState({})
        
       
        useEffect(() =>{
           axios
            .get(`${url}`)
            .then(resp => {
                console.log(resp.data)
                setCity(resp.data)
        })
            .catch( error => console.error(error) )
        }, [])
    

          
   
     
   

//     let temp =city.main?.temp

    return(
        <>
            <h1>name</h1>
            <h2>temp</h2>
            {/* <h2>{city.weather[0]?.main}</h2> */}
            
        </>
    )
}

export default City