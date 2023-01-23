import { createSlice } from '@reduxjs/toolkit'
import { addToHistory, deleteFromHistory, getHistory, getSections, updateHistory } from '../../http'

export const STATUS = Object.freeze({
    SECCESS: 'success',
    FAILED: 'failed',
    LOADING: 'loading',
    NOT_STARTED: false,
})

const initialState = {
    sectionData: [],
    sectionCache: [],
    status: STATUS.NOT_STARTED,
}

export const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        setSection: (state, actions) => {
            const { data } = actions.payload
            state.sectionData = data
        },
        setStatus: (state, actions) => {
            state.status = actions.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setSection,
    setStatus
} = sectionSlice.actions

export default sectionSlice.reducer

// Thunks
export function sliceGetSections(data) {
    return async function fetchThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await getSections()            
            dispatch(setSection(res.data))
            dispatch(setStatus(STATUS.SECCESS))
        } catch (error) {
            if (__DEV__) {
                console.log("🚀 ~ file: sectionSlice.js ~ line 48 ~ fetchThunk ~ error", error?.response?.data?.error || error)
            }
            dispatch(setStatus(STATUS.FAILED))
        }
    }
}
// // update history
// export function callUpdateHistory(data) {
//     return async function fetchThunk(dispatch) {
//         dispatch(setStatus(STATUS.LOADING))
//         try {
//             const res = await updateHistory(data.id, {
//                 type: data.type,
//                 currentTime: data.currentTime
//             })
//             dispatch(callGetHistory())
//             dispatch(setStatus(STATUS.SECCESS))
//         } catch (error) {
//             if (__DEV__) {
//                 console.log("🚀 ~ file: historySlice.js ~ line 70 ~ fetchThunk ~ error", error?.response?.data?.error || error)
//             }
//             dispatch(setStatus(STATUS.FAILED))
//         }
//     }
// }
// // remove
// export function callRemoveFromHistory(id) {
//     return async function fetchThunk(dispatch) {
//         dispatch(setStatus(STATUS.LOADING))
//         try {
//             const res = await deleteFromHistory(id)
//             dispatch(callGetHistory())
//             dispatch(setStatus(STATUS.SECCESS))
//         } catch (error) {
//             if (__DEV__) {
//                 console.log("🚀 ~ file: historySlice.js ~ line 67 ~ fetchThunk ~ error", error?.response?.data?.error || error)
//             }
//             dispatch(setStatus(STATUS.FAILED))
//         }
//     }
// }
// // getFavorite
// export function callGetHistory() {
//     return async function fetchThunk(dispatch) {
//         dispatch(setStatus(STATUS.LOADING))
//         try {
//             const res = await getHistory()
//             dispatch(addHistory(res.data))
//             dispatch(setStatus(STATUS.SECCESS))
//         } catch (error) {
//             if (__DEV__) {
//                 console.log("🚀 ~ file: historySlice.js ~ line 81 ~ fetchThunk ~ error", error?.response?.data?.error || error)
//             }
//             dispatch(setStatus(STATUS.FAILED))
//         }
//     }
// }


