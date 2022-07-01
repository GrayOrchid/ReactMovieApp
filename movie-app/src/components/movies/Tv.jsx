import { faStar,faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Tv = (props) => {
    return (
        <motion.div className='movie'
        animate={{ opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        layout
        transition={{duration:.5}}
        >
   
    
<Link to={`/TV/${props.e.id}`}>
<div className="movie-vote">
                      <FontAwesomeIcon icon={faStar}/>              {props.e.vote_average}
                     </div>
 
        
             <img src={`https://image.tmdb.org/t/p/w500/${props.e.poster_path}`}alt="" />
             </Link>
        <div className="movie-info">
        <div className='movie-name'>{props.e.name}</div>
             <div className='movie-add' onClick={()=>props.addFavoriteTv(props.e)}><FontAwesomeIcon icon={faHeart}/> Add to favorite</div>
        </div>

        </motion.div>
    );
    
}

export default Tv;
