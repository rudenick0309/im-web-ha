import React from 'react';
import MovieRankListEntry from './MovieRankListEntry';


export default function MovieRankList(props) {
  const {movies, handleCurrentMovie} = props;
  {console.log(movies)}
  {console.log('프랍',handleCurrentMovie)}
  return (
    <div className="right-movie-list">
      {movies.map( movie => {
        return (
          <MovieRankListEntry
              key={movie.id}
              title={movie.title}
              desc={movie.description_full}
              image={movie.medium_cover_image}
              rating={movie.rating}
              runtime={movie.runtime}
              genres={movie.genres}
              handleCurrentMovie={handleCurrentMovie}
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