import { createSlice } from '@reduxjs/toolkit'
import API, { getCategories } from '../../http'


export const STATUS = Object.freeze({
    SECCESS: 'success',
    FAILED: 'failed',
    LOADING: 'loading',
})

const initialState = {
    data: false,
    status: false,
    single: false,
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategories: (state, actions) => {
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
    },
})

// Action creators are generated for each case reducer function
export const {
    setCategories,
    setStatus,
    setSingle,
} = categorySlice.actions

export default categorySlice.reducer

// Thunks
export function fetchCategories(page = 1, limit = 10, order = 'desc') {
    return async function fetchThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await getCategories(page, limit, order)
            dispatch(setCategories(res.data))
            dispatch(setStatus(STATUS.SECCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.FAILED))
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

// export function fetchMovie(id) {
//     return async function fetchSingleThunk(dispatch) {
//         dispatch(setLoading(true))
//         try {
//             const res = await API.get(`/api/movie/list/${id}`);
//             dispatch(setSingle(res.data))
//             dispatch(setLoading(false))
//         } catch (error) {
//             console.log(error.response.request._response)
//             dispatch(setLoading(false))
//         }
//     }
// }