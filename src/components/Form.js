

function Form (){

    function cadastrarUsuario(e){ /* e, é a abreviação de event (evento da submissao)*/ 
        e.preventDefault()/*o método preventDefault vai parar a execuçao desse formulario(form padrao do HTML)e vai executar oq ta em seguida do preventDefault
        sempre que estiver usando o event submit vai ser usado o preventDefault*/
        console.log("Cadastrou o usuario")
    }

    return(

        <div>
        <h1>Meu cadastro:</h1>
        <form onSubmit={cadastrarUsuario}>{/*quando esse form for enviado ele vai disparar o evento
         (Formulario no HTML ele envia o dado pro BackEnd) como aqui nao tem o back , quando envia, ele some por isso usa o preventDefault*/}
            <div>
                <input type="text" placeholder="Digite o seu nome"/>
            </div>
            <div>
                <input type="submit" value="Cadastrar"/>{/*pq aqui é um input do tipo submit e nao um botao?*/}

            </div>
        </form> 
        </div>
    )
}export default Form