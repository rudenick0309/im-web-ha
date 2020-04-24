import React from 'react';
import Header from './Header';
import MovieRankList from './MovieRankList';
import CurrentMovie from './CurrentMovie';
// import data from '../../server/data.json'
// import data from '../fakeData.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: null,
      movies: null,
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/movies').then(res => res.json()).then(data => this.setState({movies:data, currentMovie:data[0]}) )
  }

    handleCardClick(movie) {
        // let arr = []
        // arr.push(movie)
        this.setState({
            currentMovie: movie
        });
    }
//title, rating, runtime, desc
  render() {
    if(!this.state.movies) return <div>loading</div>
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <CurrentMovie movie={this.state.currentMovie}/>
          <MovieRankList handleCardClick={this.handleCardClick.bind(this)} movies={this.state.movies}/>
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