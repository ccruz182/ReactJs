import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

const BotonAgregarProducto = () => {
  const style = {
    marginTop: "0.5rem",
    marginRight: "1rem"
  };

  return (
    <Link to="/productos/nuevo">
      <Button floated="right" color="orange" animated style={style}>
        <Button.Content visible>Agregar Producto</Button.Content>
        <Button.Content hidden>
          <Icon name="add circle" />
        </Button.Content>
      </Button>
    </Link>
  );
};

export default BotonAgregarProducto;
