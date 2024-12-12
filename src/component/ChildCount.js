import React from 'react';
import '../App.css';

function ChildCount({ name, count }) {
  return (
    <div className="child-component">
      <p>Nom: <strong>{name}</strong></p>
      <p>Compteur: <strong>{count}</strong></p>
    </div>
  );
}

export default ChildCount;
