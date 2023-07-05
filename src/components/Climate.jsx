 import { useEffect, useState } from 'react'

function Climater() {
 
  const [isColor, setIsColor] = useState(true)
    
          const changeColor = ()=>{
          setIsColor(!isColor)
          }
    
    return (
      <>
       <body className= {isColor ? '' : 'cm'} />
       <input type="checkbox" id="switch" /><label for="switch" onClick={changeColor}>Toggle</label>
      </>
    );
  }
  export default Climater;

// // Encadenamiento opcional valorEvaluando ?. extraccionesPosteriores
//     const height = 17
//     const [isDecimeters, setIsDecimeters] = useState(true)
    
//     const changeUnits = ()=>{
//         setIsDecimeters(!isDecimeters)
//     }
   
//     return(
//         <>
//             <h1>{character.name}</h1>
//             <img src={character.image} alt="" />
//             <p>{character.location?.name}</p>
//             <p> Altura: {isDecimeters ? height: height * 10}{isDecimeters ? 'dc' : 'cm'}</p><button onClick={changeUnits}>Cambiar Altura</button>
//             <button onClick={changeCharacter}>Cambiar personaje</button>
            
//         </>
//     )
// }

// export default Character