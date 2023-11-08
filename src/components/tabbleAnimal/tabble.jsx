import React from 'react';
import styled from "../tabbleAnimal/tabble.module.css";
import pata from "../../pages/home/imgs/pataIcon.png";

function Tabble(props) {
  const infoMap = {
    "Gato": {
      idade: "Idade entre 1 a 8 anos",
      peso: "Peso mínimo de 25kg.",
      temperamento: "Temperamento dócil.",
      vacinacao: "Vacinação e Vermifugação atualizadas.",
      pulgas: "Controle de pulgas e carrapatos.",
      doenca: "Não apresentar doença ou transfusão prévia."
    },
    "Cachorro": {
      idade: "Idade entre 1 a 10 anos",
      peso: "Peso mínimo de 5kg.",
      temperamento: "Temperamento amigável.",
      vacinacao: "Vacinação em dia.",
      pulgas: "Prevenção de pulgas e carrapatos.",
      doenca: "Não apresentar doença cardíaca."
    }
  };

  const tittle = props.tittle || "Cachorro";
  const animalInfo = infoMap[tittle];

  return (
    <div className={styled.animal}>
      <h1>{tittle}</h1>
      <div className={styled.tabble}>
        <div className={styled.colum}>
          <img src={pata} alt="" />
          <p>{animalInfo.idade}</p>
        </div>
        <div className={styled.colum}>
          <img src={pata} alt="" />
          <p>{animalInfo.peso}</p>
        </div>
        <div className={styled.colum}>
          <img src={pata} alt="" />
          <p>{animalInfo.temperamento}</p>
        </div>
        <div className={styled.colum}>
          <img src={pata} alt="" />
          <p>{animalInfo.vacinacao}</p>
        </div>
        <div className={styled.colum}>
          <img src={pata} alt="" />
          <p>{animalInfo.pulgas}</p>
        </div>
        <div className={styled.colum}>
          <img src={pata} alt="" />
          <p>{animalInfo.doenca}</p>
        </div>
      </div>
    </div>
  );
}

export default Tabble;