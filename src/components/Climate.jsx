// import axios from 'axios'
// import { useEffect, useState } from 'react'

function Climater() {
 
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
}); 
    
    
    return (
      <>
       <h1>hola</h1> 
       <h2></h2>
      </>
    );
  }
  export default Climater;