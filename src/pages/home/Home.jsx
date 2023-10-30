import "../home/Home.module.css"
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
              Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.Lorem ipatis earum doloribus recusandae am libero. Praesentium et nemo dignissimos mollitia nobis repellendus necessitatibus nihil deleniti.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;