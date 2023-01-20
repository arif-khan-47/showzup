import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { format as prettyConsoleLog } from 'pretty-format'
import { whoami } from '../../http';
import { AxiosResponse } from 'axios';
import { ISubscriptionState, setIsPrimium } from './subscriptionSlice';

export interface IAuthState {
  isAuthenticated: boolean;
  user: {
    avatar: string | null,
    createdAt: string,
    email: string,
    phone: number,
    id: string,
    name: string,
    role: 'user' | 'admin',
    updatedAt: string,
  } | null;
  accessToken: string | null;
  refreshToken: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  whoami: {
    user: {
      _id: string;
      name: string;
      email: string;
      phone: number;
      role: 'user' | 'admin';
      avatar: string | null;
    } | null;
    isPremium: {
      subscriptionId: string | null;
      subscriptionDetails: ISubscriptionState['subscriptions'][0] | null;
      status: boolean,
      active_at: string | null,
      expiresIn: string | null,
    } | null,
  }
}

export interface IAuthPayload {
  user: {
    avatar: string | null,
    createdAt: string,
    email: string,
    phone: number,
    id: string,
    name: string,
    role: 'user' | 'admin',
    updatedAt: string,
  } | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  status: 'idle',
  whoami: {} as IAuthState['whoami'],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<IAuthPayload>) {
      const { accessToken, refreshToken, user } = action.payload
      if (user === null && accessToken === null && refreshToken === null) {
        state.isAuthenticated = false;
        state.user = initialState.user;
        state.accessToken = null;
        state.refreshToken = null;
      } else {
        state.isAuthenticated = true;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.user = user;
        AsyncStorage.setItem('accessToken', accessToken as string);
        AsyncStorage.setItem('refreshToken', refreshToken as string);
        AsyncStorage.setItem('user', JSON.stringify(user));
      }
    },
    checkLogin(state, action: PayloadAction<string>) {
      const accessToken = action.payload;
      // get user from async storage
      AsyncStorage.getItem('user').then((user) => {
        if (user) {
          state.user = JSON.parse(user);
        }
      });
      accessToken && (state.isAuthenticated = true);
      accessToken && (state.accessToken = accessToken);
    },
    setStatus(state, action: PayloadAction<IAuthState['status']>) {
      state.status = action.payload;
    },
    setWhoami(state, action: PayloadAction<IAuthState['whoami']>) {
      state.whoami = action.payload;
    },
    setLogout(state) {
      state.isAuthenticated = false;
      state.user = initialState.user;
      state.accessToken = null;
      state.refreshToken = null;
      AsyncStorage.removeItem('accessToken');
      AsyncStorage.removeItem('refreshToken');
      AsyncStorage.removeItem('user');
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAuth, checkLogin, setStatus, setWhoami, setLogout } = authSlice.actions

export default authSlice.reducer

export function whoamiFunc() {
  return async (dispatch: any) => {
    dispatch(setStatus('loading'))
    try {
      const { data, status }: AxiosResponse = await whoami();
      if (status === 200) {
        const { isPremium } = data.data as IAuthState['whoami'];
        AsyncStorage.setItem('@isPremium', JSON.stringify(isPremium));
        if (isPremium) dispatch(setIsPrimium(isPremium))
        dispatch(setWhoami(data.data))
      }
      dispatch(setStatus('succeeded'))
    } catch (error) {
      // get data from local storage
      const isPremium = await AsyncStorage.getItem('@isPremium');
      if (isPremium) {
        const isPremiumData = JSON.parse(isPremium);
        dispatch(setIsPrimium(isPremiumData))
      }
      dispatch(setStatus('failed'))
    }
  }
}
