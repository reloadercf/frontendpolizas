import React, { Component } from 'react';
import './App.css';
import Barra from "./components/barra/barra"
import Inferior from "./components/inferior/footer"
import Contenido from "./components/contenido/contenido"
import Logotipo from "./components/logotipo/logotipo"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Barra/>
        <Logotipo/>
        <Contenido/>
        <Inferior/>
      </div>
    );
  }
}

export default App;
