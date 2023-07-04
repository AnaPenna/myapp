//ANA LUIZA LOPES PENNA-2023000060
//WALQUIRIA MAFADO-2022009098
import React from "react";
import imgUNIFEI from './img/imgUNIFEI.jpg'


export default function PA() {
  return (
    <div className="generalTxt">
      <div className="row">
        <div className="column" id="columnHOME">
          <p>
            &emsp; Inicialmente esse projeto foi criado vizando diminuir os problemas
            enfrentados pelos dicentes e docentes da UNIFEI - Itabira na busca
            de moradia.
          </p> <br />
          <p>
            &emsp; O intuito principal do mesmo é possibilitar que as pessoas que
            buscam uma móradia para residir no período universitário tenham uma
            plataforma expondo as opções de residencia e características destas,
            para que este indivíduo tenha um melhor conforto e experiência.
          </p>
        </div>
        <div className="column" id="columnHOME">
          <img id="imgHOME" src={imgUNIFEI} alt=""/>
        </div>
      </div>
    </div>
  );
}
