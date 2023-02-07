import React, { useState, useEffect } from 'react';
import './App.css';

// import Saludar from './components/Saludar';
import { Saludar } from './components/Saludar';

interface IApp {
  name?: string;
};

function App(props: IApp) {
  const [titulo, setTitulo] = useState<string>('Titulo Por Defecto');
  const [nombre, setNombre] = useState<string>('');

  useEffect(() => {
    setNombre(props.name || 'Visitante');
  }, [props.name]);

  function cambiarTitulo() {
    const titulos = ['Titulaso', 'Otro titulo', 'Cambiado'];
    const aleatorio = Math.floor(Math.random() * titulos.length);
    setTitulo(titulos[aleatorio]);
  }

  function cambiarNombre() {
    const nombres = ['Maria', 'Pedro', 'Paula'];
    const aleatorio = Math.floor(Math.random() * nombres.length);
    setNombre(nombres[aleatorio]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{titulo}</h1>
        <button onClick={cambiarTitulo}>
          Cambiar titulo
        </button>
        
        <Saludar name={nombre} />
        <button onClick={cambiarNombre}>
          Cambiar nombre
        </button>

        {/* Dejo esto para que no pete el test */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
