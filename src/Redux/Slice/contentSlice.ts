import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getContent } from '../../http';
import { format as prettyConsoleLog } from 'pretty-format';

export interface IContent {
    contents: {
        _id: string,
        name: string,
        slug: string,
        u_age: string,
        description: string,
        duration: string,
        rating: number,
        source_link: string | null,
        source_type: 'HLS' | 'MP4' | 'LIVE_STREAM_HLS'
        trailer_source_link: string | null,
        trailer_source_type: 'HLS' | 'MP4',
        language: {
            _id: string,
            name: string,
        }[] | null,
        cast: {
            _id: string,
            name: string,
            avatar: string | null,
            type: string,
        }[] | null,
        poster: string,
        thumbnail: string,
        tags: string[],
        job_id: string | null,
        seasons: {
            _id: string,
            name: string,
            content_id: string,
            order: number,
            episodes: {
                _id: string,
                name: string,
                description: string,
                duration: number,
                source_link: string,
                source_type: 'HLS' | 'MP4',
                content_offering_type: 'FREE' | 'PREMIUM',
                thumbnail: string,
                createdAt: string,
                updatedAt: string,
            }[] | null,
            status: boolean,
            created_by: string,
            createdAt: string,
            updatedAt: string,
        }[] | null,
        status: 'PUBLIC' | 'PRIVATE' | 'PENDING' | 'REJECTED',
        trash: boolean,
        type: 'series' | 'movie' | 'live_stream',
        content_offering_type: 'FREE' | 'PREMIUM',
        updated_by: string,
        created_by: string,
        createdAt: string,
        updatedAt: string,
        category: {
            _id: string,
            name: string,
        }[] | null,
        genres: {
            _id: string,
            name: string,
        }[] | null,
    }[]
    meta: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number,
        },
        report: {
            total: number,
            totalPublic: number,
            totalPrivate: number,
        }
    }
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    bulkAction: string
    bulkActionCall: boolean
    content: {
        _id: string,
        name: string,
        slug: string,
        u_age: string,
        description: string,
        duration: string,
        rating: number,
        source_link: string | null,
        source_type: 'HLS' | 'MP4' | 'LIVE_STREAM_HLS'
        trailer_source_link: string | null,
        trailer_source_type: 'HLS' | 'MP4',
        language: {
            _id: string,
            name: string,
        }[] | null,
        cast: {
            _id: string,
            name: string,
            avatar: string | null,
            type: string,
        }[] | null,
        poster: string,
        thumbnail: string,
        tags: string[],
        job_id: string | null,
        seasons: {
            _id: string,
            name: string,
            content_id: string,
            order: number,
            episodes: {
                _id: string,
                name: string,
                description: string,
                duration: number,
                source_link: string,
                source_type: 'HLS' | 'MP4',
                content_offering_type: 'FREE' | 'PREMIUM',
                thumbnail: string,
                createdAt: string,
                updatedAt: string,
            }[] | null,
            status: boolean,
            created_by: string,
            createdAt: string,
            updatedAt: string,
        }[] | null,
        status: 'PUBLIC' | 'PRIVATE' | 'PENDING' | 'REJECTED',
        trash: boolean,
        type: 'series' | 'movie' | 'live_stream',
        content_offering_type: 'FREE' | 'PREMIUM',
        updated_by: string,
        created_by: string,
        createdAt: string,
        updatedAt: string,
        category: {
            _id: string,
            name: string,
        }[] | null,
        genres: {
            _id: string,
            name: string,
        }[] | null,
    },
    season: {
        _id: string,
        name: string,
        content_id: {
            _id: string,
            name: string,
        },
        order: number,
        episodes: {
            _id: string,
            name: string,
            description: string,
            season_id: string,
            contant_id: string,
            duration: number,
            source_link: string,
            source_type: 'HLS' | 'MP4',
            subtitles: [],
            content_offering_type: 'FREE' | 'PREMIUM',
            thumbnail: string,
            views: number,
            watch_time: number,
            job_id: string | null,
            status: boolean,
            order: number,
            created_by: string,
            updated_by: string,
            createdAt: string,
            updatedAt: string,
        }[] | null,
        status: boolean,
        created_by: string,
        createdAt: string,
        updatedAt: string,
    }
    episode: {
        _id: string,
        name: string,
        description: string,
        season_id: {
            _id: string,
            name: string,
        },
        content_id: {
            _id: string,
            name: string,
        },
        duration: number,
        source_link: string,
        source_type: 'HLS' | 'MP4',
        subtitles: [],
        content_offering_type: 'FREE' | 'PREMIUM',
        thumbnail: string,
        views: number,
        watch_time: number,
        job_id: string | null,
        status: boolean,
        order: number,
        created_by: string,
        updated_by: string,
        createdAt: string,
        updatedAt: string,
    } | null
}




