import './Login.css'

function Login() {
    return (
        <div className="container_login">
            <div className="infos_login">
                <p>Login</p>
                <input type="text" />
                <p>Senha</p>
                <input type="password" />
            </div>
            <div className="button_submit">
                <button type='submit'>
                    Enviar
                </button>
            </div>
        </div>
    );
  }
  
  export default Login;