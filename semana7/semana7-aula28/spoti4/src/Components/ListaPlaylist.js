import React from 'react';
import axios from 'axios';


class ListaPlaylist extends React.Component {

  state = {
    playlists: [
      
                {
                    id: "",
                    name: "dfggs"
                }
            ]
  }
  componentDidMount () {
    const axiosConfig = {
      headers: {
        Authorization: "Alexadre-Gessone-Mello"
      }
    }
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig).then(response => {
     console.log(response.data)
    })
  
  }


render() {
  return (
      <div>
      {this.state.playlists.map(play =>{
          return (
      <li>{play.name}</li>
          
          )
        })}
      </div>
  );
}

  
}

export default ListaPlaylist;