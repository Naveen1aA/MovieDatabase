import {Component} from 'react'

import './index.css'

import SingleMovieDetails from '../SingleMovieDetails'

class SearchedMovies extends Component {
  render() {
    const {movieList} = this.props

    return (
      <div>
        {movieList &&
          movieList.map(item => (
            <div>
              <img
                alt="img"
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              />
              <h1>{item.title}</h1>
              <p>Rating: {item.vote_average}</p>
              <button type="button">View Details</button>
            </div>
          ))}
        <SingleMovieDetails movieList={movieList} />
      </div>
    )
  }
}

export default SearchedMovies
