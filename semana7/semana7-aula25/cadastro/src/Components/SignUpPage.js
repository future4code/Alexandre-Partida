import React from "react";
import axios from "axios";


class SignUpPage extends React.Component {

    state = {
        name:'',
        email:''
    }

    pegaNome = (event) => {
        const novoNome = event.target.value;
        this.setState({name : novoNome})

    }

    pegaEmail = (event) => {
        const novoEmail = event.target.value;
        this.setState({email: novoEmail})
    }

    criaUsuario = () => {
        const configuracao = {
            headers: {
                Authorization: "Alexandre-Gessone-Mello"
            },

        }
        const body = {
            
                name: this.state.name,
                email: this.state.email
            
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users")
    }

    render(){

        return (
            <div>
                <input placeholder="Nome" type="text" value={this.state.name} onChange={this.pegaNome}/>
                <input placeholder="E-mail" type="email" value={this.state.email} onChange={this.pegaEmail}/>
                <button>Criar Usuário</button>
            </div>
        )
    }

}

export default SignUpPage