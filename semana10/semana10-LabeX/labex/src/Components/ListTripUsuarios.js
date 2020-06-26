import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ListTripUsuarios(props) {

  const [form, setForm] = useState({name: "", age: "", applicationText: "", profession: "", country: "", trip: ""});

  const postUser = () =>{
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/NoIFVcOiSgTKTIPVZwX/apply").then(response =>{
      setForm(response.data);

    }).catch(err=> {
      console.log(err);
    });

  }

  useEffect(()=>{
    postUser();
  }, []);

  const handleInputChange = event => {
    const {name, value} = event.target;

    setForm({...form, [name]: value});
  };
  
  

  return (
    <form onSubmit>
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