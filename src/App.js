import BoxDisplay from './components/displayBox';
import BoxForm from './components/boxes';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [currentBox, setCurrentBox] = useState("");
  return (
    <div className="App">
      <BoxForm/>{/* FORM */}
      <BoxDisplay />{/* DISPLAY */}
    </div>
  );
}

export default App;
