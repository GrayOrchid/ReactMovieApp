import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteMovie = (props) => {
    return (
    
              <div className='movie'>
               <Link to={`/movie/${props.e.id}`}>
           
                     <div className="movie-vote">
                          {props.e.vote_average}
                     </div>
                  
               
                    <img src={`https://image.tmdb.org/t/p/w500/${props.e.poster_path}`}alt="" />
                    </Link>
               <div className="movie-info">

               <div className='movie-name'>{props.e.original_title} {props.e.name}</div>
               
                    <div className='movie-add' onClick={()=>props.removeFavoriteMovie(props.e)} ><FontAwesomeIcon icon={faXmark}/> Delete</div>
               </div>
               </div>

    );
}

export default FavoriteMovie;
