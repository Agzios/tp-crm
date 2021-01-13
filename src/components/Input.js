import React from 'react';

const Input = (props) => {
    return (
        <div className='input-field col s6'>
            <input id={props.id} type='text' className='validate' />

            <label htmlFor={props.id}>
                {props.content}
            </label>
        </div>
    )
}

export default Input;