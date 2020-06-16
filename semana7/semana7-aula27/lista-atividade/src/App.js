import React from 'react';
import './App.css';
import axios from 'axios';

export class App extends React.Component {

  state = {
    atividades: [ {

      "activity": "Learn how to play a new sport",
	    "accessibility": 0.2,
	    "type": "recreational",
	    "participants": 1,
	    "price": 0.1,
      "key": "5808228" 

    },
    {
      "activity": "Catch up on world news",
      "type": "educational",
      "participants": 1,
      "price": 0.05,
      "link": "",
      "key": "6596257",
      "accessibility": 0.07
    }
  ]
  };

  componentDidMount = () => {
    axios.get ("http://www.boredapi.com/api/activity?type=recreational").then(response => {
      console.log(response.data)
      this.setState({atividades : response})
    }).catch(erro => {console.log(erro)})
  }

  render() {
    return (
      <div className="App">

        
        <select>
          <option value={''}></option>
          {this.state.atividades.map(tip => {
            return <option value={tip.type}>{tip.type}</option>
          })
          }
        </select>
        

    

        
      </div>
    );

  }


  
}

export default App;
