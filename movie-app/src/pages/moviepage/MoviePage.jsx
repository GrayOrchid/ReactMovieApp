import React, { useEffect, useState } from "react";
import YouTubePlayer from "react-player/youtube";
import { faStar ,faHeart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from "react-router";
import MoviesAPI from "../../API/moviesApi";
import "./moviepage.css";

const Moviepage = ({addFavoriteMovie}) => {
  let { movieId } = useParams();
  let [movie, setMovie] = useState({});
  let [trailer, setTrailer] = useState([]);
  let [genres, setGenres] = useState([]);
  let [countries, setCountries] = useState([]);
  let [similar, setSimilar] = useState([]);
  let [companies, setComapanies] = useState([]);
  let [cast, setCast] = useState([]);
  const youtubeUrl = "https://www.youtube.com/watch?v=";

  async function getDeteils() {
    await MoviesAPI.getMovieDetails( movieId,setGenres,setComapanies,setCountries,setMovie);
    await MoviesAPI.getMovieTrailer(movieId, setTrailer);
    await MoviesAPI.getMovieCast(movieId, setCast);
    await MoviesAPI.getSimilarMovies(movieId, setSimilar);
  }

  useEffect(() => {
    getDeteils();

  }, []);

  return (
    <div className="moviepage">
      <div className="moviepage-container">
        <div className="moviepage-poster">
          <div className="img">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt=""
            />
          </div>
          <div className="filter"></div>
        </div>

        <div className="moviepage-title"> {movie.original_title}</div>
        <div className="moviepage-info">
          <div className="moviepage-img">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          </div>
          <div className="moviepage-text">
            <div className="movie-tagline">{movie.tagline}</div>
            <div className="movie-overview">
              <div>{movie.overview}</div>
            </div>
            <div className="">
              <div></div>
            </div>
            <div className="movie-vote">
            <FontAwesomeIcon icon={  faStar }/>  <div>{movie.vote_average}</div>
            </div>
            <div className="movie-item">
              <span>Release Date</span>
              <div>{movie.release_date}</div>
            </div>
            <div className="movie-item">
              <span>Run Time</span>
              <div>{movie.runtime} min</div>
            </div>
            <div className="movie-item">
              <span>Genre</span>
              <div>{genres.name}</div>
            </div>
          </div>
        </div>
        <div className="movie-trailers">
          {trailer.map((e, index) => (
            <div className="movie-trailer" key={index}>
              <div>{e.name}</div>
              <YouTubePlayer
                url={youtubeUrl + e.key}
                width={"100%"}
                controls
              ></YouTubePlayer>
            </div>
          ))}
        </div>
        <div className="cast">
          {cast.slice(0, 5).map((e) => (
            <div className="cast-items">
              <img
                src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`}
                alt=""
              />
              <div className="cast-item cast-name"> {e.name}</div>
              <div className="cast-item cast-character">{e.character}</div>
            </div>
          ))}
        </div>

        <div className="block-title">Simillar Movies</div>
        <div className="similar-movies">
          {similar.slice(0, 5).map((e) => (
            <div className="movie">
                      <div className="movie-vote">
                          {e.vote_average}
                     </div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                alt=""
              />

              <div className="movie-info">
                <div className="movie-name">{e.original_title}</div>
                <div className="movie-add" onClick={()=>addFavoriteMovie(e)}> <FontAwesomeIcon icon={faHeart}/> Add to favorite</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Moviepage;
