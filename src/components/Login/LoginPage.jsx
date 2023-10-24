import styles from'./LoginPage.module.css'
import LoginImg from "./imgs/login_img.png"
import Balaodefala from "./imgs/balao-de-fala.png"
import Login from '../containerLogin/Login';
function LoginPage() {
    return (
        
    <div className={styles.Login}> 
        <div className={styles.container_img}>
            <div className={styles.container_text}>
                <img src={Balaodefala} />
                <h2>Bem vindo de <br />volta!</h2>
            </div>
            <img src={ LoginImg } alt="" />
         </div>


        <Login />
    </div> 
    );
  }
  
  export default LoginPage;