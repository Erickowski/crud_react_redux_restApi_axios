import React,{Component} from 'react';
import Header from './componentes/Header';
import Productos from './componentes/Productos';
import NuevoProducto from './componentes/NuevoProducto';
import EditarProducto from './componentes/EditarProducto';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//redux
import {Provider} from 'react-redux';
import store from './store';

export default class App extends Component {

    render() {
      return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Productos} />
                <Route exact path="/productos/nuevo" component={NuevoProducto} />
                <Route exact path="/productos/editar/:id" component={EditarProducto} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>          
        );
    }
}