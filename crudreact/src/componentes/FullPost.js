import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class FullPost extends Component {
  render() {
    if (this.props.info) {
      const {body, id, title, userId} = this.props.info;    
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span>By: {userId}</span>
          </Card.Meta>
          <Card.Description>
            {body}
          </Card.Description>
        </Card.Content>
      </Card>
    );
    } else {
      return null;
    }
  }
}

export default FullPost;
