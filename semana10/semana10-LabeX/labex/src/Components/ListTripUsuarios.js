import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ListTripUsuarios(props) {

  const [form, setForm] = useState({name: "", age: "", applicationText: "", profession: "", country: "", trip: ""});

  const handleInputChange = event => {
    const {name, value} = event.target;

    setForm({...form, [name]: value});
  };
  
  const botaoEnviar = (event) => {
    const axiosConfig = {
      header: {
        aluno: "darvas",
        id: "NoIFVcOiSgTKTIPVZwXS"
      }
    }
    
    const body ={
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
      trip: form.trip
    }
    
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips/NoIFVcOiSgTKTIPVZwX/apply", body, axiosConfig).then(response =>{
      alert("Viagem criada com sucesso");
      setForm({name: "", age: "", applicationText: "", profession: "", country: "", trip: ""})

    }).catch(err=> {
      
      
    });

    event.preventDefault()
    
  }
  

  return (
    <form onSubmit={botaoEnviar}>
      <p>
        <input
          name="name"
          placeholder="Nome"
          value={form.name}
          type="text"
          pattern="[A-Za-z ]{3,}"
          onChange={handleInputChange}
          required
        />
      </p>
      
      <p>
        <input
          name="age"
          placeholder="Idade"
          value={form.age}
          type="number"
          min="18"
          pattern=""
          onChange={handleInputChange}
          required
        />
      </p>
      
      <p>
        <input
          name="applicationText"
          placeholder="Por que é bom candidato"
          value={form.applicationText}
          type="text"
          onChange={handleInputChange}
          required
        />
      </p>

      
      <p>
        <input
          name="profession"
          placeholder="Profissão"
          value={form.profession}
          type="text"
          onChange={handleInputChange}
          required
        />
      </p>
      
      <p>
        <input
          name="country"
          placeholder="País"
          value={form.country}
          type="text"
          onChange={handleInputChange}
          required
        />
      </p>
  
      <button type="submit">Enviar</button>

    </form>
  );
}

export default ListTripUsuarios;