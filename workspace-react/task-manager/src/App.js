import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListaTarefas from './ListaTarefas';
import Cadastro from './Cadastro';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">

        <div className="jumbotron text-center">
          <h1>Task Manager</h1>
        </div>

        <br />

        <BrowserRouter>
          <Switch>
            <Route name="cadastro" path="/cadastro" component={Cadastro} />
            <Route name="tarefas" path="/tarefas" component={ListaTarefas} />
            <Redirect from="/*" to="tarefas" />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
