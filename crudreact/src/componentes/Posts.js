import React, { Component } from "react";
import { Table } from "semantic-ui-react";

import Post from "./Post";

class Posts extends Component {
  render() {
    const thePosts = [...this.props.posts];
    const jsxPosts = [];

    Object.keys(this.props.posts).map(item => {
      jsxPosts.push(<Post key={item} info={thePosts[item]} borrar={this.props.borrar}/>);
    });

    return (
      <Table basic="very" celled>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Título</Table.HeaderCell>
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{jsxPosts}</Table.Body>
      </Table>
    );
  }
}

export default Posts;
