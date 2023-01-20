import { createSlice } from '@reduxjs/toolkit'
import API from '../../http'


export const STATUS = Object.freeze({
    SECCESS: 'secces',
    FAILED: 'failed',
    LOADING: 'loading',
})

const initialState = {
    data: false,
    status: STATUS.SECCESS,
    single: false,
    loading: false,
}

export const MovieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, actions) => {
            const { data } = actions.payload
            state.data = data
        },
        setStatus: (state, actions) => {
            state.status = actions.payload
        },
        setSingle: (state, actions) => {
            const { data } = actions.payload
            state.single = data
        },
        setLoading: (state, actions) => {
            state.loading = actions.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setMovies,
    setStatus,
    setSingle,
    setLoading,
} = MovieSlice.actions

export default MovieSlice.reducer

// Thunks
export function fetchMovies(page = 1, limit = 25, order = 'desc') {
    return async function fetchMoviesThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await API.get(`/api/movie/list?page=${page}&limit=${limit}&order=${order}`);
            dispatch(setMovies(res.data))
            dispatch(setStatus(STATUS.SECCESS))
        } catch (e) {
            dispatch(setStatus(STATUS.FAILED))
        }
    }
}
// fetch single movie by slug
export function fetchSingleMovie(slug) {
    return async function fetchSingleMovieThunk(dispatch) {
        dispatch(setLoading(true))
        try {
            const res = await API.get(`/api/movie/slug/${slug}`);
            dispatch(setSingle(res.data))
            dispatch(setLoading(false))
        } catch (e) {
            dispatch(setLoading(false))
        }
    }
}
// // fetch Reports
// export function fetchMovieReport() {
//     return async function fetchMovieReportThunk(dispatch) {
//         dispatch(setStatus(STATUS.LOADING))
//         try {
//             const res = await movieReport();
//             dispatch(setReport(res.data))
//             dispatch(setStatus(STATUS.SECCESS))
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(STATUS.FAILED))
//         }
//     }
// }

// export function fetchSearchMovie(search) {
//     return async function fetchMovieThemeThunk(dispatch) {
//         dispatch(setStatus(STATUS.LOADING))
//         try {
//             const res = await movieSearch(search);
//             dispatch(setMovies(res.data))
//             dispatch(setStatus(STATUS.SECCESS))
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(STATUS.FAILED))
//         }
//     }
// }

export function fetchMovie(id) {
    return async function fetchSingleThunk(dispatch) {
        dispatch(setLoading(true))
        try {
            const res = await API.get(`/api/movie/list/${id}`);
            dispatch(setSingle(res.data))
            dispatch(setLoading(false))
        } catch (error) {
            console.log(error.response.request._response)
            dispatch(setLoading(false))
        }
    }
}