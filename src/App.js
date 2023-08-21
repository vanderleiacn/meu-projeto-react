
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router> {/*(o Router envolve toda a aplicação).esse componente vai adaptar a aplicaçao para o Router(posso definir as views e componentes padrao(que se repetem de view para view))*/}
        <Navbar/>{/*componente ta sendo importado de Navbar */}
        <Switch>{/*(diz onde e qual area altera as views)o Switch declara as rotas*/}
          <Route exact path='/'> {/*(exact vai garantir que a home só vai acessar quando o usario acessar só a / do site a /+ alguma coisa)aqui é a rota que vai dizer q a  url / vai ser representada pelo componente ex:Home*/}
            <Home/>
          </Route>
          <Route path='/empresa'>
            <Empresa/>
          </Route>
          <Route path='/contato'>
            <Contato/>
          </Route>
        </Switch>
        <Footer/>{/*tudo que ta fora de switch nao vai ser substituido, vai ser reaproveitado pagina a pagina */}
    </Router>
  );
}
export default App;
