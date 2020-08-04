import React from 'react';
import './App.css';
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Final from './Components/Final';

 export class App extends React.Component {

  state = {
    nome: true,
    idade: true,
    email: true,
    escolaridade: true
 
  };
  
   render() {
    return (
      <div className="container1">
       
      <Etapa1></Etapa1>
      


      </div>
    );
   }
  
}

export default App;



