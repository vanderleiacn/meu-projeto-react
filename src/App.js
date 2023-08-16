
import './App.css';
//import HelloWorld from './components/HelloWorld';
import Evento from './components/Evento';
import Form from './components/Form';
{/*import SayMyName from './components/SayMyName';*/}
function App() {
  return (

    <div className="App"> {/*a tag div é usada para encapsular tudo*/}
      <h1>Testando Eventos</h1> {/* declarado aqui, porem esta vindo do arquivo index.css*/}
      <Evento numero="1"/>{/*posso ter evento modificado por um valor de propriedade*/}
      <Form/>
      {/*<SayMyName/>*/}
      {/*<HelloWorld/>*/}
    </div>
  );
}

export default App;
