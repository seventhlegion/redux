import React from "react";
import Foods from "../../public/Data/Foods";
import { StyledFood } from "./Style/Food.style";

export default function Main() {
  return (
    <>
        <StyledFood>
            {Foods.map((food) => (
              food.type === 'main'?
                <div className="container">
                  <h1>{food.type === 'main'?food.payload.name: null}</h1>
                  <p>{food.type === 'main'? food.payload.discriptions: null}</p>
                  <div>
                    {food.type === 'main'? <input type={"button"} value={"Add To Cart"} />: null}
                    <p>{food.type === 'main'? food.payload.cost + ' $': null}</p>
                  </div>
                </div>: null
            ))}
        </StyledFood>
    </>
  );
}
