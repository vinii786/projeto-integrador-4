import { Link } from "react-router-dom";
import React, { useState } from "react"; // Importe o useState
import styles from '../Login/LoginPage.module.css';
import Verified from "../Login/imgs/verificar.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [buttonText, setButtonText] = useState('Mostrar Senha');

  function verified() {
    var campo = document.getElementById('texto');
    var elemento = document.getElementById('minhaimg');
    var valorCampo = campo.value;

    if (valorCampo.includes('@gmail.com') || valorCampo.includes('@hotmail.com')) {
      elemento.style.display = "";
    } else {
      elemento.style.display = "none";
    }
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);

    if (showPassword) {
      setButtonText('Mostrar Senha');
    } else {
      setButtonText('Ocultar Senha');
    }
  }

  return (
    <div>
      <div className={styles.container_login}>
        <div className={styles.infos_login}>
          <h1>Email</h1>
          <div className={styles.inputD} id="inputD">
            <input type="text" id='texto' onChange={verified} />
            <img src={Verified} id="minhaimg" style={{ display: "none" }} />
          </div>
          <h1>Senha</h1>
          <div className={styles.inputD}>
            <input
              type={showPassword ? 'text' : 'password'}
              id='senhaInput'
            />
            <button
              className={styles.btnPassword}
              type='button'
              onClick={togglePasswordVisibility}
            >
              {buttonText}
            </button>
          </div>
          <div className={styles.button_submit}>
            <button type='submit' id='button' className={styles.SignIn}>
              Entrar
            </button>
          </div>
          <div className={styles.signUp}>
            <button>
              <Link to={'/cadastro'}>cadastro</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
