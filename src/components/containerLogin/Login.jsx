import { Link } from "react-router-dom";
import styles from'../Login/LoginPage.module.css'
import Verified from "../Login/imgs/verificar.png"
function Login(){
    function verified(){
        var campo = document.getElementById('texto');
        var elemento = document.getElementById('minhaimg')
        var valorCampo = campo.value;   
         
        if (valorCampo.includes('@')) {
                elemento.style.display= ""
            }else {
                elemento.style.display= "none"
            }
    }

    return(

        <div>
            <div className={styles.container_login}>
                <div className={styles.infos_login}>
                    <h1>Email</h1>
                    <div className={styles.inputD} id="inputD">
                        <input type={styles.text} id='texto' onChange={ verified }/>
                        <img src={Verified} id="minhaimg"/>
                    </div>
                    <h1>Senha</h1>
                    <div className={styles.inputD}>
                        <input type="password" id='senhaInput'/>
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
    )
}

export default Login;