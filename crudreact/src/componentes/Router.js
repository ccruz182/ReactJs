import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Encabezado from "./Encabezado";
import Navegacion from "./Navegacion";
import Posts from "./Posts";

class Router extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.obtenerPosts();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Encabezado titulo="React Blog" />
          <Navegacion />

          <Switch>
            <Route exact path="/" render={() => {
              return (<Posts posts={this.state.posts} /> );
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  obtenerPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      this.setState({"posts": res.data});
    })
    .catch(error => {
      console.log("ERROR", error);
    });

  }
}

export default Router;
