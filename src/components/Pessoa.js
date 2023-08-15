
{/*usando recurso do JS {} , ja transforma esse objeto props no nome da propriedade sem ficar chamando esse mesmo objeto*/}
function Pessoa({nome,idade,profissao,foto}){ {/*quando existe mais de uma propriedade é passado como parametro pra nao ficar repetitivo o props */}
    return(
        <div>
            <img src={foto} alt={nome}/> 
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}export default Pessoa