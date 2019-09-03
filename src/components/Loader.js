import React from 'react';

const Loader = () => {
  return(
    <div className="row">
      <div className="col-sm-10 offset-sm-1 d-flex justify-content-center">
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;