import React, {useState, useEffect} from 'react';
import axios from 'axios';



function CardTarefas (props) {

  return (
    <div>

      <p>{props.dia}</p>
      <p>{props.tarefa}</p>
      
        
    
    </div>
  );
}

export default CardTarefas;