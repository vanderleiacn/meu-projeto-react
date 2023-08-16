
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return (

    <div className="App"> {/*a tag div é usada para encapsular tudo*/}
      <h1>Testando Eventos</h1> {/* declarado aqui, porem esta vindo do arquivo index.css*/}
      <Evento numero="1"/>{/*posso ter evento modificado por um valor de propriedade*/}
      <Evento numero="2"/>
      <Form/>
    </div>
  );
}

export default App;
