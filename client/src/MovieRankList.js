import React from 'react';
import MovieRankListEntry from './MovieRankListEntry';


export default function MovieRankList({movies, handleCardClick}) {
  return (
    <div className="right-movie-list">
      {movies.map( movie => {
        return (
          <MovieRankListEntry
              handleCardClick={handleCardClick}
              movie={movie}
          />
        )
      })}
    </div>
  );
}

// description_full
// medium_cover_image
// title
// rating
// 문자열 {runtime}
// 장르가 배열인데, 배열을 전부 하나씩 뿌려주면 됨.