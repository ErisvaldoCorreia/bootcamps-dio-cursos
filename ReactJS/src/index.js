import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ElementoDois from './componente/ElementoDois';
import RenderList from './componente/RenderList';
import "./styles.css";


// elemento personalizado para estudo de reaproveitamento.
const MeuElemento =
   (
    <div>
      <h1>
        Esse é meu Elemento
      </h1>
    </div>
  )

// constante do elemento Raiz - entrada do React na Aplicação
// comentário dentro do JSX do React seguem o padrão usado abaixo.
const App = () => {

  //define estado local para ser enviado por parametro
  const [ver, setVer] = useState(false);

  // a cada click no botão, enviamos uma negação do estado anterior
  // se for true fica false e vice versa
  const handleClick = () => {
    return setVer(!ver)
  }

  return (
    <div>
      <h2>Aqui é o Elemento da Raiz</h2>

      {/* Aqui chamamos um elemento de outro local passando um parametro.  */}
      <ElementoDois ver={ver} titulo="Parametro Enviado" />

      {/* Nesse caso usamos uma chamada de elemento sem return, o que permite usarmos apenas
      as chaves para invocar o mesmo no codigo. */}
      {MeuElemento}

      <p className="classeCriada">Aqui usamos o className para receber classes de CSS</p>

      <p>Abaixo seguem os valores da Lista Renderizada</p>
      <RenderList />

      <button onClick={handleClick}>Ver / Não Ver</button>
    </div>
  );
}

// Definição que envia o React para dentro do HTML
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
