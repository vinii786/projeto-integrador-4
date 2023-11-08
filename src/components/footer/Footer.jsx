import "./Footer.module.css"
import CatLogo from "./imgs/cat_logo.png"
import { Link } from "react-router-dom";
import styled from "../footer/Footer.module.css";

function Footer() {
    return (
      <div>
        <footer className={styled.footer}>
          <div className={styled.logo}>
            <img src= {CatLogo} alt="" />
            <h1>HemoPatas</h1>
          </div>

          <div className={styled.log}>
            <Link to={"/cadastro"}>
              <button>Cadastrar</button>
            </Link>

            <Link to={"/"}>
              <button>Login</button>
            </Link>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;