import './App.css'
import phrases from './data/phrases.json'
import PhrasesCard from './components/PhrasesCard';
import { useState } from 'react';

function App() {
  
  const [index, setIndex] = useState(0);

  const changeUser = () => {
    const nuevoIndex = Math.floor(Math.random()*(phrases.length -1))
    const nuevoFondo = Math.floor(Math.random()*3)
    console.log(nuevoIndex);
    if (nuevoIndex < phrases.length - 1) {
      setIndex(nuevoIndex);
    } else {
      setIndex(0);
    }
  };
  
  document.body.style = `background-image: url(img/fondo2.png);`

  return (
    <>
      <div className='phrase-tittle'>
        <h1 className='phrase-tittle-h1'> GALLETAS DE LA FORTUNA</h1>
      </div>
      <PhrasesCard data={phrases[index]} />
      <button onClick={changeUser}>
        Otra Galleta
      </button>
    </>
  );
}
export default App;