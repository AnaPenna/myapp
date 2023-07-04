//ANA LUIZA LOPES PENNA-2023000060
//WALQUIRIA MAFADO-2022009098
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NOF() {
  const [CadastroVaga, setCadastroVaga] = useState([]);
  //const[id, setId] = useState("");
  const [vaga, setVaga] = useState("");
  const [hobbie, setHobbie] = useState("");
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");

  const url = "https://backend-ems1.vercel.app/";

  useEffect(() => {
    fetch(url + "vagas")
      .then((response) => response.json())
      .then((data) => setCadastroVaga(data))
      .catch((err) => console.log(err));
  }, [url]);

  //sera usado no boao gravar:: nesse caso, botão ENVIAR da página NOF
  function novosDados() {
    setTipo("novo");
  }

  //sera usado apos a gravação dos dados novos
  function atualizaListaComNovoUsuario(response) {
    console.log(response);
    let { id, vaga, hobbie, nome, valor } = response.data;
    let obj = { "id": id, "nome": nome, "vaga": vaga, "hobbie": hobbie, "valor": valor };
    let users = CadastroVaga;
    users.push(obj);
    setCadastroVaga(users);
    limparDados("");
  }

  //sera usado ao clicar no botão gravar
  function gravarDados() {
    if (valor !== "" && hobbie !== "" && vaga !== "") {
      if (tipo === "novo") {
        axios
          .post(url + "vagas", {
            vaga: vaga,
            hobbie: hobbie,
            nome: nome,
            valor: valor,
                                  
          }, {
            headers:{ 'Access-Control-Allow-Origin': '*'}
          })
          
          .then((response) => atualizaListaComNovoUsuario(response))
          .catch((err) => console.log(err));
      }
    } else {
      alert("Error");
      console.log("Preencha os campos");
    }
  }

  function limparDados() {
    setNome("");
    setHobbie("");
    setValor("");
    setVaga("");
  }

  return (
    <div className="generalTxt">
      <p id="highText">
        {" "}
        &emsp; Olá usuário (nome)! Essa aba serve para você cadastrar uma nova
        oferta na aba Procurando moradores, então sugerimos que antes de
        cadastrar o que você busca, dê uma olhada nas ofertas já existentes!!
      </p>

      <section>
        <form action="#" method="get" target="_blank" autocomplete="off">
          <p>
            {" "}
            &emsp; Se você já olhou as ofertas ativas e não se interessou, crie
            sua própria oferta!
          </p>{" "}
          <br />
          <div id="initquest">
            <p> Você já reside em alguma residência?</p>
            <label for="moradiaTipoS">Sim: </label>
            <input type="radio" id="moradiaTipo" name="tipoMora" value="Sim" />
            <label for="moradiaTipoN">Não: </label>
            <input type="radio" id="moradiaTipo" name="tipoMora" value="Não" />
          </div>
        </form>

        <div className="row" id="rowNOF">
          <div className="column">
            <form action="#">
              <fieldset>
              &emsp;
                  {/* <button type="button" onClick={novosDados}>
                    Certeza?
                  </button> */}
                <p>Se sim:</p>
                <div style={{ display: "flex" }}>
                  <p>
                    Você reside em alguma república? <br />
                  </p>
                  &emsp;
                  <label for="moradiaTipoS">Sim: </label>
                  <input
                    type="radio"
                    id="moradiaTipo"
                    name="tipoMora"
                    value="Sim"
                  />

                  <label for="moradiaTipoN">Não: </label>
                  <input
                    type="radio"
                    id="moradiaTipo"
                    name="tipoMora"
                    value="Não"
                  />

                </div>

                
                <div onClick={novosDados}>
                  <label for="quantVag">Quantas vagas disponíveis? </label>
                  <input 
                    type="number"
                    name="numQuantVag"
                    value={vaga}
                    placeholder="vaga disponiveis"
                    onChange={(e) => {
                      setVaga(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label for="mailCli">
                    Quais os tres principais hobbies dos moradores atuais?{" "}
                  </label>
                  <input
                    type="text"
                    name="txthobbiesCli"
                    value={hobbie}
                    placeholder="hobbies"
                    onChange={(e) => {
                      setHobbie(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label for="mailCli">Se é uma república, qual o nome? </label>
                  <input
                    type="text"
                    name="txtrepName"
                    value={nome}
                    placeholder="Ex: Répública UNIFEIOS"
                    onChange={(e) => {
                      setNome(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label for="mailCli">
                    Qual o valor de permanencia médio na residência
                  </label>
                  <input
                    type="number"
                    name="numtaxaPag"
                    value={valor}
                    placeholder="Valor"
                    onChange={(e) => {
                      setValor(e.target.value);
                    }}
                  />
                </div>{" "}
                <br />
                <div
                  style={{
                    display: "block; padding-top: 10px; padding-right: 10px",
                  }}
                >

                  &emsp; &emsp;
                  <button type="button" onClick={gravarDados}>
                    Enviar
                  </button>
                  &emsp;
                  <button type="button" onClick={limparDados}>
                    Limpar campos
                  </button>
                </div>
              </fieldset>
            </form>
          </div>

          <div className="column">
            <form
              action="#"
              method="get"
              target="_blank"
              autocomplete="off"
              id="form2"
            >
              <fieldset>
                <p>Se não:</p>
                <div>
                  <label for="mailCli">
                    Quantos reais você está disposto a pagar por uma moradia?
                  </label>
                  <input
                    type="number"
                    id="taxaPag"
                    name="numtaxaPag"
                    placeholder="Valor"
                  />
                </div>
                <div>
                  <label for="mailCli">
                    Quais os tres principais hobbies dos moradores atuais?{" "}
                  </label>
                  <input
                    type="text"
                    id="hobbieCli"
                    name="txthobbiesCli"
                    placeholder="hobbies"
                  />
                </div>{" "}
                <br />
                <div>
                  &emsp;<button type="submit">Enviar</button>&emsp;
                  <button type="reset" onClick={limparDados}>
                    Limpar campos
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
