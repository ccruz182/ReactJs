import React, { Component } from "react";

/*
// Functional component
class Header extends Component {
  render() {
    return (
      <h1>Nombre del Sitio</h1>
    );
  }
};
*/

// Stateless: Sin ref, state ni ciclo de vida
const Header = (props) => {
  return <h1>{props.titulo}</h1>;
};
export default Header;
