import React from 'react'

function myFunction(id) {
    document.getElementById(id).reset();
}

export default function NOF() {
  return (
  <div className='generalTxt'>

    <p id='highText'> Olá usuário (nome)! Essa aba serve para você cadastrar uma nova oferta na aba Procurando moradores, então sugerimos que antes de cadastrar o que você busca, dê uma olhada nas ofertas já existentes!!</p>

    <section>

      <form action="#" method="get" target="_blank" autocomplete="off">
        <p>Se você já olhou as ofertas ativas e não se interessou, crie sua própria oferta!</p> <br />
        
        <div id='initquest'>
        <p>Você já reside em alguma residência?</p>
          <label for="moradiaTipoS">Sim: </label>
          <input type="radio" id="moradiaTipo" name="tipoMora" value="Sim" />
          <label for="moradiaTipoN">Não: </label>
          <input type="radio" id="moradiaTipo" name="tipoMora" value="Não" />
        </div>
      </form>
      
      <div className='row'>
          <div className='column'>
          <form action="#">
          <fieldset>
              <p>Se sim:</p>

              <div style={{ display: "flex" }}>
                <p>Você reside em alguma república? <br /></p>
                <label for="moradiaTipoS">Sim: </label>
                <input type="radio" id="moradiaTipo" name="tipoMora" value="Sim" />
                <label for="moradiaTipoN">Não: </label>
                <input type="radio" id="moradiaTipo" name="tipoMora" value="Não" />
              </div>

              <label for="quantVag">Quantas vagas disponíveis? </label>


              <div>
                <input type="number" id="vagasCli" name="numQuantVag" placeholder="Vagas disponiveis" required />
              </div>

              <div>
                <label for="mailCli">Quais os tres principais hobbies dos moradores atuais? </label>
                <input type="text" id="hobbieCli" name="txthobbiesCli" placeholder="hobbies" />
              </div>

              <div>
                <label for="mailCli">Se é uma república, qual o nome? </label>
                <input type="text" id="repName" name="txtrepName" placeholder="Ex: Répública UNIFEIOS" />
              </div>

              <div>
                <label for="mailCli">Qual o valor de permanencia médio na residência</label>
                <input type="number" id="taxaPag" name="numtaxaPag" placeholder="Valor" />
              </div> <br />

              <div style={{ display: "block; padding-top: 10px; padding-right: 10px" }}>
                <button type="submit">Enviar</button>
                <button type="reset" onclick={myFunction}>Limpar campos</button>
              </div>
            </fieldset>
          </form>
          
          </div>
        

      <div className='column'>
        <form action="#" method="get" target="_blank" autocomplete="off" id="form2">
          <fieldset>
            <p>Se não:</p>

            <div>
              <label for="mailCli">Quantos reais você está disposto a pagar por uma moradia?</label>
              <input type="number" id="taxaPag" name="numtaxaPag" placeholder="Valor" />
            </div>

            <div>
              <label for="mailCli">Quais os tres principais hobbies dos moradores atuais? </label>
              <input type="text" id="hobbieCli" name="txthobbiesCli" placeholder="hobbies" />
            </div> <br />

            <div>
              <button type="submit">Enviar</button>
              <button type="reset" onclick={myFunction}>Limpar campos</button>
            </div>

          </fieldset>
        </form>

    </div>
    </div>
    </section>
  </div>
  )
}

