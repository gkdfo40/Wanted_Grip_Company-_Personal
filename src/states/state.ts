import { atom, selector } from "recoil"
import { recoilPersist } from "recoil-persist"
import { IMovie } from "types/movie.d"

const movieListState = atom<IMovie[]>({
  key: 'movieListState',
  default:[]
})

const { persistAtom } = recoilPersist({
  key: 'GripBookMark'
})

const bookMarkList = atom<IMovie[]>({
  key: 'GripBookMark',
  default: [],
  effects_UNSTABLE: [persistAtom]
})

const pickMovie = atom<IMovie>({
  key: 'pickMovie',
  default: {
    Title: '',
    Type: '',
    Year: '',
    imdbID: '',
    Poster: ''
  }
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

const bookMarkButtonState = selector<boolean>({
  key: 'bookMarkButtonState',
  get: ({ get }) => {
    const booklist = get(bookMarkList)
    const pickedMoive = get(pickMovie)

    const result = booklist.filter(book => book.imdbID === pickedMoive.imdbID)
    if (result.length === 0)
      return true
    return false
  }
})

export {
  movieListState,
  currentTabState,
  currentPageState,
  pickMovie,
  bookMarkList,
  filterText,
  bookMarkButtonState
}