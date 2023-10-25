import LoginImg from "../cadastro/imgs/undraw_Sign_up_n6im-PhotoRoom.png-PhotoRoom.png"
import Balaodefala from "../Login/imgs/balao-de-fala.png"
import ContainerCadastro from "../../components/ContainerCadastro/ContainerCadastro"
import "../cadastro/cadastro.css"
import styled from "../../pages/Login/LoginPage.module.css"

function signUp(){
    return(
            <div className={styled.Login}> 
        <div className={styled.container_img}>
            <img src={ LoginImg } alt="" />
        </div>
         <ContainerCadastro />
    </div>
    )
}

export default signUp;