import React from 'react';
import Beer from './Beer';

const Output = ({output}) => {
  const outputList = output.map((beer, i) => {
    return(
      <Beer 
        key={i+i}
        name={beer.name}
        img={beer.image_url}
        abv={beer.abv}
        foodPairing={beer.food_pairing}
      />
      
    );
  });

  return (
    <div className="row">
      <div className="col-sm-10 offset-sm-1" id="output">
        <div>{outputList}</div>
      </div>
    </div>
  );
}

export default Output;