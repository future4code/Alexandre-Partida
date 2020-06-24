import React from 'react';
import { useHistory } from 'react-router-dom';





function Homepage() {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  }

  

  return (
    <div>
      <button onClick={goToLogin}>Vá para Login</button>
    </div>
  );
}

export default Homepage;
