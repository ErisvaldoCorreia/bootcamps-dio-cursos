import React from 'react';

const valor = true
const ElementoA = () => {
  return (
    <p>Apresentado se valor True</p>
  )
}
const ElementoB = () => {
  return (
    <p>Apresentado se valor False</p>
  )
}

// titulo recebido por parametro de chamada
// ver define se o titulo será ou nao visivel
const ElementoDois = ({ titulo, ver }) => {
  return (
    <div>
      <p>Este elemento vem de outra pasta!</p>
      <p>Ele recebe um parametro na chamada</p>
      <br />

      {/* Na próxima linha determinamos a visbilidade do titulo baseado
      na condicional da variavel. */}
      {ver && (
        <p>{titulo}</p>
      )}

      {/* Operação ternaria decidindo qual o elemento irá renderizar em
      casos de mais de um possivel retorno. */}
      {valor ? (<ElementoA />) : (<ElementoB />)}
    </div>
  )
}

export default ElementoDois;
