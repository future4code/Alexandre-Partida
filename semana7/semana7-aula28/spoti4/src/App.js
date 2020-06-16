import React from 'react';
import './App.css';
import axios from 'axios';
import CriaPlay from './Components/CriaPlay';
import ListaPlaylist from './Components/ListaPlaylist';

export class App extends React.Component {

    state = {
        currentPage: "criaPlaylist"
    }

    changePage = () => {
        if(this.state.currentPage === "criaPlaylist") {
            this.setState({currentPage : "listPlay"})
        } else {
            this.setState({currentPage :"criaPlaylist"})
        }
    }

  render() {
    return (
      <div className="App">
        <button onClick={this.changePage}>Criar Nova Lista</button>
        {this.state.currentPage === "criaPlaylist" ? <CriaPlay/> : <ListaPlaylist/> }

    

        
      </div>
    );

  }

  
}

export default App;
