
/*Componente Evento importado em App.js */
function Evento({numero}){ /*declarando que pode ser chamado como propriedades(props)*/

function meuEvento(){/* evento criado*/
    console.log(`Opa,fui ativado! ${numero}`)
}

    return(
       <div>
       <p>Clique para disparar um evento</p>
        <button onClick={meuEvento}>Ativar</button> {/*Evento sendo chamado entre {} */}
       </div>
    )
}
export default Evento