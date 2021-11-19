import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import walletContext from '../context/walletContext';
import '../css/login.css';

const Login = () => {
  const { setEmail } = useContext(walletContext);
  const [email, setStateEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);

  const checkDisable = () => {
    const regexEmail = /^[\w\d]*@[\w\d]*.[\w]{2,3}$/i;
    const minLength = 6;
    if (regexEmail.test(email) && password.length >= minLength) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const onButtonClick = () => {
    setEmail(email);
  };

  useEffect(checkDisable, [email, password]);

  return (
    <div className="page-login">
      <div className="backgroud-image" />
      <div className="login-container">
        <div className="login">
          <h1>TrybeWallet</h1>
          <input
            value={ email }
            onChange={ ({ target: { value } }) => setStateEmail(value) }
            data-testid="email-input"
            placeholder="Email..."
          />
          <input
            type="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            data-testid="password-input"
            placeholder="Senha..."
          />
          <Link to="/trybe-wallet/carteira">
            <button
              onClick={ onButtonClick }
              disabled={ disable }
              type="button"
            >
              Entrar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
