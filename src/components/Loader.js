import React from 'react';

const Loader = () => {
  return(
    <div className="row">
      <div className="col-sm-10 offset-sm-1 spinner" id="output">
        <div></div>
      </div>
    </div>
  );
}

export default Loader;