const initialState: IContent = {
    contents: [],
    meta: {
        pagination: {
            page: 1,
            pageSize: 10,
            pageCount: 1,
            total: 0,
        },
        report: {
            total: 0,
            totalPublic: 0,
            totalPrivate: 0,
        }
    },
    status: 'idle',
    bulkAction: 'none',
    bulkActionCall: false,
    content: {
        _id: '',
        name: '',
        slug: '',
        u_age: '',
        description: '',
        duration: '',
        rating: 0,
        source_link: null,
        source_type: 'HLS',
        trailer_source_link: null,
        trailer_source_type: 'HLS',
        language: null,
        cast: null,
        poster: '',
        thumbnail: '',
        tags: [],
        job_id: null,
        seasons: null,
        status: 'PUBLIC',
        trash: false,
        type: 'movie',
        content_offering_type: 'FREE',
        updated_by: '',
        created_by: '',
        createdAt: '',
        updatedAt: '',
        category: null,
        genres: null,
    },
    season: {
        _id: '',
        name: '',
        content_id: {
            _id: '',
            name: '',
        },
        order: 0,
        episodes: [],
        status: false,
        created_by: '',
        createdAt: '',
        updatedAt: '',
    },
    episode: null as IContent['episode']
}

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setContent: (state, actions) => {
            const { data, meta } = actions.payload
            state.contents = data
            state.meta = meta
        },
        clearContent: (state) => {
            state.content = initialState.content
        },
        setStatus: (state, actions: PayloadAction<IContent['status']>) => {
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
            state.content = data[0]
        },
        setSeason: (state, actions) => {
            const { data } = actions.payload
            state.season = data[0]
        },
        setEpisode: (state, actions) => {
            const { data } = actions.payload
            console.log("🚀 ~ file: contentSlice.ts:316 ~ data", prettyConsoleLog(data))
            
            state.episode = data[0]
        },
        setEpisodeNull: (state) => {
            state.episode = null
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setContent,
    setStatus,
    setBulkAction,
    setBulkActionCall,
    setSingle,
    setSeason,
    setEpisode,
    clearContent,
    setEpisodeNull
} = contentSlice.actions

export default contentSlice.reducer

export interface IFetchAllContentTypes {
    queryString?: string | null | undefined,
    type?: 'single' | 'season' | 'episode'
}

export function fetchAllContent(queryString: IFetchAllContentTypes['queryString'] | null, type: IFetchAllContentTypes['type'] | null) {
    return async (dispatch: any) => {
        dispatch(setStatus('loading'))
        try {
            const res = await getContent(queryString || '');
            switch (type) {
                case 'single':
                    dispatch(setSingle(res.data))
                    break;
                case 'season':
                    dispatch(setSeason(res.data))
                    break;
                case 'episode':
                    dispatch(setEpisode(res.data))
                    break;
                default:
                    dispatch(setContent(res.data))
                    break;
            }
            dispatch(setStatus('succeeded'))
        } catch (error) {
            dispatch(setStatus('failed'))
        }
    }
}

export function fetchEpisodeContent(queryString: IFetchAllContentTypes['queryString'] | null, type: IFetchAllContentTypes['type'] | null) {
    return async (dispatch: any) => {
        dispatch(setStatus('loading'))
        try {
            const res = await getContent(queryString || '');
            switch (type) {
                case 'single':
                    dispatch(setSingle(res.data))
                    break;
                case 'season':
                    dispatch(setSeason(res.data))
                    break;
                case 'episode':
                    dispatch(setEpisode(res.data))
                    break;
                default:
                    dispatch(setContent(res.data))
                    break;
            }
            dispatch(setStatus('succeeded'))
        } catch (error) {
            dispatch(setStatus('failed'))
        }
    }
}

