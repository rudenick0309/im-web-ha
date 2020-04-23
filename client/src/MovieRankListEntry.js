import React from 'react';
import MovieRankListEntryGenres from "./MovieRankListEntryGenres";

export default function MovieRankListEntry(props) {
  return (
    <div className="card" onClick={()=> props.handleCurrentMovie(props)}>
        {/*{console.log(props.handleCurrentMovie)}*/}
        <div style={{ flex: 3 }}>
            <img
              width="100%"
              height="100%"
              src={props.image}
            ></img>
        </div>

        <div style={{ flex: 7 }}>
            <h3 className="title">{props.tilte}</h3>
            <p className="rating">rating: {props.rating}</p>
            <p className="running-time">running time : {props.runtime} min</p>
            <p>genres</p>
                {/*{console.log('장르 확인', {props.genres})}*/}
            <div className="tag-list">
                {/*{props.genres.map( genre => console.log(genre))*/}

                    <div className="tag">{props.genres}</div>
                    {/*<div className="tag">Drama</div>*/}
                    {/*<div className="tag">Fantasy</div>*/}
                    {/*<div className="tag">Sci-Fi</div>*/}

            </div>
        </div>
    </div>
    );
}
