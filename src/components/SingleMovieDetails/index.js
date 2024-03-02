import {Component} from 'react'

import './index.css'

class SingleMovieDetails extends Component {
  componentDidMount() {
    this.onClickHandler()
  }

  onClickHandler = async () => {
    const url = `https://api.themoviedb.org/3/movie/$?api_key=d4acb24c14591293a98e3b3a2f67915c&language=en-US`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const updatedData = data.results

    console.log(updatedData)
  }

  render() {
    const {movieList} = this.props

    console.log(movieList)

    return <div>hii</div>
  }
}

export default SingleMovieDetails
