//ANA LUIZA LOPES PENNA-2023000060
//WALQUIRIA MAFADO-2022009098
import React from "react";
import casa1 from './img/casaUNIFEIOS.jpg';
import casa2 from './img/casaABAPORU.jpg';

export default function REP() {
  return (
    <div className="generalTxt">
      <div className="row" id="rowREP">
        <div>
          <img  className="columnimg" src={casa1} alt=""/>
        </div>

        <div className="columntxt">
          <div>
            Nome: República UNIFEIOS <br />
            MASCULINA <br />
            Moradores atuais: 7 <br />
            Vagas disponiveis: 2 <br />
            Hobbies: Academia, animais, judô; <br />
            Valor médio: 500,00R$ <br />
          </div>
        </div>
      </div>

      <div className="row" id="rowREP">
        <div>
          <img className="columnimg" src={casa2} alt="" />
        </div>

        <div className="columntxt">
          <div>
            Nome: Abaporú <br />
            FEMININA <br />
            Moradores atuais: 5 <br />
            Vagas disponiveis: 2 <br />
            Hobbies: Natureza, animais, academia; <br />
            Valor médio: 600,00R$ <br />
          </div>
        </div>
      </div>
    </div>
  );
}
