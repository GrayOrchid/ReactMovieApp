import React from 'react';
import Movie from './Movie';
import './movies.css'
import Tv from './Tv';
const Moviesmap = ({movies,search,findMovies,trendTv,searchTv,addFavoriteMovie,addFavoriteTv}) => {

    return (

<div className='movies'>

{search?<>   {findMovies.map((e,index)=>( 
<>
<Movie key={index} e={e} />

</>
    
   ))}
    {searchTv.map((e,index)=>( 
<>
<Tv key={index} e={e} addFavoriteTv={addFavoriteTv}/>

</>
    
   ))}
   
   </>:
   <>
      {movies.slice(0,5).map((e,index)=>( 
    <Movie key={index} e={e} addFavoriteMovie={addFavoriteMovie} />
   ))}
      {trendTv.slice(0,5).map((e,index)=>( 
    <Tv key={index} e={e}  addFavoriteTv={addFavoriteTv}/>
   ))}
   </>
   }



</div>
    );
}

export default Moviesmap;
