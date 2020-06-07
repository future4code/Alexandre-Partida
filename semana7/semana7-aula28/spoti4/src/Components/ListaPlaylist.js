import React from 'react';
import axios from 'axios';


class ListaPlaylist extends React.Component {

  state = {
    playlists: [
      
    ]
  }

  componentDidMount () {
    const axiosConfig = {
      headers: {
        Authorization: "Alexandre-Gessone-Mello"
      }
    }
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig).then(response => {
      this.setState({playlists : response.data.result.list})
    })
  
  }

  
render() {
  return (
      <div>
        <p>
        {this.state.playlists.map((play, index) =>{
            return (
               <li key={index}>{play.name}</li>
          )
        })}

        </p>
      </div>
  );
}

  
}

export default ListaPlaylist;