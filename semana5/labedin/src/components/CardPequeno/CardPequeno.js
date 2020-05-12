
import React from 'react';
import './CardPequeno.css'


function CardPequeno(props){
    return (
        <div className="card-peq-container">
            <img src={props.imagem} />
            <h4>{props.texto}</h4>

        </div>

    )

}

export default CardPequeno;