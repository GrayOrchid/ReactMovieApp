import React, { useEffect, useState } from 'react';
import MoviesAPI from '../../API/moviesApi';
import TvAPI from '../../API/tvApi';
import Moviesmap from '../../components/movies/MoviesMap';
import './homepage.css'
import { motion } from 'framer-motion';
const Homepage = ({favoriteMovies,addFavoriteMovie,removeFavoriteMovie , addFavoriteTv,removeFavoriteTv}) => {
    let [movies,setMovies] = useState([])
    let [trendTv,setTrendTv] = useState([])
let [search,setSearch] = useState('')
let [findMovies,setFindMovies] = useState([])
let [searchTv,setSearchTv] = useState([])

    async function getTrends(params) {
        await MoviesAPI.getTrendMovies(setMovies) 
        await TvAPI.getTrendTvShows(setTrendTv)
    }


async function searchMoviesAndTVShows() {
    await MoviesAPI.searchMovies(search,setFindMovies)
    await TvAPI.searchTvShows(search,setSearchTv)
}
    
    useEffect(()=>{
        getTrends()
    },[])

    useEffect(()=>{
        searchMoviesAndTVShows()
    },[search])

    return (
        <motion.div className='homepage'
        initial={{width:0}}
        animate={{width:'100%'}}
        exit={{x:window.innerWidth,transition:{duration:.5}}}
        >
       
          <div className="homepage-container">
           
          <div className="homepage-title">React Movie App</div>
            <div className="homepage-subtitle">Здесь вы можете найти  информию о фильмах, релизах,премьерах и сериалах  </div>
        <div className="homepage-form">
            <input type="text" className='homepage-input' placeholder='введите название фильма ' onChange={(e)=>setSearch(e.target.value)}/>
  
        </div>
    
       
          
          
          {search?
        <div className="homepage-results">Results {findMovies.length + searchTv.length}</div>  :
        <div className="homepage-results">Results 10</div>    
        }
        
    
        <Moviesmap movies={movies} search={search} findMovies={findMovies}  trendTv={trendTv} searchTv={searchTv} addFavoriteMovie={addFavoriteMovie} removeFavoriteMovie={removeFavoriteMovie}  addFavoriteTv={addFavoriteTv}/>
    
          </div>
        </motion.div>
    );
}

export default Homepage;
