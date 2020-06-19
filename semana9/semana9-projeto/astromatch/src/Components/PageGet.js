import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PageGet (props) {

    const [profile, setProfile] = useState({id: "", age: 0, name: "", photo: "", bio: ""})
    const [id, setId] = useState({id:"", choice: true})
    
    
    
    const pegaProfile = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandre/person").then(response =>{
            setProfile(response.data.profile)
        }).catch(err =>{console.log(err)})

    }

    const setaMatch = () => {
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alexandre/choose-person").then(response =>{
            setId(response.data)
        }).catch(err =>{console.log(err)})

    }

    const handleProfile = () => {
        if(id.choice === true) {
            pegaProfile()
            setaMatch()
        } else {
            pegaProfile()
        }    
    }
    

    useEffect(() => {
        pegaProfile()
    },[])
   
 

    return (

        <div>
            <div>
                 <p>{profile.id}</p>
                 <p>{profile.age}</p>
                 <p>{profile.name}</p>
                 <p>{profile.photo}</p>
                 <p>{profile.bio}</p>
                 <button onClick={handleProfile}>Recusar</button>
                 <button onClick={handleProfile}>Aceitar</button>

             
             </div>
              
        </div>
    
    );
    }

    
       
  

export default PageGet;