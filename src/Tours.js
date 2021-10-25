import React from "react";
import Tour from "./Tour";

function Tours({ tours }) {
  return (
    <>
      <div className="title">
        <h2>tours pelo maranhão</h2>
        <div className="underline"></div>
      </div>
      <div>{tours.map((tour) => {
        return <Tour key={tour.id} {...tour}></Tour>
      })}</div>
    </>
  );
}

export default Tours;
