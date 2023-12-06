// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/roductLists';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/products/:id" component={ProductDetail} />
      </Switch>
    </Router>
  );
};

export default App;
