import React from 'react';

function Input() {
  return (
    <div>
      <h1>Food+BrewDog Beer</h1>

      <p>Wondering what beer would go well with your meal?</p>
      <p>Just enter in what foods you're eating to find a recommended beer pairing.</p>    
      
      <form id="form">
        <div className="form-group">
          <label htmlFor="food-input">Enter foods</label>
          <div id="validation-output"></div>
          <input type="text" className="form-control form-control-sm" id="food-input" placeholder="What are you eating?" />
        </div>
            
        <button type="submit" className="btn btn-primary">Find my beer!</button>
      </form>
    </div>
  );
}

export default Input;