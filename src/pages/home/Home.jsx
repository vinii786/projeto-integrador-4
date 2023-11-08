import "../home/Home.module.css"
import auau from "./imgs/cao-home.png"
import Footer from "../../components/footer/Footer"
import Tabble from "../../components/tabbleAnimal/tabble";
import Person from "../../components/person/Person";
import styled from "../home/Home.module.css";

function Home() {
    return (
      <div className={styled.Home}>
        <Footer />
        <div className={styled.sobre}>
          <div className={styled.img}>
            <img
            src={auau}
            alt="" 
            />
          </div>
          <div className={styled.text}>
            <h1>
              Sobre
            </h1>
              <p>
                Bem-vindo à Clínica Online de Doação de Sangue para Animais, onde o cuidado e a compaixão se encontram para ajudar nossos amigos peludos em momentos de necessidade. Nossa clínica é dedicada a fornecer uma plataforma de doação de sangue para animais que permite que os donos de animais solidários e os amantes de animais ajudem a salvar vidas e garantir o bem-estar de nossos companheiros de quatro patas.
              </p>
              <h3>
                Missão e Compromisso:
              </h3>
              <p>
                Nossa missão é simples, mas crucial: salvar vidas de animais por meio de doações de sangue. Comprometemo-nos a:
              </p>
              <ul>
                <li>Facilitar Doações de Sangue: Oferecemos uma plataforma online fácil de usar, onde os donos de animais podem se inscrever e registrar seus animais para doação de sangue.</li><br />
                <li>Armazenamento Seguro: Garantimos um armazenamento seguro e adequado do sangue doado para que ele esteja prontamente disponível para atender às necessidades dos animais necessitados.</li><br />
                <li>Promover a Conscientização: Trabalhamos para aumentar a conscientização sobre a importância das doações de sangue em animais e incentivar mais pessoas a participarem.</li><br />
                <li>Colaboração com Clínicas Veterinárias: Estabelecemos parcerias com clínicas veterinárias em todo o país para tornar o processo de doação de sangue mais acessível e conveniente.</li><br />
              </ul>
          </div>
        </div>

        <div className={styled.doador}>
          <h1>
            Qual animal pode doar?
          </h1>
          <h3>
            Existem alguns pre-requisitos para que seu animal possa ser um doador! Segue a lista.
          </h3>
        </div>
        <Tabble />
        <Tabble
          tittle = "Gato"
        />
        <Person />
      </div>

    );
  }
  
  export default Home;