import React from "react";

import { Header } from "semantic-ui-react";

import "../css/header.css";

const MyHeader = props => {
  return (
    <div id="header">
      <Header as="h1">{props.titulo}</Header>
    </div>
  );
};

export default MyHeader;
