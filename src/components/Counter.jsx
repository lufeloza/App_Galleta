import { useState } from "react"

const Counter = () => {
    // useState genera el estado pero no es el estado
    // Los hooks solamente se pueden utilizar 
    // en la parte funcional del componente
    // es decir antes del return
    // DESESTRUCTURACION/DESTRUCTURING
    // En los arreglos se asignan valores de forma posicional
    
    // valor del estado, funcion que modifico el estado
    // const [state, setState] = useState("valor inicial")
    
    const [counter, setCounter] = useState(0)
    const incrementCounter = ()=>{
        // incrementara el estado
        
        // Para modificar el estado debemos modificar la funcion setiadora
        // setCounter(nuevoValorEstado)
        setCounter(counter + 1)  
    } 
    const decrementCounter = ()=>{
        // incrementara el estado
        
        // Para modificar el estado debemos modificar la funcion setiadora
        // setCounter(nuevoValorEstado)
        let contador = counter -1
        // if (contador>= 0){
        //     setCounter(counter - 1)   
        // } forma larga del if 
        if(contador>= 0) setCounter(counter - 1)
    } 
    
    return(
        <div>
            <h2>Valor actual: {counter}</h2>
            <button onClick={decrementCounter}>Decremento</button>
            <button onClick={incrementCounter}>Incremento</button>
        </div>
    )
}

export default Counter
