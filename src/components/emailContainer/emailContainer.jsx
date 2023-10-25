import Verified from "../Login/imgs/verificar.png";
import styles from '../Login/LoginPage.module.css';

function containerEmail(){
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
    return(
        <div>
            <h1>Email</h1>
          <div className={styles.inputD} id="inputD">
            <input type="text" id='texto' onChange={verified} />
            <img src={Verified} id="minhaimg" style={{ display: "none" }} />
          </div>
        </div>
    )
}

export default containerEmail;