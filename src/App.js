import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Provider from './context/Provider';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/trybe-wallet/" component={ Login } />
        <Route path="/trybe-wallet/carteira" component={ Wallet } />
      </Switch>
    </Provider>
  );
}

export default App;
