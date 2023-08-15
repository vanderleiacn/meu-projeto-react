
function SayMyName(props){ //o props ta passado como parametro e sendo chamado no arquivo principal que é o App.js
    return(
        <div>
            <p>Fala aí {props.nome},suave ?</p> 
        </div>
    )
} export default SayMyName