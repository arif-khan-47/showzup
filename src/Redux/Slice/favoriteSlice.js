import { createSlice } from '@reduxjs/toolkit'
import { addToFavorite, deleteFromFavorite, getFavorite } from '../../http'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const STATUS = Object.freeze({
    SECCESS: 'success',
    FAILED: 'failed',
    LOADING: 'loading',
    NOT_STARTED: false,
})

const initialState = {
    favoriteData: [],
    favoriteCache: [],
    status: STATUS.NOT_STARTED,
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, actions) => {
            const { data } = actions.payload
            state.favoriteData = data
        },
        removeFavorite: (state, actions) => {
            const { data } = actions.payload
            state.favoriteData = data
        },
        setStatus: (state, actions) => {
            state.status = actions.payload
        },
        getFavoriteCache: (state, actions) => {
            state.favoriteCache = actions.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    addFavorite,
    setStatus,
    removeFavorite,
    getFavoriteCache
} = favoriteSlice.actions

export default favoriteSlice.reducer

// Thunks
export function callAddToFavorite(data) {
    return async function fetchThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await addToFavorite({id: data})
            dispatch(addFavorite(res.data))
            dispatch(callGetFavorite())
            dispatch(setStatus(STATUS.SECCESS))
        } catch (error) {
            if (__DEV__) {
                console.log("🚀 ~ file: favoriteSlice.js ~ line  60 ~ fetchThunk ~ error", error?.response?.data?.error || error)
            }
            dispatch(setStatus(STATUS.FAILED))
        }
    }
}
// removeFavorite
export function callRemoveFromFavorite(id) {
    return async function fetchThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await deleteFromFavorite(id)
            dispatch(removeFavorite(res.data))
            dispatch(callGetFavorite())
            dispatch(setStatus(STATUS.SECCESS))
        } catch (error) {
            if (__DEV__) {
                console.log("🚀 ~ file: favoriteSlice.js ~ line  78 ~ fetchThunk ~ error", error?.response?.data?.error || error)
            }
            dispatch(setStatus(STATUS.FAILED))
        }
    }
}
// getFavorite
export function callGetFavorite() {
    return async function fetchThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await getFavorite()
            dispatch(addFavorite(res.data))
            const jsonValue = JSON.stringify(res.data)
            await AsyncStorage.setItem('@favorite', jsonValue)
            dispatch(setStatus(STATUS.SECCESS))
        } catch (error) {
            if (__DEV__) {
                console.log("🚀 ~ file: favoriteSlice.js ~ line 94 ~ fetchThunk ~ error", error?.response?.data?.error || error)
            }
            dispatch(setStatus(STATUS.FAILED))
        }
    }
}

// get favorite cache from async storage
export function callGetFavoriteCache() {
    return async function fetchThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const jsonValue = await AsyncStorage.getItem('@favorite')
            dispatch(getFavoriteCache(jsonValue != null ? JSON.parse(jsonValue) : null))
            dispatch(setStatus(STATUS.SECCESS))
        } catch (e) {
            console.log(e)
            dispatch(setStatus(STATUS.FAILED))
        }
    }
}

// set favorite cache to async storage
export function callSetFavoriteCache(favoriteData) {
    return async function fetchThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const jsonValue = JSON.stringify(favoriteData)
            await AsyncStorage.setItem('@favorite', jsonValue)
            dispatch(setStatus(STATUS.SECCESS))
        } catch (e) {
            console.log(e)
            dispatch(setStatus(STATUS.FAILED))
        }
    }
}


