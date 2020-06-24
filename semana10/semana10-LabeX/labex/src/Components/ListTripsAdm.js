import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';



function ListTripAdm() {
  const history = useHistory();

  useEffect(()=> {
    const token = window.localStorage.getItem("token")

    if(token === null) {
      history.push("/login")
    }

  }, [history])

  const logout = () => {
    window.localStorage.clear();
    history.push("/login")
  }
  

  return (
    <div>

     
      ListTripAdm

      <button onClick={logout}>Logout</button>
      

    </div>
  );
}

export default ListTripAdm;
