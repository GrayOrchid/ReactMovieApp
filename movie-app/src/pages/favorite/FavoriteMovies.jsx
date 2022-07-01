import React from 'react';

import '../../components/movies/movies.css'
import FavoriteMovie from './FavoriteMovie';
const FavoriteMovies = ({favoriteMovies,removeFavoriteMovie}) => {
    return (
       <div className="favorite-page">
           <div className="favorite-container">
           <div className='movies'>
            {favoriteMovies.map((e)=>( 
              <FavoriteMovie e={e} removeFavoriteMovie={removeFavoriteMovie}/>
            ))}
        </div>
           </div>
       </div>
    );
}

export default FavoriteMovies;
