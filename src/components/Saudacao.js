
function Saudacao({nome}){ 
    function gerarSaudacao(algumNome){
        return `Olá ${algumNome}, tudo bem?`
    }
    return<>{nome && <p>{gerarSaudacao(nome)}</p>}</> //só vai retornar a saudação se tiver algum nome no state.
}
export default Saudacao