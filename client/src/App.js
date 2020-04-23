import React from 'react';
import Header from './Header';
import MovieRankList from './MovieRankList';
import CurrentMovie from './CurrentMovie';
import data from '../fakeData.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: null,
      movies: data
    };
  }
  // componentDidMount() {
  //
  // }

    handleCardClick(movie) {
        // let arr = []
        // arr.push(movie)
        this.setState({
            currentMovie: movie
        });
    }
//title, rating, runtime, desc
  render() {
    const {movies} = this.state.movies;
    const {currentMovie} = this.state;
    // const current = {currentMovie.[0]}
      {console.log({currentMovie})}
    return (
      <>
        <div className="header">
          <Header  />
        </div>
        <div className="body">
            {currentMovie === null? <CurrentMovie title={movies[0].title} rating={movies[0].rating} runtime={movies[0].runtime} desc={movies[0].description_full} image={movies[0].medium_cover_image}/> :
                <CurrentMovie title={currentMovie.title} rating={currentMovie.rating} runtime={currentMovie.runtime} desc={currentMovie.desc} image={currentMovie.image}/>}


          <MovieRankList movies={movies}
                         handleCardClick={this.handleCardClick.bind(this)}/>
        </div>
      </>
    );
  }
}

export default App;
// medium_cover_image
// title
// rating
// 문자열 {runtime}
// 장르가 배열인데, 배열을 전부 하나씩 뿌려주면 됨.