import axios from "axios"
import { useState, useEffect } from "react"
const Character = () => {

    const [ city, setCity ] = useState({})
    let latitude
    let longitude
    navigator.geolocation.getCurrentPosition(position => {
         latitude = position.latitude
         longitude = position.longitude
    });    
    useEffect(() =>{
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=69b4289ef8cc5d720923a84d432f017b&units=metric`)
            .then(resp => {
            console.log(resp.data)
            setCity(resp.data)
    })
        .catch( error => console.error(error) )

    }, [])
    let temp =city.main?.temp

    return(
        <>
            <h1>{city.name}</h1>
            <h2>{temp}</h2>
            {/* <h2>{city.weather[0]?.main}</h2> */}
            
        </>
    )
}

export default Character