import { axios } from 'hooks/worker'
import { IMovieAPIRes  } from 'types/movie.d'

const MOVIE_BASE_URL = `http://www.omdbapi.com/`

export interface Params {
  apikey: string
  s:string
  page:number
}


export const getMovieApi = (params: Params) =>
  axios.get<IMovieAPIRes>(`${MOVIE_BASE_URL}`, {
    params,
  })
