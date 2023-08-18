import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUseEmail] = useState() //esse state é alterado a partir do momento que da submit no formulario

    function enviarEmail(e){
        e.preventDefault()
        setUseEmail(email)
    }
    
    function limparEmail(){
        setUseEmail('')
    }

    return(
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
              <input 
               type="email" 
               placeholder="Digite seu e-mail..." 
               onChange={(e) => setEmail(e.target.value)}
               />
              <button type="submit" onClick={enviarEmail}> Enviar e-mail</button> {/*quando clica em enviar nao aparece no dev tools oq foi feito. pq? */}
              {userEmail && ( //renderização condicional uma forma de validação (se tiver valor no input do email imprima a msg a baixo)
                <div>
                    <p>O e-mail do usuario é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
              )}
            </form>
        </div>
    )
}
export default Condicional