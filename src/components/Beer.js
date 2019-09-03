import React from 'react';

const Beer = ({name, abv, img, foodPairing}) => {
  return(
    <ul>
      <li><img src={img} /></li>
      <li>{name}</li>
      <li>ABV: {abv}</li>
      <li>This beer is great with:
        <ul className="food-list">
          <li>{foodPairing[0]}</li>
          <li>{foodPairing[1]}</li>
          <li>{foodPairing[2]}</li>
        </ul>
      </li>
    </ul>
  );
}

export default Beer;