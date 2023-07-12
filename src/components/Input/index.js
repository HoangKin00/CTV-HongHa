import React from 'react';
import './input.scss';

const Input = ({ value, handleValue, title, require, disable, type, name }) => {
  return (
    <div className='input'>
      <label>
        {title}
        {require && <span>*</span>}
      </label>
      <input
        name={name || ''}
        type={type || 'text'}
        value={value || ''}
        disabled={disable || false}
        onChange={handleValue}
      />
    </div>
  );
};

export default Input;
