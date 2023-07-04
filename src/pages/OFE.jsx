import React, { useState, useEffect } from 'react'


export default function OFE() {

  const [CadastroVaga, setCadastroVaga] = useState([]);


  const url = "https://backend-ems1.vercel.app/";

  useEffect(() => {
    fetch(url + "vagas")
      .then((response) => response.json())
      .then((data) => setCadastroVaga(data))
      .catch((err) => console.log(err));
  }, [url]);



  return (
    <div className="generalTxt">
      

      {CadastroVaga
        ? CadastroVaga.map((item) => {
          return (
            <div className="row" id='rowOFE'>


            <div id='inside' key={item.id}>
              
                <p> Nome: <span className="item-nome">{item.nome}</span></p>
                <p> Hobbies: <span className="item-hobbie">{item.hobbie}</span> </p>
                <p> Quantidade de vagas: <span className="item-vaga">{item.vaga}</span> </p>
                <p> Valor do aluguel: <span className="item-valor">{item.valor}</span></p>

             
            </div>
            </div>
          );
        })
        : true}
    </div>
  );
}
