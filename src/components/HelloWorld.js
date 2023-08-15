import Frase from './Frase'; //importado aqui e precisa ser chamado dentro do componente
// cada componente criado precisa ser importado no arquivo e chamado no componente que quer ser utilizado 
// App arquivo principal 

function HelloWorld (){ //uma funçao é um componente
    return( // dentro desse return é html. podendo chamar uma variavel ou aplicar JS se estiver dentro de {}
        <div>
            <Frase/>
            <h1> Meu primeiro componente </h1>
            <Frase/>
            <Frase/>
        </div>
    )

}export default HelloWorld