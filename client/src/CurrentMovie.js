import React from 'react';

//title, rating, runtime, desc
export default function CurrentMovie(props) {
  return (
      <div className="left-current-side">
        {/*{console.log(props)}*/}
        <div className="current-movie">
          <h1 className="title">title</h1>
          <img
            className="thumbnail"
            src='imaa'
          />
          <p>rating : rating</p>
          <p>runtime : runtimemin</p>
          <p>description</p>
          <p className="description">
            desc
          </p>
        </div>
      </div>
  );
}
