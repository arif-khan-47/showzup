import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
    isPlaying: false,
    isPaused: false,
    isMuted: false,
    isFullScreen: false,
    isBuffering: false,
    isSeeking: false,
    isEnded: false,
    showPlanPopup: false,
    isLandScape: false,
    streamUrl: false,
    episodeId: '',
    isGoBack: false,
    bandwidth: undefined,
}

export const PlayerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setIsPlaying(state, action) {
            state.isPlaying = action.payload;
        },
        setIsPaused(state, action) {
            state.isPaused = action.payload;
        },
        setIsMuted(state, action) {
            state.isMuted = action.payload;
        },
        setIsFullScreen(state, action) {
            state.isFullScreen = action.payload;
        },
        setIsBuffering(state, action) {
            state.isBuffering = action.payload;
        },
        setIsSeeking(state, action) {
            state.isSeeking = action.payload;
        },
        setIsEnded(state, action) {
            state.isEnded = action.payload;
        },
        setShowPlanPopup(state, action) {
            state.showPlanPopup = action.payload;
        },
        setIsLandScape(state, action) {
            state.isLandScape = action.payload;
        },
        setPlayerStreamUrl(state, action) {
            const { streamUrl, isFullScreen, episodeId, isGoBack } = action.payload;
            state.streamUrl = streamUrl;
            state.isFullScreen = isFullScreen;
            state.episodeId = episodeId;
            state.isGoBack = isGoBack;
        },
        setIsGoBack(state, action) {
            state.isGoBack = action.payload;
        },
        setBandwidth(state, action) {
            state.bandwidth = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setIsPlaying,
    setIsPaused,
    setIsMuted,
    setIsFullScreen,
    setIsBuffering,
    setIsSeeking,
    setIsEnded,
    setShowPlanPopup,
    setIsLandScape,
    setPlayerStreamUrl,
    setIsGoBack,
    setBandwidth
} = PlayerSlice.actions

export default PlayerSlice.reducer
