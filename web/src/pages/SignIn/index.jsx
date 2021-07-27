import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { api } from '../../service/api';
import './styles.css'

function SignIn() {
  const history = useHistory()
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await api.post('/signin', {
        password,
	      username
      })
      localStorage.setItem('user', JSON.stringify(response.data))
      history.push('/produtos')
    } catch (error) {
      console.log(error.response)
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
          <input type="password" placeholder="Senha"
          onChange={({target}) => setPassword(target.value)}/>
        </div>
        <button type="submit">Entrar</button>
        <Link to="/signup">Cadastre-se</Link>
      </form>
    </div>
  );
}

export default SignIn;