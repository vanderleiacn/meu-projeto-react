
import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento';
import Form from './components/Form';
import OutraLista from './components/OutraLista';
//import HelloWorld from './components/HelloWorld';
//import SayMyName from './components/SayMyName';
import {useState} from 'react'
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
    const [nome, setNome] = useState()

    const meusItens = ['React','Vue','Angular'] //lista criada no proprio componente , mas pode vir de um servidor externo ou do servidor do BD


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

    // <div className="App"> {/*a tag div é usada para encapsular tudo*/}
    //   <h1>State Lift</h1>
    //   <SeuNome setNome={setNome}/>
    //   {nome} {/* faz aparecer o nome digitado embaixo do input, pq? */}
    //   <Saudacao nome={nome}/>
    //   <h1>Renderização de Listas</h1>
    //   <OutraLista itens={meusItens}/>
    //   <OutraLista itens={[]}/> {/*retorna lista vazia*/}
    //   <h1>Renderização Condicional</h1>
    //   <Condicional/>
    //   <h1>Testando Eventos</h1> {/* declarado aqui, porem esta vindo do arquivo index.css*/}
    //   <Evento numero="1"/>{/*posso ter evento modificado por um valor de propriedade*/}
    //   <Form/>
    //   {/*<SayMyName/>*/}
    //   {/*<HelloWorld/>*/}
    // </div>
  );
}

export default App;
