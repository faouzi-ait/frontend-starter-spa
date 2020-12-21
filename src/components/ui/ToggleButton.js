import React from 'react';

function ToggleButton(props) {
  return (
    <button onClick={props.onClick} className={props.classes} {...props}>
      {props.content}
    </button>
  );
}

export default ToggleButton;
