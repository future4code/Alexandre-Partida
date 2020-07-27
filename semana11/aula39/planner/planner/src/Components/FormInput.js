import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardTarefas from './CardTarefas';




function FormInput(props) {

   const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/:planner-mello-alexandre-gessone"

   const[taskList, setTaskList] = useState([{text: "", day: ""}]);

   const listaTarefa = taskList.map(tarefa => {
       return <CardTarefas
       tarefa={tarefa.text}
       dia={tarefa.day}
       />
   })


   const createTask = async() => {

    let body = [{
        text: "",
        day: "",
    }];
    try {
        const response = await axios.post(`${baseUrl}`, body);
        console.log(response.data);
        setTaskList(response.data);
        alert("Tarefa criada com sucesso")

    } catch(e) {
       alert("Erro ao criar tarefa")
    }
}


    const handleInputChange = (event) => {
        setTaskList({text: event.target.value});
        setTaskList({day: event.target.value})
    }
    const showFormValues = (event) =>{
        event.preventDefault();
        createTask();
    }


  return (
    <div>
        <form onSubmit={showFormValues}>
            <select 
                type="text"
                value={taskList.day}
                name="day"
                onChange={handleInputChange}>
                    <option>Selecione um dia</option>
                    <option>Segunda</option>
                    <option>Terça</option>
                    <option>Quarta</option>
                    <option>Quinta</option>
                    <option>Sexta</option>
                    <option>Sabado</option>
                    <option>Domingo</option>
            </select>
            <input 
                placeholder="Tarefa"
                name="text"
                value={taskList.text}
                type="text"
                onChange={handleInputChange}
            />
            <button type="submit">Criar Tarefa</button>
        </form>

        <div>
            {listaTarefa}
        
        </div>

    </div>


  );
}

export default FormInput;