import React from 'react';
import { useHistory } from 'react-router-dom';



function Homepage() {

  let history = useHistory();

  const goToAboutLogin = () => {
    history.push("/login");
  }

  return (
    <div>
      <button onClick={goToAboutLogin}>Pagina de login</button>
    </div>
  );
}

export default Homepage;
