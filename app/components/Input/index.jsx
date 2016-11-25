/**
*
* Input
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


function Input(props) {
  const {input, placeholder, handleChange,  className, labelClass, type, name} = props;
  const controlClass = className ? className : "form-control";

  return (
    <div className="form-group">
      <input
        type={ type }
        name={ name }
        placeholder= ""
        autoComplete="off"
        className={ controlClass }
        onChange= { handleChange}
        placeholder={ placeholder }/>
    </div>
  );
}

export default Input;
