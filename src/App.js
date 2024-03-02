// App.js

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'
import PopularMovies from './components/PopularMovies'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import SingleMovieDetails from './components/SingleMovieDetails'
import SearchedMovies from './components/SearchedMovies'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={PopularMovies} />
      <Route exact path="/top-rated" component={TopRatedMovies} />
      <Route exact path="/upcoming" component={UpcomingMovies} />
      <Route exact path="/search/:search" component={SearchedMovies} />
      <Route exact path="/moviesList/:id" component={SearchedMovies} />
    </Switch>
    <SingleMovieDetails />
  </BrowserRouter>
)

export default App
