import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { addToHistory, deleteFromHistory, getHistory, updateHistory } from '../../http'
import { format as prettyConsoleLog } from 'pretty-format'

export interface IHistoryState {
    history: {
        _id: string,
        content: {
            _id: string,
            name: string,
            slug: string,
            u_age: string,
            description: string,
            duration: number | string,
            rating: number,
            source_link: string,
            source_type: string,
            trailer_source_link: string,
            trailer_source_type: string,
            poster: string,
            thumbnail: string,
            seasons: any[],
            type: 'movie' | 'series' | 'live_stream',
            content_offering_type: 'FREE' | 'PREMIUM'
        },
        content_type: string,
        currentTime: number,
    }[],
    status: 'idle' | 'loading' | 'failed' | 'success'
}

export interface IHistoryPayload {
    id: string,
    type?: 'Content' | 'Episode',
    currentTime: number,
    current_season?: string,
    current_episode?: string,
}

const initialState: IHistoryState = {
    history: [],
    status: 'idle'
}

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addHistory: (state, actions) => {
            const { data } = actions.payload
            state.history = data
        },
        removeHistory: (state, actions) => {
            const { data } = actions.payload
            state.history = data
        },
        setStatus: (state, actions: PayloadAction<IHistoryState['status']>) => {
            state.status = actions.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    addHistory,
    removeHistory,
    setStatus
} = historySlice.actions

export default historySlice.reducer

// Thunks
export function callAddToHistory(data: any) {
    return async (dispatch: any) => {
        dispatch(setStatus('loading'))
        try {
            const res = await addToHistory(data)
            dispatch(callGetHistory())
            dispatch(setStatus('success'))
        } catch (error: any) {
            if (__DEV__) {
                console.log("🚀 ~ file: historySlice.js ~ line 53 ~ fetchThunk ~ error", error?.response?.data?.error || error)
            }
            dispatch(setStatus('failed'))
        }
    }
}
// update history
export function callUpdateHistory(data: IHistoryPayload) {
    return async (dispatch: any) => {
        dispatch(setStatus('loading'))
        try {
            await updateHistory(data)
            dispatch(callGetHistory())
            dispatch(setStatus('success'))
        } catch (error: any) {
            if (__DEV__) {
                console.log("🚀 ~ file: historySlice.js ~ line 98 ~ fetchThunk ~ error", prettyConsoleLog(error?.response?.data?.error || error))
            }
            dispatch(setStatus('failed'))
        }
    }
}
// remove
export function callRemoveFromHistory(id: string) {
    return async (dispatch: any) => {
        dispatch(setStatus('loading'))
        try {
            await deleteFromHistory(id)
            dispatch(callGetHistory())
            dispatch(setStatus('success'))
        } catch (error: any) {
            if (__DEV__) {
                console.log("🚀 ~ file: historySlice.js ~ line 67 ~ fetchThunk ~ error", error?.response?.data?.error || error)
            }
            dispatch(setStatus('failed'))
        }
    }
}
// getFavorite
export function callGetHistory() {
    return async (dispatch: any) => {
        dispatch(setStatus('loading'))
        try {
            const { data } = await getHistory()
            dispatch(addHistory(data))
            dispatch(setStatus('success'))
        } catch (error: any) {
            if (__DEV__) {
                console.log("🚀 ~ file: historySlice.js ~ line 81 ~ fetchThunk ~ error", error?.response?.data?.error || error)
            }
            dispatch(setStatus('success'))
        }
    }
}


