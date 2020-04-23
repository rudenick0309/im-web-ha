import React from 'react';

//title, rating, runtime, desc
export default function CurrentMovie(props) {
  return (
      <div className="left-current-side">
        {console.log(props)}
        <div className="current-movie">
          <h1 className="title">{props.title}</h1>
          <img
            className="thumbnail"
            src={props.image}
          />
          <p>rating : {props.rating}</p>
          <p>runtime : {props.runtime}min</p>
          <p>description</p>
          <p className="description">
            {props.desc}
          </p>
        </div>
      </div>
  );
}
