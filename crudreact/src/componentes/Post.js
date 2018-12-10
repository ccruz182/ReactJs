import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";

class Post extends Component {
  render() {
    console.log(this.props.info)    
    return (
      <Table.Row textAlign="center">
        <Table.Cell>{this.props.info.id}</Table.Cell>
        <Table.Cell>{this.props.info.title}</Table.Cell>
        <Table.Cell>
          <Button basic color="blue">Ver</Button>
          <Button basic color="red">Eliminar</Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default Post;

