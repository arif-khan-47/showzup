import { createSlice } from '@reduxjs/toolkit'
import { searchApi } from '../../http'


export const STATUS = Object.freeze({
    IDLE: 'idle',
    SECCESS: 'success',
    FAILED: 'failed',
    LOADING: 'loading',
})

const initialState = {
    data: [],
    status: STATUS.IDLE,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, actions) => {
            const { data } = actions.payload
            state.data = data
        },
        setStatus: (state, actions) => {
            state.status = actions.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setSearch,
    setStatus,
} = searchSlice.actions

export default searchSlice.reducer

// Thunks
export function fetchSearchData(queryString) {
    return async function fetchThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await searchApi(queryString)
            dispatch(setSearch(res.data))
            dispatch(setStatus(STATUS.SECCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.FAILED))
        }
    }
}
