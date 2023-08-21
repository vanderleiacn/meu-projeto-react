import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'


//esse componente Navbar tem o link que é onde a gente redireciona para as paginas que tem no projeto.
function Navbar(){//sendo exportado em App.js
    return(
        <ul className={styles.list}>{/* referencia as classes que sao usadas do css */}
          <li className={styles.item}>{/*Link to faz o roteamento por baixo dos panos(da cara de SPA)*/}
            <Link to="/">Home</Link>{/*Os Links faz os redirects*/}
          </li> 
          <li className={styles.item}>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
    )
}
export default Navbar