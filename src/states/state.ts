import { atom } from "recoil"

import { IMovie } from "types/movie.d"

const movieListState = atom<IMovie[]>({
  key: 'movieListState',
  default:[]
})

const bookMarkList = atom<IMovie[]>({
  key: 'bookMarkList',
  default: []
})

const pickMovie = atom<IMovie>({
  key: 'pickMovie',
  default: undefined
})

// 얘도 Grip에서 state로 바꿔줄수 있을 것 같고
const currentTabState = atom<boolean>({
  key: 'currentTabState',
  default: true
})

// 얘도 Grip에서 state로 바꿔줄 수 있을 것 같고 
const currentPageState = atom<number>({
  key: 'CurrentPageState',
  default: 1
})

// 얘는 Grip에서 state로 바꿔줄수 있을 것 같고
const filterText = atom<string>({
  key: 'filterText',
  default:''
})

export {
  movieListState,
  currentTabState,
  currentPageState,
  pickMovie,
  bookMarkList,
  filterText
}