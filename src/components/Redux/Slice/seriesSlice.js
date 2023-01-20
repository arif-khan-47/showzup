import { createSlice } from '@reduxjs/toolkit'
import { getAllSeries, getEpisodesByid, getSeries, getSeriesBySlug } from '../../http'


export const STATUS = Object.freeze({
    SECCESS: 'secces',
    FAILED: 'failed',
    LOADING: 'loading',
})

const initialState = {
    data: false,
    status: STATUS.SECCESS,
    bulkAction: 'none',
    bulkActionCall: false,
    single: false,
    season: false,
    episode: false,
    report: false,
    loading: false,
}

export const SeriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        setSeries: (state, actions) => {
            const { data } = actions.payload
            state.data = data
        },
        setStatus: (state, actions) => {
            state.status = actions.payload
        },
        setBulkAction: (state, actions) => {
            state.bulkAction = actions.payload
        },
        setBulkActionCall: (state, actions) => {
            state.bulkActionCall = actions.payload
        },
        setSingle: (state, actions) => {
            const { data } = actions.payload
            state.single = data
        },
        setReport: (state, actions) => {
            const { data } = actions.payload
            state.report = data
        },
        setSeason: (state, actions) => {
            const { data } = actions.payload
            state.season = data
        },
        setEpisode: (state, actions) => {
            const { data } = actions.payload
            state.episode = data
        },
        setLoading: (state, actions) => {
            state.loading = actions.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setSeries,
    setStatus,
    setBulkAction,
    setBulkActionCall,
    setSingle,
    setReport,
    setSeason,
    setEpisode,
    setLoading,
} = SeriesSlice.actions

export default SeriesSlice.reducer

// Thunks
export function fetchAllSeries(page = 1, limit = 25, order = 'desc') {
    return async function fetchMoviesThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await getAllSeries(page, limit, order);
            dispatch(setSeries(res.data))
            dispatch(setStatus(STATUS.SECCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.FAILED))
        }
    }
}
// fetch Reports
// export function fetchSeriesReport() {
//     return async function fetchReportThunk(dispatch) {
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

// export function fetchSearchSeries(search) {
//     return async function fetchThunk(dispatch) {
//         dispatch(setStatus(STATUS.LOADING))
//         try {
//             const res = await movieSearch(search);
//             dispatch(setSeries(res.data))
//             dispatch(setStatus(STATUS.SECCESS))
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(STATUS.FAILED))
//         }
//     }
// }

export function fetchSeries(slug) {
    return async function fetchSeriesThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        dispatch(setLoading(true))
        try {
            const res = await getSeriesBySlug(slug);
            dispatch(setSingle(res.data))
            dispatch(setStatus(STATUS.SECCESS))
            dispatch(setLoading(false))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.FAILED))
            dispatch(setLoading(false))
        }
    }
}

// export function fetchSeason(id, seasonId) {
//     return async function fetchSeasonThunk(dispatch) {
//         dispatch(setStatus(STATUS.LOADING))
//         try {
//             const res = await getSeason(id, seasonId);
//             dispatch(setSeason(res.data))
//             dispatch(setStatus(STATUS.SECCESS))
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(STATUS.FAILED))
//         }
//     }
// }

// get episode
export function fetchEpisode(id, seasonId, episodeId) {
    return async function fetchEpisodeThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        dispatch(setLoading(true))
        try {
            const res = await getEpisodesByid(id, seasonId, episodeId);
            dispatch(setEpisode(res.data))
            dispatch(setStatus(STATUS.SECCESS))
            dispatch(setLoading(false))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.FAILED))
            dispatch(setLoading(false))
        }
    }
}

