import React from 'react';
// import './Input.scss';
export const InputArea = (props: Input) => (
    <div>
        <input onChange={(event) => props.setValue && props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}
               className='input__item'/>
    </div>
);

