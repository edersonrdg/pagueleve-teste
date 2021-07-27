import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="main-page">
      <div className="side-color" />
      <form>
        <h1>Pegueleve</h1>
        <div className="input-block">
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Nome de usuário"/>
          <input type="password" placeholder="Senha"/>
          <input type="password" placeholder="Confirmação de senha"/>
        </div>
        <button type="button">Entrar</button>
        <Link to="/">Já possuo uma conta</Link>
      </form>
    </div>
  );
}

export default SignUp;