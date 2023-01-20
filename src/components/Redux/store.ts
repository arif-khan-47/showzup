import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Slice/authSlice'
import tabBarSlice from './Slice/TabBarSlice'
import movieSlice from './Slice/movieSlice'
import categorySlice from './Slice/categorySlice'
import sliderSlice from './Slice/sliderSlice'
import topCategorySlice from './Slice/TopCategorySlice'
import trendingSlice from './Slice/trendingSlice'
import searchSlice from './Slice/searchSlice'
import subscriptionSlice from './Slice/subscriptionSlice'
import seriesSlice from './Slice/seriesSlice'
import playerSlice from './Slice/playerSlice'
import favoriteSlice from './Slice/favoriteSlice'
import historySlice from './Slice/historySlice'
import detailsSlice from './Slice/detailsSlice'
import sectionSlice from './Slice/sectionSlice'
import contantSlice from './Slice/contentSlice'
import configSlice from './Slice/configSlice'


export const store = configureStore({
  reducer: {
    auth: authSlice,
    tabBar: tabBarSlice,
    movie: movieSlice,
    category: categorySlice,
    slider: sliderSlice,
    topCategory: topCategorySlice,
    trending: trendingSlice,
    search: searchSlice,
    subscription: subscriptionSlice,
    series: seriesSlice,
    player: playerSlice,
    favorite: favoriteSlice,
    history: historySlice,
    details: detailsSlice,
    section: sectionSlice,
    content: contantSlice,
    config: configSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch