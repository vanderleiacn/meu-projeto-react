import { useState } from "react" //importar esse cara sempre para usar o hook

function Form (){
    function cadastrarUsuario(e){ /* e, é a abreviação de event (evento da submissao)*/ 
        e.preventDefault()/*o método preventDefault vai parar a execuçao desse formulario(form padrao do HTML)e vai executar oq ta em seguida do preventDefault
        sempre que estiver usando o event submit vai ser usado o preventDefault*/
        console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`) //valores declarados aqui é usados para resgatar o valor das const
        
    }

    const [name, setName] = useState()//passando um valor  como parametro dentro de useState(), é um valor default.
    const [password, setPassword] = useState()
    return(

        <div>
        <h1>Meu cadastro:</h1>
        <form onSubmit={cadastrarUsuario}>{/*quando esse form for enviado ele vai disparar o evento
         (Formulario no HTML ele envia o dado pro BackEnd) como aqui nao tem o back , quando envia, ele some por isso usa o preventDefault*/}
            <div>
                <label htmlFor="name">Nome:</label>{/*a instrução for ja é utilizada em JS, por isso aqui no html usado o atributo é htmlFor */}
                <input type="text"
                  id="name"
                  name="name" 
                  placeholder="Digite o seu nome"
                  onChange={(e) => setName(e.target.value)} /*a cada letra digitada nesse campo, faz com que modifique o valor no state.Seta o state aqui (usa o setName para atribuir o valor*/
                  />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password"
                  id="password"
                  name="password" 
                  placeholder="Digite sua senha"
                  onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Cadastrar"/>{/*pq aqui é um input do tipo submit e nao um botao?*/}

            </div>
        </form> 
        </div>
    )
}export default Form