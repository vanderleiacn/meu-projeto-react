import Button  from './evento/Button'


/*Componente Evento importado em App.js */
function Evento({numero}){ /*declarando que pode ser chamado como propriedades(props)*/
function meuEvento(){/* evento criado*/
    console.log(`Opa,fui ativado! ${numero}`)
    console.log(`Ativando primeiro evento!(por meio de props)`)
}

function segundoEvento(){
    console.log("Ativando o segundo evento!")
}

    return(
       <div>
       <p>Clique para disparar um evento:</p>
       <Button event={meuEvento} text="Primeiro Evento"/> {/* Button componente| event propriedade que chama o método dentro de {}, assim o componente vai entender que ta mandando uma funçao que ele vai executar depois*/}
        <button onClick={meuEvento}>Ativar</button> {/*Evento sendo chamado entre {} */}
        <Button event={segundoEvento} text="Segundo Evento"/> 
        {/*posso aproveitar o mesmo componente com props diferentes*/}
       </div>
       
    )
}
export default Evento