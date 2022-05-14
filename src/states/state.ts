import { atom, AtomEffect, selector } from 'recoil'
import { IMovie } from 'types/movie.d'

const movieListState = atom<IMovie[]>({
  key: 'movieListState',
  default:[]
})

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
    ({ setSelf, onSet }) => {
      const savedValue = localStorage.getItem(key)
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue))
      }
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue))
      })
    }

const bookMarkList = atom<IMovie[]>({
  key: 'GripBookMark',
  default: [],
  effects_UNSTABLE: [
    localStorageEffect<IMovie[]>('GripBookMark')
  ]
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

const currentTabState = atom<boolean>({
  key: 'currentTabState',
  default: true
})

const currentPageState = atom<number>({
  key: 'CurrentPageState',
  default: 1
})

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