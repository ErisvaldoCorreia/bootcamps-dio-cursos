import React from 'react';
import ReactDOM from 'react-dom';
import ElementoDois from './componente/ElementoDois';
import "./styles.css";

// elemento personalizado para estudo de reaproveitamento. 
const MeuElemento = () => {
    return (
        <div>
            <h1>
                Esse é meu Elemento 
            </h1>
        </div>
    )
}

// constante do elemento Raiz - entrada do React na Aplicação
// comentário dentro do JSX do React seguem o padrão usado abaixo. 
const App = () => {
    return (
        <div>
            <h2>Aqui é o Elemento da Raiz</h2>
            
            {/* Aqui chamamos um elemento de outro local passando um parametro.  */}
            <ElementoDois titulo="Parametro Enviado" />
            
            <MeuElemento />

            <p className="classeCriada">Aqui usamos o className para receebr classes de CSS</p>
        </div>
    );
}

// Definição que envia o React para dentro do HTML
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);