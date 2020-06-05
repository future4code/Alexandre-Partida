import React from 'react';


class CriaPlay extends React.Component {

  state = {
    "name": "string" 
  }

render() {
  return (
      <div>
        <input placeholder="Digite a playlist" type="Text"/>
        <button>Criar Playlist</button>
        
      </div>
  );
}

  
}

export default CriaPlay;
