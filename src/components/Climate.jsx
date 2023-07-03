function Climater() {
 
    let latitud
    let longitud
    navigator.geolocation.getCurrentPosition(position => {
    latitud =position.coords.latitude;
    longitud =position.coords.longitude;
    console.log(latitud)
    console.log(longitud)   
});

    return (
      <>
       <h1>`${longitud}`</h1> 
      </>
    );
  }
  export default Climater;