import React, { useState } from 'react';
import './Calculator.css'; // Importamos estilos externos

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const parseNumbers = () => [parseFloat(num1), parseFloat(num2)];

  const add = () => {
    const [a, b] = parseNumbers();
    setResult(a + b);
  };

  const subtract = () => {
    const [a, b] = parseNumbers();
    setResult(a - b);
  };

  const multiply = () => {
    const [a, b] = parseNumbers();
    setResult(a * b);
  };

  const divide = () => {
    const [a, b] = parseNumbers();
    if (b === 0) {
      setResult('Error: División por 0');
    } else {
      setResult(a / b);
    }
  };

  return (
    <div className="calculator-container">
      <h2>💖 Calculadora Alisson💖</h2>
      <div className="inputs">
        <input
          type="number"
          value={num1}
          onChange={e => setNum1(e.target.value)}
          placeholder="Número 1"
        />
        <input
          type="number"
          value={num2}
          onChange={e => setNum2(e.target.value)}
          placeholder="Número 2"
        />
      </div>
      <div className="buttons">
        <button className="pink" onClick={add}>Sumar</button>
        <button className="lavender" onClick={subtract}>Restar</button>
        <button className="mint" onClick={multiply}>Multiplicar</button>
        <button className="blue" onClick={divide}>Dividir</button>
      </div>
      <h3 className="result">Resultado: {result !== null ? result : '---'}</h3>
    </div>
  );
} 