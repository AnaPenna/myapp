import React from 'react'
function myFunction(id) {
    document.getElementById(id).reset();
}


export default function Signup() {
  return (
	<div className='generalTxt'>
	<div className='popup'>
		<section>
		<form action="#">
          <fieldset>
              <div>
                <label for="nomeCli"> Qual é o seu nome? </label>
                <input type="text" id="nomeCli" name="txtNomeCli" placeholder="EX: Maria do Bairro" />
              </div> <br />

              <div>
                <label for="mailCli"> Insira o seu endereço de e-mail!</label>
                <input type="text" id="emailCli" name="txtMailCli" placeholder="EX: BairroMari4@gmail.com " />
              </div> <br />

              <div>
                <label for="mailCli"> Crie uma senha: </label>
                <input type="password" id="passwordCli" name="txtPasswordCli" placeholder="EX: asdgtrcq@625372KAYkajsj@@555" />
              </div> <br />

              <div>
                <label for="mailCli"> Confirme sua senha: </label>
                <input type="password" id="passwordCCli" name="txtPasswordCCli" placeholder=" Sua senha aqui!! " />
              </div> <br />

              <div style={{ display: "block; padding-top: 10px; padding-right: 10px" }}>
                <button type="submit">Enviar</button>
                <button type="reset" onclick={myFunction}>Limpar campos</button>
              </div>
            </fieldset>
          </form>
		</section>

	</div>
	</div>

  )
}

