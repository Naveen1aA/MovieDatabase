// TopRatedMovies.js
import {Component} from 'react'

import './index.css'

class TopRatedMovies extends Component {
  state = {movieList: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/top_rated?api_key=d4acb24c14591293a98e3b3a2f67915c&language=en-US&page=1'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const updatedData = data.results

    this.setState({movieList: updatedData})
  }

  render() {
    const {movieList} = this.state
    return (
      <>
        <div>
          {movieList.map(item => (
            <div className="popularMovies">
              <img
                alt="img"
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              />
              <h1>Title: {item.title}</h1>
              <p>Rating: {item.vote_average}</p>
              <button type="button" onClick={this.handleClick}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default TopRatedMovies
