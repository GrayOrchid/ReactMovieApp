import React, { useEffect, useState } from "react";
import { faStar ,faHeart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YouTubePlayer from "react-player/youtube";
import { useParams } from "react-router";
import TvAPI from "../../API/tvApi";

import "./moviepage.css";

const TvPage = ({addFavoriteTv}) => {
    let { TVId} = useParams();
    let [Tv, setTv] = useState({});
    let [trailer,setTrailer] = useState([])
    let [genres  , setGenres] = useState({})
    let [countries,setCountries] = useState([]) 
    let [companies,setComapanies] = useState([])
    let [cast,setCast] = useState([])
    let [similar,setSmilar] = useState([])
  const youtubeUrl = "https://www.youtube.com/watch?v=";
console.log(Tv);
async function  getDeteils(params) {
await TvAPI.getTv(TVId,setTv,setGenres, setComapanies, setCountries)
await TvAPI.getTvTrailers(TVId,setTrailer,trailer) 
await TvAPI.getTvCast(TVId,setCast)
await TvAPI.getSimilarTv(TVId,setSmilar)
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
              src={`https://image.tmdb.org/t/p/original/${Tv.backdrop_path}`}
              alt=""
            />
          </div>
          <div className="filter"></div>
        </div>

        <div className="moviepage-title"> {Tv.name}</div>
        <div className="moviepage-info">
          <div className="moviepage-img">
            <img src={`https://image.tmdb.org/t/p/w500/${Tv.poster_path}`} />
          </div>
          <div className="moviepage-text">
            <div className="movie-tagline">{Tv.tagline}</div>
            <div className="movie-overview">
              <div>{Tv.overview}</div>
            </div>
            <div className="">
              <div></div>
            </div>
            <div className="movie-vote">
            <FontAwesomeIcon icon={  faStar }/>  <div>{Tv.vote_average}</div>
            </div>
            <div className="movie-item">
              <span>Release Date</span>
              <div>{Tv.first_air_date}</div>
            </div>
            <div className="movie-item">
              <span>Run Time</span>
              <div>{Tv.episode_run_time} min</div>
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
                <div className="movie-name">{e.name}</div>
                <div className="movie-add" onClick={()=>addFavoriteTv(e)}> <FontAwesomeIcon icon={faHeart}/>Add to favorite</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvPage;
