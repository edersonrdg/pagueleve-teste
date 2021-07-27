import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { api } from '../../service/api';

function SignUp() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirm_password] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await api.post('/signup', {
        email,
        name,
        password,
        confirm_password
      })
      history.push('/produtos')
    } catch (error) {
      alert('Erro de requisição, tente novamente')
    }
  }

  return (
    <div className="main-page">
      <div className="side-color" />
      <form onSubmit={handleSubmit}>
        <h1>Pegueleve</h1>
        <div className="input-block">
          <input type="text" placeholder="Email" 
          onChange={({target}) => setEmail(target.value)}/>
          <input type="text" placeholder="Nome de usuário" 
          onChange={({target}) => setName(target.value)}/>
          <input type="password" placeholder="Senha" 
          onChange={({target}) => setPassword(target.value)}/>
          <input type="password" placeholder="Confirmação de senha" 
          onChange={({target}) => setConfirm_password(target.value)}/>
        </div>
        <button type="submit">Entrar</button>
        <Link to="/">Já possuo uma conta</Link>
      </form>
    </div>
  );
}

export default SignUp;