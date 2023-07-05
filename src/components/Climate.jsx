 import { useEffect, useState } from 'react'

function Climater() {
  
          const [isColor, setIsColor] = useState(true)   
          const changeColor = ()=>{
           setIsColor(!isColor) 
                    
          }
    console.log(isColor)
          useEffect(()=> {
          console.log('Render');
          if(isColor===false){
              document.body.style = `background: radial-gradient(circle, #D5F3FF 0%, black)`
          }else{
              document.body.style = `background: radial-gradient(circle, #D5F3FF 0%, #51B4E8)`
          }
 
          },[isColor])// Hace que se ejecute la logica solo cuando uso el boton de ocultar contraseña
    return (
      <>
       <input type="checkbox" id="switch" /><label for="switch" onClick={changeColor}>Toggle</label>
      </>
    );
  }
  export default Climater;

// import './App.css'
// import { useEffect, useState } from 'react';
// function App() {
//   // useEffect(()=> {
//   //   // codigo o efecto asociado al useEffect
//   //   // instruciones que se van a ejecutar en momento muy especificos del useEffect
//   // }, [])// el segundo argumento es opcioneal y es un arreglo de dependencia

//   const [isOn, setIson] = useState(true)
//   const changeBulb = () =>{
//     setIson(!isOn)
//   }
//   const [isVisible, setIsVisible] = useState(false)
//   const changePassword = ()=> setIsVisible(!isVisible)

//   const [counter, secCounter] = useState(0)
//   const incrementCounter = ()=> secCounter(counter + 1)

//     // useEffect SIN arreglo de dependencias
//     // El effecto se ejecuta de forma normal cuando el componente monta
//     // El efecto tambien se ejecuta cuando hay actualizaciones provocada por cualquiera de los estados
//     // el effecto solo se ejecuta una vez en la actualización

//     const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];
//     // useEffect(()=> {
//     //   console.log('Render')
//     //   document.body.style = `background-color: ${colors[Math.floor(Math.random()*5)]}`
//     // })

//     // useEffect CON areglo de dependencia
//     // Cuando el useEffect recibe un arreglo de dependencia es decir van a dependen de lo que se le agregle al arreglo de dependencia
// // useEffect(()=> {
// //   console.log('Render');
// //   document.body.style = `background-color: ${colors[Math.floor(Math.random()*5)]}`
// // },[])
// // useEffect  CON ARREGLO DE DEPENDENCIA
// // Los valores que provoquen actualizaciones son candidatos para ir al arreglo de dependencias
// // El efecto se ejecuta cuando la actualización es provocada por alguno de los valores dentro del arreglo de dependencias
// useEffect(()=> {
//   console.log('Render');
//   document.body.style = `background-color: ${colors[Math.floor(Math.random()*5)]}`
 
// },[isVisible])// Hace que se ejecute la logica solo cuando uso el boton de ocultar contraseña


//   return (
//     <>
//       <section className='container'>
//         <div className={`bulb ${isOn ? 'bulbOn':'bulbOff'}`}>

//         </div>
//         <button onClick={changeBulb}>Prender/Apagar</button>
//       </section> 
//       {/**crear un input que muestre y oculte la contraseña */}
//       <section className='container'>
//         <input type={isVisible ? 'text': 'password'} />
//         <button onClick={changePassword}>Ocultar/Mostrar</button>
//       </section>
//       <section className='container'>
//         <h2>{counter}</h2>
//         <button onClick={incrementCounter}>incrementar</button>
//       </section>
      
//       </>
//   );
// }

// export default App;
