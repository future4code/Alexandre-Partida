import axios from "axios";

const criaUsuario = (nomeUsuario, emailUsuario) => {
  const body = {
    name: nomeUsuario,
    email: emailUsuario
  };

  axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "AlexandreGessone"
        }
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(erro => {
      console.log(erro);
    });
};



const gerenciaUsuario =  () => {

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
        headers: {
            Authorization: "AlexandreGessone"
        }
    }
    )
    .then(response => {
        console.log(response);
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  gerenciaUsuario();
    
