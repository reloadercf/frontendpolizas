import React from 'react'
import logo from './logo.png';


class Logotipo extends React.Component {
  state = {
    current: 'mail',
  }
  render() {
    return (
        <div>
            <img src={logo} alt="Tu logotipo"/>
        </div>

    );
  }
}

export default Logotipo;