import React, { useState } from 'react'
import './App.css'

function App() {
  const [resultado, setResultado] = useState("")

  const handleClick = (e) => {
      setResultado(resultado.concat(e.target.name));
  }

  const limpiar = () => {
    setResultado("");
  }

  const eliminar = () => {
    setResultado(resultado.slice(0, -1)); //elimina cada numero en uno en uno
  }

  const calculador = () => {
    
    try {
      setResultado(eval(resultado).toString());
    } catch(err){
      setResultado("Error")
    } 
  }
  
  return (
    <>
      <div className="contenedor">
        <form>
          <input type="text" value={resultado} style={{background: "#ffffff", width: "215px", height: "40px", margin:"8px" }}/>
        </form>

        <div className="teclado">
          <button onClick={limpiar} id="limpiar" className="botonesrojos">Borrar</button>
          <button onClick={eliminar} id="eliminar" className="botonesverde">C</button>
          <button name="/" onClick={handleClick} className="botonesverde">&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick} className="botonesverde">&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick} className="botonesverde">&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick} className="botonesverde">+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button onClick={calculador} id="resultado" className="botonesverde" >=</button>

        </div>

      </div>
      
    </>
  )
}

export default App