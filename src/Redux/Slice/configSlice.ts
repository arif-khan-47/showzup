import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

export interface IConfigState {
    splesh_screen: {
        background_color: string;
        screen_time: number;
        splesh_logo: string;
        logoSize: number;
    },
    logo: string,
    data: {
        ipinfo_api_key: string;
    }
}

const initialState: IConfigState = {
    splesh_screen: {
        background_color: '#000',
        screen_time: 5,
        splesh_logo: '',
        logoSize: 100
    },
    logo: '',
    data: {
        ipinfo_api_key: ''
    }
};

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setConfig: (state, action: PayloadAction<IConfigState>) => {
            state.splesh_screen = action.payload.splesh_screen;
            state.logo = action.payload.logo;
            state.data = action.payload.data;
        }
    }
});

export const { setConfig } = configSlice.actions;
export default configSlice.reducer;