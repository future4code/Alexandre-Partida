import React from 'react';
import './App.css';
import './Api';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <div className="Container">
          <p>Nome:  
            <input></input>
          </p>
          <p>E-mail:
            <input></input>
          </p>
          <p>
            <button>Salvar</button>
          </p>
          </div>
          <div>
            <h3>Usuários Cadastrados</h3>
          </div>
      </div>
    );

  }
  
}

export default App;
