import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getSubscriptions } from '../../http'
import { iWhoamiGetData } from '../../Screens/Splesh/Splesh'

export interface ISubscriptionState {
    subscriptions: {
        _id: string,
        name: string,
        description: string,
        price: number,
        points: string[],
        duration: string,
        currency: string[],
        status: boolean,
        maxVideoQuality: string,
    }[],
    status: 'idle' | 'loading' | 'failed' | 'success',
    isPrimium: iWhoamiGetData['isPremium'],
}

const initialState : ISubscriptionState = {
    subscriptions: [],
    status: 'idle',
    isPrimium: {} as iWhoamiGetData['isPremium'],
}

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        setSubscriptions: (state, actions) => {
            const { data } = actions.payload
            state.subscriptions = data
        },
        setStatus: (state, actions: PayloadAction<ISubscriptionState['status']>) => {
            state.status = actions.payload
        },
        setIsPrimium: (state, actions: PayloadAction<iWhoamiGetData['isPremium']>) => {
            state.isPrimium = actions.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setSubscriptions,
    setStatus,
    setIsPrimium,
} = subscriptionSlice.actions

export default subscriptionSlice.reducer

// Thunks
export function fetchSubscriptions() {
    return async (dispatch: any) => {
        dispatch(setStatus('loading'))
        try {
            const {data} = await getSubscriptions()
            dispatch(setSubscriptions(data))
            dispatch(setStatus('success'))
        } catch (error) {
            dispatch(setStatus('failed'))
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