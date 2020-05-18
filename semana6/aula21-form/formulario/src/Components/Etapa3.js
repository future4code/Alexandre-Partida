import React from "react";


export class Etapa3 extends React.Component {
    render() {
     return (
       <div className="container3">
         <h3>ETAPA 3: INFORMAÇÕES GERAIS DE ENSINO </h3>
          <p> Por que você não terminou um curso de graduação? </p>
          <p> <input></input> </p>
          <p> Você fez algum curso complementar? </p>
          <p> <select>
          <option>Curso Técnico</option>
          <option>Curso de inglês</option>
          <option>Não fiz curso complementar</option>
          </select>
        </p>
        <button>Próxima etapa</button>
      
 
 
       </div>
     );
    }
   
 }
 
export default Etapa3;