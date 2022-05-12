import { axios } from 'hooks/worker'
import { IMovieAPIRes  } from 'types/movie.d'

const MOVIE_BASE_URL = `http://www.omdbapi.com/`

export interface Params {
  s:string
  page:number
}


export const getMovieApi = (params: Params) =>
  axios.get<IMovieAPIRes>(`${MOVIE_BASE_URL}/?apikey=${process.env.REACT_APP_API_KEY}`, {
    params,
  })
