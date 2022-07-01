
import { Route, Routes, useLocation } from 'react-router';
import Dashboard from './pages/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/homepage/HomePage';
import Moviepage from './pages/moviepage/MoviePage';
import TvPage from './pages/moviepage/TvPage';
import { useState,useEffect } from 'react';
import FavoriteMovies from './pages/favorite/FavoriteMovies';
import './main.css'
import FavoriteTVs from './pages/favorite/FavoriteTVs';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {

  let [favoriteMovies,setFavoriteMovies] = useState([])
  let [favoriteTvShows,setFavoriteTvShows] = useState([])
  let saveTvToLocalStorage = (item)=>{
    localStorage.setItem('save-tv-favorites' , JSON.stringify(item))
  }
  let saveMovieToLocalStorage = (item)=>{
    localStorage.setItem('save-movie-favorites' , JSON.stringify(item))
  }


		let addFavoriteMovie = (movie)=>{
			let favoriteMoviesList = [...favoriteMovies,movie]
			saveMovieToLocalStorage(favoriteMoviesList)
      setFavoriteMovies(favoriteMoviesList)

		}
    let addFavoriteTv = (TV)=>{
			let favoriteTvList = [...favoriteTvShows,TV]
			setFavoriteTvShows(favoriteTvList)
      saveTvToLocalStorage(favoriteTvList)
		}

    let removeFavoriteMovie = (movie)=>{
      let favoriteMoviesList = favoriteMovies.filter((e)=>e.id!==movie.id)
      saveMovieToLocalStorage(favoriteMoviesList)
      setFavoriteMovies(favoriteMoviesList)
      
    }

    let removeFavoriteTv = (movie)=>{
      let favoriteTvList  = favoriteTvShows.filter((e)=>e.id!==movie.id)
      setFavoriteTvShows(favoriteTvList)
      saveTvToLocalStorage(favoriteTvList)
      
    }
    useEffect(()=>{
      let getFavoriteMovies = JSON.parse(localStorage.getItem('save-movie-favorites'))
      if (getFavoriteMovies) {
        setFavoriteMovies(getFavoriteMovies)
      }
      let getFavoriteTv = JSON.parse(localStorage.getItem('save-tv-favorites'))
      if (getFavoriteTv) {
        setFavoriteTvShows(getFavoriteTv)
      }
    },[])


let location = useLocation()
  return (
    <div>
  
     <Navbar/>
  <AnimatePresence>
  <Routes>
     <Route path="/" element={<Homepage    addFavoriteTv={addFavoriteTv} addFavoriteMovie={addFavoriteMovie} />}/>
       <Route path='dashboard' element={<Dashboard favoriteMovies={favoriteMovies} favoriteTvShows={favoriteTvShows}/>}/>
       <Route path='favoriteMovies' element={<FavoriteMovies  favoriteMovies={favoriteMovies} removeFavoriteMovie={removeFavoriteMovie} />}/>
       <Route path='favoriteTvs' element={<FavoriteTVs favoriteTvShows={favoriteTvShows}  removeFavoriteTv={removeFavoriteTv}/>}/>
       <Route path='/movie/:movieId' element={<Moviepage   addFavoriteMovie={addFavoriteMovie}/>}/>
      <Route path='TV/:TVId' element={<TvPage addFavoriteTv={addFavoriteTv} />}/>
     </Routes>
  </AnimatePresence>
    </div>
    
  );
}

export default App;
