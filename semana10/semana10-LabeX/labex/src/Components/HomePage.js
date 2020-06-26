import React from 'react';
import { useHistory } from 'react-router-dom';





function Homepage() {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  }

  const goToTrip = () => {
    history.push("/listTripUser")
  }

  return (
    <div>
      <button onClick={goToLogin}>Vá para Login</button>
      <button onClick={goToTrip}>Solicitar Viagem</button>
    </div>
  );
}

export default Homepage;
