import './Login.css'
import LoginImg from "./imgs/login_img.png"
function Login() {
    return (
    <div className='Login'> 
        <div className="container_img">
            <img src={ LoginImg } alt="" />
         </div>
        <div className="container_login">
            <div className="infos_login">
                <h1>Email</h1>
                <input type="text" />
                <h1>Senha</h1>
                <input type="password" />
            <div className="button_submit">
                <button type='submit'>
                    Enviar
                </button>
            </div>
            </div>
         </div>
    </div> 
    );
  }
  
  export default Login;