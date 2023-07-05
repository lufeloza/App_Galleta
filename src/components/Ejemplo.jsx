import axios from "axios"
import { useState, useEffect } from "react"
const City = () => {

    let latitude
    let longitude
    const [ city, setCity ] = useState({})
    
    
    
    useEffect(() =>{
                navigator.geolocation.getCurrentPosition(position => {
                     latitude = position.coords.latitude
                     longitude = position.coords.longitude
                     let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=69b4289ef8cc5d720923a84d432f017b&units=metric&lang=sp, es`
                     console.log(url)
                     
                        axios
                        .get(url)
                        //.get('https://api.openweathermap.org/data/2.5/weather?lat=4.1549824&lon=-74.8879872&appid=69b4289ef8cc5d720923a84d432f017b&units=metric')
                        .then(resp => {
                            setCity(resp.data)
                            console.log(resp.data)
                            
                        })
                        .catch( error => console.error(error))
                    })

            }, [])
//    let img ={
//         "01d":"1.png",
//         "02d":"2.png",
//         "03d":"3.png",
//         "04d":"4.png",
//         "09d":"5.png",
//         "10d":"6.png",
//         "11d":"7.png",
//         "13d":"8.png",
//         "50d":"9.png"
//    }
    let img = `https://openweathermap.org/img/wn/${city.weather?.[0].icon}@2x.png`
    return(
        <>
         <div className="container">
            <div>
                <h2>{city.name}</h2>
                <img src={`${img}`} alt="" />
            </div>
            <h2>{city.weather?.[0].description}</h2>
            <div className="container-temp">
                <h2> {city.main?.temp}°C</h2>
                <i className="fa-solid fa-temperature-three-quarters"></i>
            </div>
           
         </div>
            
           
            
        </>
    )
}

export default City