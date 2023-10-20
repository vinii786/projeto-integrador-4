import './LoginPage.css'
import LoginImg from "./imgs/login_img.png"
import Login from '../containerLogin/Login';
function LoginPage() {
    return (
        
    <div className='Login'> 
        <div className="container_img">
            <img src={ LoginImg } alt="" />
         </div>

        <Login />
    </div> 
    );
  }
  
  export default LoginPage;