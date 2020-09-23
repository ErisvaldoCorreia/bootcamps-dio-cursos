import React from 'react';

const ElementoDois = ({titulo}) => {
    return (
        <div>
            <p>Este elemento vem de outra pasta!</p>
            <p>Ele recebe um parametro na chamada</p>
            <br />
            <p>{titulo}</p>
        </div>
    )
}

export default ElementoDois;