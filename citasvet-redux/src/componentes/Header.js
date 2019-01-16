import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header>
      <h3>{props.titulo}</h3>
    </header>
  );
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Header;