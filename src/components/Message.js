import React from 'react';

const Message = ({errorMessage}) => {

  return (
    <div className="row">
      <div className="col-sm-10 offset-sm-1" id="message">
        {errorMessage}
      </div>
    </div>
  );
}

export default Message;