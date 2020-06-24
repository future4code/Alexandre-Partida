import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'


function LoginPage() {
  
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const history = useHistory();

  useEffect(()=> {
    const token = window.localStorage.getItem("token")

    if(token === null) {
      history.push("/login")
    }

  }, [history])

  const pegaEmail = (event) => { 
    setEmail(event.target.value)
  };

  const pegaSenha = (event) => {
    setPassword(event.target.value)
  }

  const login = async () => {
    const loginBody = {
      email: email,
      password: password
    }
  try {
    const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login", loginBody)
    window.localStorage.setItem("token", response.data.token);
    alert("Agora você está logado(a)");
    history.push("/listTripAdm");

  } catch (erro) {
    alert ("Não foi possível efetuar o login")
  }
   
  }
 
  return (
    <div>
      <input
        value={email}
        onChange={pegaEmail}
      />

      <input
      value={password}
      onChange={pegaSenha}
      />
   
        
    
      <button onClick={login}>Login</button>
    </div>
  );
}

export default LoginPage;
