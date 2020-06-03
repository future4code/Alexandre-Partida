import React from 'react';
import './App.css';
import SignUpPage from './Components/SignUpPage'
import UserListPage from './Components/UserListPage';

class App extends React.Component {

  state = {
    paginaAtual: "entrada"
  }

  trocaPagina = () => {
    if(this.state.paginaAtual === "entrada"){
      this.setState({paginaAtual : "listaUsuario"})
    } else {
      this.setState({paginaAtual : "entrada"})
    }

  }

  render() {

    return (
      <div>
        <button onClick={this.trocaPagina}>Tela de Troca</button>
        {this.state.paginaAtual === "entrada" ? <SignUpPage/> : <UserListPage/>}
      </div>
      
    );

  }
  
}

export default App;
