import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

//EN SAANUT SOVELLUSTA RENDERÖITYMÄÄN ILMAN TÄTÄ REACDOM.RENDER() METODIA, 
//VAIKKA OHJEIDEN MUKAAN CLASS:IN SAISI PELKÄLLÄ RENDER()RETURN() JOS EXPORTTAA SEN...
//JOTEN TÄMÄ ON NYT HIEMAN TURHA TIEDOSTO


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


