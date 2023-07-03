import axios from 'axios'
import { useEffect, useState } from 'react'

function Climater() {
 
    let latitud
    let longitud
    navigator.geolocation.getCurrentPosition(position => {
    latitud =position.coords.latitude;
    longitud =position.coords.longitude;
    console.log(latitud)
    console.log(longitud)   
    
    // const [climater, setClimater] = useState({})
    //   useEffect(() =>{
    //     axios
    //       .get('https://api.openweathermap.org/data/2.5/weather?lat=4.4442585&lon=-75.2128654&appid=69b4289ef8cc5d720923a84d432f017b')
    //       .then(resp => {
    //         console.log(resp.data)
    //         // setClimater(resp.data)
            
    //       })
          
    //       .catch( error => console.error(error))
    
    //   }, [])
});

    return (
      <>
       <h1>hola</h1> 
       <h2>{}</h2>
      </>
    );
  }
  export default Climater;