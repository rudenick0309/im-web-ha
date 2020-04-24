import React from 'react';

//title, rating, runtime, desc
export default function CurrentMovie({movie:{description_full, runtime, rating, title, medium_cover_image}}) {
  return (
      <>
          <div className="left-current-side">
            <div className="current-movie">
              <h1 className="title">{title}</h1>
              <img
                className="thumbnail"
                src={medium_cover_image}
              />
              <p>rating : {rating}</p>
              <p>runtime : {runtime}min</p>
              <p>description</p>
              <p className="description">
                {description_full}
              </p>
            </div>
          </div>
      </>
  );
}
