import { createSlice } from '@reduxjs/toolkit'
import { getMovieBySlug, getSeries, getSeriesBySlug } from '../../http'

export const STATUS = Object.freeze({
    SECCESS: 'success',
    FAILED: 'failed',
    LOADING: 'loading',
    NOT_STARTED: false,
})

const initialState = {
    detailsData: false,
    detailsCache: false,
    status: STATUS.LOADING,
}

export const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        getMovieDetails: (state, actions) => {
            state.detailsData = actions.payload
        },
        getSeriesDetails: (state, actions) => {
            state.detailsData = actions.payload
        },
        setStatus: (state, actions) => {
            state.status = actions.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    getMovieDetails,
    getSeriesDetails,
    setStatus
} = detailsSlice.actions

export default detailsSlice.reducer

// Thunks
export function callgetMovieDetails(slug) {
    return async function fetchThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await getMovieBySlug(slug)
            dispatch(getMovieDetails(res.data.data))
            dispatch(setStatus(STATUS.SECCESS))
        } catch (error) {
            if (__DEV__) {
                console.log("🚀 ~ file: detailsSlice.js ~ line 53 ~ fetchThunk ~ error", error?.response?.data?.error || error)
            }
            dispatch(setStatus(STATUS.FAILED))
        }
    }
}
// get series by slug
export function callGetSeriesDetails(slug) {
    return async function fetchThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await getSeries(slug)
            dispatch(getSeriesDetails(res.data.data))
            dispatch(setStatus(STATUS.SECCESS))
        } catch (error) {
            if (__DEV__) {
                console.log("🚀 ~ file: detailsSlice.js ~ line 69 ~ fetchThunk ~ error", error?.response?.data?.error || error)
            }
            dispatch(setStatus(STATUS.FAILED))
        }
    }
}


