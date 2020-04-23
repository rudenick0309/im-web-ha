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

    handleCurrentMovie(movie) {
        // let arr = []
        // arr.push(movie)
        this.setState({
            currentMovie: [movie]
        });
    }
//title, rating, runtime, desc
  render() {
    const {movies} = this.state.movies;
    const {currentMovie} = this.state;
    // const current = {currentMovie.[0]}
    // console.log(currentMovie.title)
    return (
      <>
        <div className="header">
          <Header  />
        </div>
        <div className="body">
            <CurrentMovie />

          <MovieRankList movies={movies}
                         handleCurrentMovie={this.handleCurrentMovie.bind(this)}/>
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