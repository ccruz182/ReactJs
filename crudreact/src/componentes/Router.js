import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import Editar from "./Editar";
import Encabezado from "./Encabezado";
import FullPost from "./FullPost";
import Navegacion from "./Navegacion";
import NuevoPost from "./NuevoPost";
import Posts from "./Posts";

class Router extends Component {
  state = {
    posts: []
  };

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
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Posts posts={this.state.posts} borrar={this.eliminarPost} />
                );
              }}
            />

            <Route
              exact
              path="/post/:postId"
              render={props => {
                const id = props.location.pathname.split("/")[2];
                const filtro = this.state.posts.filter(
                  post => post.id === Number(id)
                );
                return <FullPost info={filtro[0]} />;
              }}
            />

            <Route
              exact
              path="/posts"
              render={() => {
                return (
                  <Posts posts={this.state.posts} borrar={this.eliminarPost} />
                );
              }}
            />

            <Route
              exact
              path="/nuevo-post"
              render={() => {
                return <NuevoPost crear={this.crearPost} />;
              }}
            />

            <Route
              exact
              path="/editar/:postId"
              render={props => {
                const id = props.location.pathname.split("/")[2];
                const filtro = this.state.posts.filter(
                  post => post.id === Number(id)
                );
                return (
                  <Editar id={id} info={filtro[0]} editar={this.editarPost} />
                );
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  obtenerPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  };

  eliminarPost = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        if (res.status === 200) {
          const actualPosts = [...this.state.posts];
          const posts = actualPosts.filter(post => post.id !== id);
          this.setState({ posts });
        }
      })
      .catch();
  };

  crearPost = post => {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, { post })
      .then(res => {
        console.log(res);
        if (res.status === 201) {
          const nuevoPost = {
            id: res.data.id,
            title: res.data.post.title,
            body: res.data.post.body,
            userId: res.data.post.userId
          };

          Swal("Post creado", "Se creó satisfactoriamente", "success");

          this.setState(prevState => ({
            posts: [...prevState.posts, nuevoPost]
          }));
        }
      })
      .catch();
  };

  editarPost = post => {
    const {id, body, title} = post;
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, { post })
      .then(res => {        
        if (res.status === 200) {
          const acPosts = [...this.state.posts];
          
          acPosts.forEach(postA => {            
            if (postA.id === Number(id)) {
              postA.title = title;
              postA.body = body;
            }
          });
          
          Swal("Modificación satisfactoria", "Se modificó el post", "success");   
          
          this.setState({posts: acPosts});
        }
      })
      .catch();
  };
}

export default Router;
