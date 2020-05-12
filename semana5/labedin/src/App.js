import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoAlexandre from './Imagens/fotoAle.jpg';
import FotoProducao from './Imagens/producao.jpg';
import fotoLabenu from './Imagens/labenu.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoAlexandre}
          nome="ALEXANDRE GESSONE" 
          descricao="Oi, eu sou o Alexandre. Sou estudante da Labenu no curso Web Full Stack."
        />
        
        <ImagemButton 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          texto="Ver mais"
        />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={FotoProducao}
          nome="PRODUÇÃO DE VÍDEO" 
          descricao="Formado em Comunicação Social pela Universidade São Judas Tadeu, já atuei com produção de vídeo"
        />
        
        <CardGrande 
          imagem={fotoLabenu}
          nome="LABENU" 
          descricao="Estudante do curso de Web Full Stack" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;