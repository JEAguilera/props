import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      <h1> Higiene y Seguridad: Elementos de Proteccion Personal </h1>
      <div>
       
      <br></br>
            <Card className='cards' producto='Casco Electricista' precio='$5000' calidad='Electricidad'/>
            
            <br></br>

            <Card className='cards' producto='Casco Alturas' precio='$5500' calidad='Altura'/>
              
      </div>     

       
    </div>
  );
}

export default App;
