import React from "react";
import Beer from "./Beer";

const Output = ({ output }) => {
  const outputList = output.map((beer, i) => {
    const { name, image_url, abv, food_pairing } = beer;

    return (
      <Beer
        key={i + i}
        name={name}
        img={image_url}
        abv={abv}
        foodPairing={food_pairing}
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
};

export default Output;
