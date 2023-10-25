import LoginImg from "../Login/imgs/login_img.png"
import Balaodefala from "../Login/imgs/balao-de-fala.png"
import ContainerCadastro from "../../components/ContainerCadastro/ContainerCadastro"
import "../cadastro/cadastro.css"
import styled from "../../pages/Login/LoginPage.module.css"

function signUp(){
    return(
            <div className={styled.Login}> 
        <div className={styled.container_img}>
            <div className={styled.container_text}>
                <img src={Balaodefala} />
                <h2>Bem vindo de <br />volta!</h2>
            </div>
            <img src={ LoginImg } alt="" />
        </div>
         <ContainerCadastro />
    </div>
    )
}

export default signUp;