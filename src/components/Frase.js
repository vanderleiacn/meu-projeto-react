
/* Styles é igual a props, é um objeto que condensou todas as classes em propriedades*/
import styles from './Frase.module.css' // importando o css 

function Frase() {
return(
    <div className={styles.fraseContainer}>{/* objeto style que herdou todas as classes como propriedades e criou um estilo independente na <div>*/}
        <p className={styles.fraseContent}> Este é um componente com uma frase</p>
        
    </div>
)
} export default Frase