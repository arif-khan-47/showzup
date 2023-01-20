import { createSlice } from '@reduxjs/toolkit'
import { getSectionByCategory } from '../../http'
import { STATUS } from './movieSlice'

const initialState = {
    activeCategory: '',
    loading: true,
    status: STATUS.SECCESS,
    data: [],
}

export const topCategorySlice = createSlice({
    name: 'topMenu',
    initialState,
    reducers: {
        setTopCategory(state, action) {
            state.activeCategory = action.payload
        },
        setTopCategoryLoading(state, action) {
            state.loading = action.payload
        },
        setTopCategoryData(state, action) {
            const { data } = action.payload
            state.data = data
        },
        setStatus: (state, actions) => {
            state.status = actions.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTopCategory, setTopCategoryLoading, setTopCategoryData, setStatus } = topCategorySlice.actions

export default topCategorySlice.reducer


export function fetchSectionByCategory(id) {
    return async function fetchSingleThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await getSectionByCategory(id);
            dispatch(setTopCategoryData(res.data))
            dispatch(setStatus(STATUS.SECCESS))
        } catch (error) {
            console.log(error.response.request._response)
            dispatch(setStatus(STATUS.FAILED))
        }
    }
}