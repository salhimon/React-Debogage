import React, { useState } from 'react';
import './App.css';
import ChildCount from './component/ChildCount';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Salhi Moneem");

  // Fonction pour incrémenter le compteur
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Fonction pour décrémenter le compteur
  const decrementCount = () => {
    setCount(count - 1);
  };

  // Fonction pour changer le nom
  const changeName = (newName) => {
    setName(newName);
  };

  return (
    <div>
      <h1>Bienvenue, {name}!</h1>
      <div>
        <button onClick={incrementCount}>Incrémenter</button>
        <button onClick={decrementCount} className="decrement">
          Décrémenter
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <input className='new-inp'
          type="text" 
          placeholder="Entrez un nouveau nom" 
          onChange={(e) => changeName(e.target.value)}/>
      </div>
      <ChildCount name={name} count={count} />
    </div>
  );
}

export default App;
