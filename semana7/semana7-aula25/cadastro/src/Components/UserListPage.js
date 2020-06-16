import React from "react";
import axios from "axios";


class UserListPage extends React.Component {

    state = {

        userList: [
            
        ]
    
         

    }

    

    componentDidMount() {
      this.fetchUsersList();

    }

    fetchUsersList = () => {
        const configuracao = {
            headers: {
                Authorization: "Alexandre-Gessone-Mello"
            }
        }
        
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", configuracao).then(resposta => {
            this.setState({userList : resposta.data})
        });
    }

    deletaUsuario = (usuarioID) => {
        const configuracao = {
            headers: {
                Authorization: ""
            }
        }
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioID}`, configuracao).then(resposta => {
            alert("Este usuário foi apagado com sucesso");
            this.fetchUsersList();
        })

    }

    render(){

return (
    <div>
        {this.state.userList.map(usuario =>{
            return (
                <li>{usuario.name}
                <button onClick={() => this.deletaUsuario(usuario.id)}>Deletar</button>
                </li>
            )
        })}
        <ul>

        </ul>

    </div>
)
}

}

export default UserListPage;