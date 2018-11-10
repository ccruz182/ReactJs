import React from "react";
import PropTypes from 'prop-types';

import { Card, Dropdown } from "semantic-ui-react";

const Formulario = props => {
  const categorias = [        
    { key: 1, text: "Deportes", value: "sports" },
    { key: 2, text: "Entretenimiento", value: "entertainment" },
    { key: 3, text: "Negocios", value: "business" },
    { key: 4, text: "Tecnología", value: "technology" }
  ];

  const cambioHandler = (event, data) => {
    props.categoriaHandler(data.value);
  };

  return (
    <Card>
      <label>Selecciona una categoria:</label>
      <Dropdown
        clearable
        selection
        options={categorias}
        onChange={cambioHandler}
      />
    </Card>
  );
};

Formulario.propTypes = {
  categoriaHandler: PropTypes.func.isRequired
};

export default Formulario;
