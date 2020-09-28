import React from 'react';

const MockeData = [
  {
    id: 1,
    name: 'Erisvaldo Correia'
  },
  {
    id: 2,
    name: 'Fulando da Silva'
  },
  {
    id: 3,
    name: 'Ciclano de Souza'
  }
]

const RenderList = () => {

  const renderItem = (value) => {
    return (
      <li key={`mock-${value.id}`}>
        {value.name}
      </li>
    )
  }

  return (
    <div>
      <ul>
        {MockeData.map(renderItem)}
      </ul>
    </div>
  )
}

export default RenderList;
