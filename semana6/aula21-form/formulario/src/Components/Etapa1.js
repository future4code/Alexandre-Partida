import React from 'react';
import Etapa2 from './Etapa2';


 export class Etapa1 extends React.Component {
  state = {
    nome: true,
    idade: true,
    email: true,
    escolaridade: true
 
  };

   render() {
      if(this.state) {
        return Etapa2
      }
      else {
        alert('Digite todos os dados')
      }


    return (
      <div className="container1">
        <h1>ETAPA 1: DADOS GERAIS</h1>
        <p> Qual o seu nome? </p>
        <p> <input></input> </p>
        <p> Qual a sua idade? </p>
        <p> <input></input> </p>
        <p> Qual o seu e-mail?</p>
        <p> <input></input> </p>
        <p> Qual a sua escolaridade?</p>
        <p> <select>
          <option>Superior Completo</option>
          <option>Superior Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Médio Incompleto</option>
          </select>
        </p>
        <button>Próxima etapa</button>


      </div>
    );
   }
  
}

export default Etapa1;
