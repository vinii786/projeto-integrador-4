import styled from "../person/Person.module.css";
import Person1 from "./imgs/undraw_Female_avatar_efig.png"
import Person2 from "./imgs/undraw_Male_avatar_g98d.png"
import Person3 from "./imgs/undraw_Pic_profile_re_7g2h.png"
import Person4 from "./imgs/undraw_Profile_pic_re_iwgo.png"
function Person(){
return(
    <div className={styled.person}>
            <h1>Participantes</h1>
        <div className={styled.imgs}>
            <div className={styled.esquerda}>
                <img src={Person1} alt="" />
                <img src={Person2} alt="" />
            </div>
            <div className={styled.esquerda}>
                <img src={Person1} alt="" />
                <img src={Person2} alt="" />
            </div>
        </div>
    </div>
    )
}

export default Person;