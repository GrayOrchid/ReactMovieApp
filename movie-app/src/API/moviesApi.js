import axios from "axios";

let key = "82c0eaa6b4a3e3b9581bcd29c4e1872f";
export default class MoviesAPI {
    static async getTrendMovies(setMovies,setFilter) {
		let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ru-RUS`)
    setMovies(response.data.results)
		return response
	}
	static async getMovieDetails(movieId, setGenres, setComapanies, setCountries, setMovie) {

		
		let response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`)

		let movieData = response.data

		if (movieData) {
			setMovie(movieData)
		}
		if (movieData.production_countries) {
			setCountries(movieData.production_countries)
		}
		if (movieData.production_companies) {
			setComapanies(movieData.production_companies)
		}
		setGenres(movieData.genres[0])

		return response
	}
	static async searchMovies(query,setSearchMovie) {
		let response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ru-RUS&query=${query} `)
	if (response.data.results) {
		setSearchMovie(response.data.results)
	}	
		return response
	}

	static async getMovieTrailer(movieId, setTrailer) {
		let response = await axios.get(` https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=ru-RUS `)
		let trailers = response.data.results
		if (trailers) {
			let trailersFilter = trailers.filter((e) => (e.type === 'Trailer')).slice(0,3)
			setTrailer(trailersFilter)
		

			
		}
		

		return response
	}

	static async getMovieCast(movieId, setCast) {
		let response = await axios.get(` https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US `);
		let castData = response.data.cast
		setCast(castData)

		return response
	}

	static async getSimilarMovies(movieId, setSimilar) {
		let response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=82c0eaa6b4a3e3b9581bcd29c4e1872f&language=en-US&page=1`)
		setSimilar(response.data.results)

        return response
	}
}

