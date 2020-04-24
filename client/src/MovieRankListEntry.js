import React from 'react';


export default function MovieRankListEntry({handleCardClick,movie,movie:{runtime, rating, title, medium_cover_image, genres}}) {
  return (
    <div className="card" onClick={()=> handleCardClick(movie)}>
        <div style={{ flex: 3 }}>
            <img
              width="100%"
              height="100%"
              src={medium_cover_image}
            ></img>
        </div>

        <div style={{ flex: 7 }}>
            <h3 className="title">{title}</h3>
            <p className="rating">rating: {rating}</p>
            <p className="running-time">running time : {runtime} min</p>
            <p>genres</p>
            <div className="tag-list">
                {genres.map( genre => (
                    <div className="tag">{genre}</div>
                ))}
            </div>
        </div>
    </div>
    );
}
