import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



function ListTripAdm() {
  const [trips, setTrips] = useState([{id: "", name: "", description: "", planet: "", durationInDays: 0, date: "" }])

  const listTrip = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/alexandre-mello/trips").then(response =>{
      setTrips(response.data.trips)

    }).catch(err =>{console.log(err)})
  }
 
  const history = useHistory();

  useEffect(()=> {
    const token = window.localStorage.getItem("token")
    

    if(token === null) {
      history.push("/login");
    } else {
      listTrip();
    }
  }, [history])

  const logout = () => {
    window.localStorage.clear();
    history.push("/login")
  }
  

  return (

    <div>
      {
        trips.map((trip=>{
        return <> 
              <p>{trip.id}</p>
              <hr/>
              <p>{trip.name}</p>
              <p>{trip.description}</p>
              <p>{trip.planet}</p>
              <p>{trip.durationInDays}</p>
              <p>{trip.date}</p>
              <hr/>
        </>       
        }))
    }

       
        <button onClick={logout}>Logout</button>
    </div>
  );
}

export default ListTripAdm;
