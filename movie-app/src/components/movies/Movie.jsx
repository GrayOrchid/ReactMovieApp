
import { faAdd, faHeart, faListCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Movie = (props) => {
    return (
    
              <motion.div className='movie'
              animate={{ opacity:1}}
               initial={{opacity:0}}
               exit={{opacity:0}}
               layout
               transition={{duration:4}}
           
             
      
              >
               <Link to={`/movie/${props.e.id}`}>
           
                     <div className="movie-vote">
                     <FontAwesomeIcon icon={  faStar }/>  {props.e.vote_average}
          
                     </div>
                    
                    <img src={`https://image.tmdb.org/t/p/w500/${props.e.poster_path}`}alt="" />
                    </Link>
               <div className="movie-info">

               <div className='movie-name'>{props.e.original_title} </div>
               
                    <div className='movie-add' onClick={()=>props.addFavoriteMovie(props.e)}> <FontAwesomeIcon icon={faHeart}/> Add to favorite</div>
               </div>
               </motion.div>
        
    );
}

export default Movie;
