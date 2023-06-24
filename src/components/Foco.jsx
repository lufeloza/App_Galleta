import { useState } from "react"

const Foco = () => {
    
    const [foco, setFoco] = useState('Of')
    let Encendido = foco
    const OnOfFoco =()=>{
        
        if(Encendido!='On'){
            setFoco(Encendido)
            Encendido ='On'
        }else{
            Encendido ='Of'
            setFoco(Encendido)
        }
        console.log(Encendido);
        
        
    }
    
    return(
        <div className="padre">
          <div className="bombillo"></div>
          <button onClick={OnOfFoco}>{Encendido}</button>
        </div>
    )
}

export default Foco
