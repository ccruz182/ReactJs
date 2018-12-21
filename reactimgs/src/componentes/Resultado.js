import React, { Component } from "react";
import { Button, Card, Icon, Image, Label } from "semantic-ui-react";

class Resultado extends Component {
  render() {
    return (
      <Card centered>
        <Image centered size="medium" src={this.props.url} />
        <Card.Content textAlign="center">
          <Card.Description>
            <Label>
              <Icon name="like" /> {this.props.likes}
            </Label>
            <Label>
              <Icon name="eye" /> {this.props.views}
            </Label>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <center>
            <a href={this.props.fullimg}>
              <Button basic color="pink">
                Ver imagen
              </Button>
            </a>
          </center>
        </Card.Content>
      </Card>
    );
  }
}

export default Resultado;
