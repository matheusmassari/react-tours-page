import React from "react";
import { useState } from "react"

function Tour({ id, image, info, price, name }) {
  const [readMore, setReadMore] = useState(false);

 
  
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">R${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}>{readMore ? 'esconder' : 'ler mais'}</button>
        </p>
        <button className="delete-btn">ocultar</button>
      </footer>
    </article>
  );
}

export default Tour;
