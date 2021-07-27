import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

function SignIn() {
  return (
    <div className="main-page">
      <div className="side-color" />
      <form>
        <h1>Pegueleve</h1>
        <div className="input-block">
          <input type="text" placeholder="Email"/>
          <input type="password" placeholder="Senha"/>
        </div>
        <button type="button">Entrar</button>
        <Link to="/signup">Cadastre-se</Link>
      </form>
    </div>
  );
}

export default SignIn;