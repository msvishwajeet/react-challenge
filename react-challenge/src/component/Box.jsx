
import React from 'react';

function Box(props) {
  return (
    <div className='box' style={{margin:props.margin}} >
      100px Height Box
    </div>
  );
}

export default Box;