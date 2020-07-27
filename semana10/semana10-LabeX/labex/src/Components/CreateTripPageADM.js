import React, {useState} from 'react';


function CreateTripPageADM(props) {
    const[createTrip, setCreateTrip] = useState ({name: "", planet: "", date: "", description: "", durationDays: 0})

  return (
    <form>
     
     <p>
      <input
          name="name"
          placeholder="Nome"
          value=""
          type="text"
          required
      />
     </p>

     <p>
       <input
          name="planet"
          placeholder="Planeta"
          value=""
          type="text"
          required
       />
     </p>

     <p>
      <input
      name="drescription"
      placeholder="Descrição"
      value=""
      type="text"
      required
      />
     </p>

     <p>
      <input
      name="durationDays"
      placeholder="Duração"
      value=""
      type="text"
      required
      />
     </p>
      


    <button type="submit">Enviar</button>
    </form>
  );
}

export default CreateTripPageADM;