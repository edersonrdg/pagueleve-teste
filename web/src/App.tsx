import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Products from './pages/Products';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/produtos" component={ Products }/>
        <Route path="/signup" component={ SignUp }/>
        <Route exact path="/" component={ SignIn }/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
