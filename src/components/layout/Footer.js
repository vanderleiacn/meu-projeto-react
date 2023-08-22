import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa' 
import styles from './Footer.module.css'

function Footer(){
   return(
   <footer> 
    <ul className={styles.social_list}>{/* pq la na classe o nome separa com - e aqui tem que referenciar com _ */}
        <li><FaFacebook/></li> {/*usando o FaFacebook como componente ja tenho acesso ao icone do Facebook*/}
        <li><FaInstagram/></li>
        <li><FaLinkedin/></li>
    </ul>
    <p>Nosso rodapé</p>
    </footer>) 
}
export default Footer