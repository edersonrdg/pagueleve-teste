import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/produtos" component={ Products }/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
