
import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento';
import Form from './components/Form';
import OutraLista from './components/OutraLista';
//import HelloWorld from './components/HelloWorld';
//import SayMyName from './components/SayMyName';
function App() {

    const meusItens = ['React','Vue','Angular'] //lista criada no proprio componente , mas pode vir de um servidor externo ou do servidor do BD


  return (

    <div className="App"> {/*a tag div é usada para encapsular tudo*/}
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/> {/*retorna lista vazia*/}
      <h1>Renderização Condicional</h1>
      <Condicional/>
      <h1>Testando Eventos</h1> {/* declarado aqui, porem esta vindo do arquivo index.css*/}
      <Evento numero="1"/>{/*posso ter evento modificado por um valor de propriedade*/}
      <Form/>
      {/*<SayMyName/>*/}
      {/*<HelloWorld/>*/}
    </div>
  );
}

export default App;
