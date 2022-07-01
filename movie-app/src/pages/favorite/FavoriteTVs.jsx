import React from 'react';
import FavoriteTV from './FavoriteTV';
const FavoriteTVs = ({favoriteTvShows,removeFavoriteTv}) => {
    return (
        <div className="favorite-page">
        <div className="favorite-container">
        <div className='movies'>
         {favoriteTvShows.map((e)=>( 
           <FavoriteTV e={e} removeFavoriteTv={removeFavoriteTv}/>
         ))}
     </div>
        </div>
    </div>
    );
}

export default FavoriteTVs;
