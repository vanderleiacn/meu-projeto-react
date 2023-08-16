
function Button(props){
    return <button onClick={props.event}>{props.text}</button>// ativando a propriedade(event) por meio de um evento(onClick)
}
export default Button