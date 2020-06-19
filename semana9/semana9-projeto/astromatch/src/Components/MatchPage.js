import React, { useState, useEffect } from 'react';
import axios from 'axios';



function MatchPage () {
    const [matches, setMatches] = useState ([{id:"", age: 0, name: "", photo:"", bio: ""}])
    
    const matchList = (userId) => {
      axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandre/matches").then(response =>{
        setMatches(response.data)
    }).catch(err =>{console.log(err)})
    }


    useEffect(() => {
      matchList()
      },[])

    return (
      <div>
            <div>
                 <p>{matches.id}</p>
                 <p>{matches.age}</p>
                 <p>{matches.name}</p>
                 <p>{matches.photo}</p>
                 <p>{matches.bio}</p>
             
             </div>
              
        </div>
    
    );
    }






export default MatchPage;