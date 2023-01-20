import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeScreen: 1,
    hideTabBar: false,
}

export const tabBarSlice = createSlice({
    name: 'tabBar',
    initialState,
    reducers: {
        setScreen(state, action) {
            state.activeScreen = action.payload
        },
        setHideTabBar(state, action) {
            state.hideTabBar = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setScreen, setHideTabBar } = tabBarSlice.actions

export default tabBarSlice.reducer