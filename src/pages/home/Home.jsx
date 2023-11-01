import "../home/Home.module.css"
import pata from "./imgs/pataIcon.png"
import auau from "./imgs/cao-home.png"
import Footer from "../../components/footer/Footer"
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
              Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero.  Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo ddus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo ddus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti. Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo ddus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.
            </p>
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

        <div className={styled.animal}>
          <h1>Cachorro</h1>
          <div className={styled.tabble}>
            <div className={styled.colum}>
              <img
                src={pata}
                alt=""
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate maxime expedita vitae doloribus veniam vero officiis saepe provident reprehenderit, aperiam ratione consequatur non quam inventore facere minus sequi obcaecati!</p>
            </div>
            <div className={styled.colum}>
              <img
                src={pata}
                alt=""
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate maxime expedita vitae doloribus veniam vero officiis saepe provident reprehenderit, aperiam ratione consequatur non quam inventore facere minus sequi obcaecati!</p>
            </div>
            <div className={styled.colum}>
              <img
                src={pata}
                alt=""
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate maxime expedita vitae doloribus veniam vero officiis saepe provident reprehenderit, aperiam ratione consequatur non quam inventore facere minus sequi obcaecati!</p>
            </div>
            <div className={styled.colum}>
              <img
                src={pata}
                alt=""
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate maxime expedita vitae doloribus veniam vero officiis saepe provident reprehenderit, aperiam ratione consequatur non quam inventore facere minus sequi obcaecati!</p>
            </div>
            <div className={styled.colum}>
              <img
                src={pata}
                alt=""
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate maxime expedita vitae doloribus veniam vero officiis saepe provident reprehenderit, aperiam ratione consequatur non quam inventore facere minus sequi obcaecati!</p>
            </div>
            <div className={styled.colum}>
              <img
                src={pata}
                alt=""
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate maxime expedita vitae doloribus veniam vero officiis saepe provident reprehenderit, aperiam ratione consequatur non quam inventore facere minus sequi obcaecati!</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
  
  export default Home;