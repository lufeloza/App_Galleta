import { useState, useEffect } from "react";

function Climater() {
 
    let latitud
    let longitud
    navigator.geolocation.getCurrentPosition(position => {
    latitud =position.coords.latitude;
    longitud =position.coords.longitude;
    console.log(latitud)
    console.log(longitud)   
    const [country, setCountry] = useState({})
    useEffect(() =>{
      axios
        .get('https://restcountries.com/v3.1/name/colombia')
        .then(resp => {
          setCountry(resp.data[0])
          
        })
        
        .catch( error => console.error(error))
  
    }, [])
});

    return (
      <>
       <h1>`${longitud}`</h1> 
       {/* <h1>{country.name?.common}</h1> */}
       <h2>{country.name?.common}</h2>

      </>
    );
  }
  export default Climater;