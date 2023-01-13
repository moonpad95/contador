import { set } from 'lodash';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


function Contador() {
    const  [contador, setContador] =  useState(-1); 

    const sumar = () =>{
        let contador1 = contador;

        contador1++;
        setContador(contador1);
    }
    const restar = () =>{
        let contador1 = contador;

        contador1--;
        setContador(contador1);
    }
    const reset = () =>{
        let contador1 = contador;

        contador1 = 0;
        setContador(contador1);
    }

    return ( 
        <>
            <p>
                Contador: { contador }
            </p>

            <Button variant="primary" onClick={sumar}>+</Button>{' '}
            <Button variant="danger" onClick={restar}>-</Button>{' '}
            <Button variant="success" onClick={reset}>Iniciar de nuevo</Button>{' '}


        </>

     );
}

export default Contador;