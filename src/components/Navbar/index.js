// Navbar.js
import {Link} from 'react-router-dom'

import {Component} from 'react'

import SearchedMovies from '../SearchedMovies'

import './index.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {search: '', movieList: []}
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const {search} = this.state
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d4acb24c14591293a98e3b3a2f67915c&language&language=en-US&query=${search}&page=1`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const wantedData = data.results

    console.log(wantedData)

    this.setState({movieList: wantedData})
  }

  onChangeSearchInput = e => {
    e.preventDefault()
    this.getBlogsData()
  }

  render() {
    const {search, movieList} = this.state

    console.log(search)
    return (
      <>
        <div id="navbar">
          <div>
            <h1>MovieDB</h1>
          </div>
          <div>
            <Link to="/">PopularMovies</Link>
            <Link to="/top-rated">Top Rated</Link>
            <Link to="/upcoming">Upcoming</Link>
          </div>
          <div id="search-container">
            <form onSubmit={this.onChangeSearchInput}>
              <input
                type="text"
                id="search-bar"
                placeholder="Search..."
                value={search}
                onChange={e => this.setState({search: e.target.value})}
              />
              <button id="search-btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <SearchedMovies movieList={movieList} />
      </>
    )
  }
}

export default Navbar
