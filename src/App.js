
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {
  const nome = "Joao"
  return (

    <div className="App"> {/*a tag div é usada para encapsular tudo*/}
      <h1>Testando CSS</h1> {/* declarado aqui, porem esta vindo do arquivo index.css*/}
      <Frase/>
      <Frase/>
      <SayMyName nome="Vanderléia"/> {/*nesse exemplo é chamado atraves do props(propriedade/atributo do componente)*/}
      <SayMyName nome="Maria"/> {/*nesse exemplo é chamado atraves do props(propriedade/atributo do componente)*/}
      <SayMyName nome={nome}/> {/*nesse exemplo esta sendo chamado a variavel nome*/}
      <Pessoa nome="Vanderléia" idade="35" profissao="Estudante" foto="https://via.placeholder.com/150"/>
      <List/>
    </div>
  );
}

export default App;
