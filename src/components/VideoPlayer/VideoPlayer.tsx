import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { StyleSheet, View, Text, BackHandler, TouchableOpacity, ActivityIndicator, ScrollView, Pressable, Image, Platform, Alert } from 'react-native'
import styles from './styles'
import Video, { OnLoadData } from 'react-native-video'
import { useNavigation } from '@react-navigation/native'
import Orientation, { PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import Slider from '@react-native-community/slider';
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Colors from '../../Styles/Colors'
import { BackArrowIcon, BackwardIcon, ForwardIcon, FullscreenIcon, PauseIcon, PlayIcon } from '../PlayerControls/PlayerControls'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import API, { addWatchTime, countView } from '../../http'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setBandwidth, setIsFullScreen, setIsGoBack, setIsLandScape, setResolution, setShowPlanPopup } from '../Redux/Slice/playerSlice'
import tw from 'twrnc'
import { PremiumICon } from '../../Icons'
import navgiationStrings from '../../Constants/navgiationStrings'
import { callUpdateHistory } from '../../Redux/Slice/historySlice'
import { RootState } from '../../Redux/store'
import { MediaControlsView } from '.'
import { getM3U8Resolutions } from './PlayerUtils'
import { format as prettyFormat } from 'pretty-format'
import { IContent } from '../../Redux/Slice/contentSlice'


interface VideoPlayerProps {
    streamSource: string,
    offlineSource?: boolean,
    streamSourceType?: '' | 'mp4' | 'hls' | 'dash',
    defaultFullScreen?: boolean,
    autoPlay?: boolean,
    defaultResizeMode?: 'cover' | 'contain' | 'stretch' | 'none' | 'repeat' | 'center',
    streamContentInfo?: {
        id: string,
        slug: string,
        type: 'movie' | 'series' | 'live_stream'
        time?: number
        currentSeason: string | null,
        currentEpisode: string | null,
        thumbnail?: string
        episode?: IContent['episode'] | null
    }
}

const VideoPlayer = ({
    streamSource,
    offlineSource = false,
    streamSourceType,
    defaultFullScreen = false,
    autoPlay = false,
    defaultResizeMode = "contain",
    streamContentInfo
}: VideoPlayerProps) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    // useRef
    const videoRef = useRef(null)
    // useState
    const [currentTime, setCurrentTime] = useState(0)
    // const { isPrimium } = useSelector((state: RootState) => state.subscription)
    const isPrimium = true;
    const { isFullScreen, showPlanPopup, isLandScape, streamUrl: streamUrlPlayer, episodeId, isGoBack, bandwidth } = useSelector((state: RootState) => state.player)
    const { user } = useSelector((state: RootState) => state.auth)
    const [played, setPlayed] = useState(0)
    const [url, setUrl] = useState<string>(streamContentInfo?.episode ? streamContentInfo?.episode.source_link : streamSource)
    const [urlhttp, setUrlhttp] = useState<string>(streamContentInfo?.episode ? streamContentInfo?.episode.source_link : streamSource)
    const [videoQuality, setVideoQuality] = useState<OnLoadData['videoTracks']>([])
    const [activeVideoQuality, setActiveVideoQuality] = useState<number | 'auto'>('auto')
    const [isLive, setIsLive] = useState<boolean>(false)
    const [subtitles, setSubtitles] = useState([])
    const [activeSubtitle, setActiveSubtitle] = useState(false)
    const [subtitlesSet, setSubtitlesSet] = useState(false)



    // update current time to history
    const updateCurrentTime = async () => {
        if (!streamContentInfo) return
        dispatch(callUpdateHistory({
            id: streamContentInfo.id,
            //type: streamContentInfo.type === 'movie' ? 'Content' : 'Episode',
            currentTime: await AsyncStorage.getItem('currentTime') as any,
            current_season: streamContentInfo.episode?.season_id?._id,
            current_episode: streamContentInfo.episode?._id,
        }) as any)
    }

    // get video quality from m3u8 master playlist
    // const getVideoQuality = async () => {
    //     const data = await getM3U8Resolutions(url)
    //     console.log("🚀 ~ file: VideoPlayer.tsx:90 ~ data", data)
    //     setVideoQuality(data as any)
    // }



    const timerRef = useRef<number | null>(null);
    // resolution
    //const [resolution, setResolution] = useState(null)
    // console.log("🚀 ~ file: VideoPlayer.tsx:98 ~ bandwidth", bandwidth)
    // resizeMode
    const [resizeMode, setResizeMode] = useState(defaultResizeMode)
    // controls show when video is playing
    const [showControls, setShowControls] = useState(true)
    const [showControlsDuration, setShowControlsDuration] = useState(5000)
    // hide controls after 4 seconds with clearTimeout
    const handleControls = () => {
        if (showControls) {
            setShowControls(false)
            return
        }
        setShowControls(true)
        timerRef.current = setTimeout(() => {
            setShowControls(false)
        }, showControlsDuration)

        return () => clearTimeout(timerRef.current as number)
    }

    // get screen orientation
    const [orientation, setOrientation] = useState(PORTRAIT)
    const [fullscreen, setFullscreen] = useState(false)

    // fullscreen video landscape mode useing orientation locker
    const handleOrientationChange = (goBack?: string) => {
        if (goBack === 'goBack') {
            Orientation.lockToPortrait()
            dispatch(setIsLandScape(false))
            setFullscreen(false)
            dispatch(setIsFullScreen(false))
            navigation.goBack()
            dispatch(setIsGoBack(false))
            return
        }
        if (orientation === 'PORTRAIT') {
            dispatch(setIsLandScape(true))
            setOrientation(LANDSCAPE)
            setFullscreen(true)
            dispatch(setIsFullScreen(true))
            Orientation.lockToLandscape();
        } else {
            dispatch(setIsLandScape(false))
            setOrientation(PORTRAIT)
            setFullscreen(false)
            dispatch(setIsFullScreen(false))
            Orientation.lockToPortrait();
        }
    }

    useEffect(() => {
        if (defaultFullScreen) {
            setOrientation(LANDSCAPE)
            setFullscreen(true)
            dispatch(setIsFullScreen(true))
            Orientation.lockToLandscape();
        }
    }, [defaultFullScreen])

    useEffect(() => {
        if (isLandScape) {
            setOrientation(LANDSCAPE)
            setFullscreen(true)
            dispatch(setIsFullScreen(true))
            Orientation.lockToLandscape();
        }
    }, [isLandScape])


    // handle video play and pause
    const [isPlaying, setIsPlaying] = useState(autoPlay)
    const handlePlayPause = () => setIsPlaying(!isPlaying)

    useEffect(() => {
        if (streamContentInfo?.episode) {
            //Alert.alert('dfo[gdorijgojgfojhfgojhfgjhfgjhgoj',JSON.stringify(streamContentInfo?.episode))
            // check if episode is free or not
            if (streamContentInfo?.episode.content_offering_type === 'PREMIUM') {
                // now check user is primium or not
                if (!isPrimium?.status) {
                    // navigate to subscription screen
                    navigation.replace(navgiationStrings.SUBCRIPTION)
                } else {
                    if (streamContentInfo?.episode.source_link) {
                        setUrl(streamContentInfo?.episode.source_link)
                        setIsPlaying(true)
                    } else {
                        setIsPlaying(false)
                    }
                }

            } else {
                if (streamContentInfo?.episode.source_link) {
                    setUrl(streamContentInfo?.episode.source_link)
                    setIsPlaying(true)
                } else {
                    setIsPlaying(false)
                }
            }
        } else {
            if (streamSource) {
                setUrl(streamSource)
                setIsPlaying(true)
            } else {
                setIsPlaying(false)
            }
        }
        return () => {
            updateCurrentTime()
        }
    }, [streamContentInfo])

    // handle video buffering
    const [isBuffering, setIsBuffering] = useState(false)
    const handleBuffering = (data: any) => {
        const { isBuffering: bufferingdata } = data
        setIsBuffering(bufferingdata)
    }

    // handle video duration
    const [duration, setDuration] = useState<number>(0)
    const handleOnLoad = (OnLoadData: OnLoadData) => {
        if (streamContentInfo && videoRef.current) {
            videoRef.current.seek(streamContentInfo.time || 0)
        }
        if (OnLoadData) {
            if (OnLoadData.duration === 30) {
                setIsLive(true)
            }
        }
        console.log("🚀 ~ file: VideoPlayer.tsx:195 ~ handleOnLoad ~ OnLoadData", prettyFormat(OnLoadData))
        setVideoQuality(OnLoadData.videoTracks)
        setDuration(() => (OnLoadData.duration))
    }

    // handle Save Played Time
    const handleSavePlayedTime = async (time: number) => {
        try {
            await AsyncStorage.setItem('playedTime', time.toString())
        } catch (error) {

        }
    }


    // handle video current time
    const onProgress = (OnProgressData: any) => {
        setCurrentTime(() => (OnProgressData.currentTime))
        // update time in every 45 seconds
        if (Math.floor(OnProgressData.currentTime) % 5 === 0) {
            // set time to async storage
            AsyncStorage.setItem('currentTime', Math.floor(OnProgressData.currentTime).toString())
            // updateCurrentTime(Math.floor(OnProgressData.currentTime) as any)
        }
        // update played time in every 1 second
        if (Math.floor(OnProgressData.currentTime) % 4 === 0) {
            if (isPlaying) {
                setPlayed(played + 1)
                // store played time in local storage
                handleSavePlayedTime(played + 1)
            } else {
                setPlayed(played)
            }
        }
    }

    // Get Minutes From Seconds Function
    const getMinutesFromSeconds = (videoDuration: number) => {
        const minutes = videoDuration >= 60 ? Math.floor(videoDuration / 60) : 0;
        const seconds = Math.floor(videoDuration - minutes * 60);
        return `${minutes >= 10 ? minutes : '' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`;
    }

    // current time and duration
    const totalDuration = getMinutesFromSeconds(duration);
    const currentTimeString = getMinutesFromSeconds(currentTime);
    // get remaining time
    const remainingTime = getMinutesFromSeconds(duration - currentTime);

    // if video is played 1 minute then store view count in database
    const [viewCounted, setViewCounted] = useState(false)
    const viewCountFunc = async (id: string, episodeId: string | null) => {
        try {
            const { data } = await countView({
                content_id: id,
                episode_id: episodeId || null,
                ip_address: await AsyncStorage.getItem('ipAddress'),
                platform: Platform.OS || null,
                city: await AsyncStorage.getItem('city') || null,
                location: await AsyncStorage.getItem('country') || null,
                region: await AsyncStorage.getItem('region') || null,
                timezone: await AsyncStorage.getItem('timezone') || null,
            })
        } catch (error: any) {
        }
    }

    // if video is played 1 minute then store view count in database
    const countWatchTime = async (id: string, episodeId: string) => {
        try {
            // playedTime greater than 30 seconds then store in database
            if (await AsyncStorage.getItem('playedTime') > 60) {
                await addWatchTime({
                    content_id: id,
                    episode_id: episodeId || null,
                    ip_address: await AsyncStorage.getItem('ipAddress'),
                    time: await AsyncStorage.getItem('playedTime'),
                    platform: Platform.OS || null,
                    city: await AsyncStorage.getItem('city') || null,
                    location: await AsyncStorage.getItem('country') || null,
                    region: await AsyncStorage.getItem('region') || null,
                    timezone: await AsyncStorage.getItem('timezone') || null,
                })
            }

        } catch (error) {
            console.log("🚀 ~ file: VideoPlayer.tsx:304 ~ countWatchTime ~ error", error)
        }
    }

    useEffect(() => {
        // now start 1 min timer then run viewCountFunc and clear timer
        const viewTimeOut = setTimeout(() => {
            if (!viewCounted && streamContentInfo) {
                if (streamContentInfo.id && streamContentInfo.type === 'movie') {

                    viewCountFunc(streamContentInfo.id, null)
                    setViewCounted(true)
                }
            }

            if (streamContentInfo?.episode && !viewCounted) {
                viewCountFunc(streamContentInfo.id, streamContentInfo.episode._id)
                setViewCounted(true)
            }
        }, 60000)
        // 60000
        return () => {
            clearTimeout(viewTimeOut)
        }
    }, [streamContentInfo?.episode])



    // handle video seek
    const handleSeekSlider = (seek: number) => {
        const nextTime = currentTime + 20
        const prevTime = currentTime - 20
        if (seek > nextTime) {
            videoRef.current.seek(seek)
        }
        if (seek < prevTime) {
            videoRef.current.seek(seek)
        }
    }

    // 15s Skip Backward Function
    function skipBackward() {
        videoRef.current.seek(currentTime - 15);
    }
    // 15s Skip Forward Function
    const skipForward = () => {
        videoRef.current.seek(currentTime + 15);
    }

    const Upgrade = () => {
        dispatch(setShowPlanPopup(false))
        setOrientation(PORTRAIT)
        setFullscreen(false)
        dispatch(setIsFullScreen(false))
        Orientation.lockToPortrait();
        navigation.replace(navgiationStrings.SUBCRIPTION)
    }


    const backAction = () => {
        if (defaultFullScreen) {
            dispatch(setShowPlanPopup(false))
            dispatch(setIsLandScape(false))
            setOrientation(PORTRAIT)
            setFullscreen(false)
            dispatch(setIsFullScreen(false))
            Orientation.lockToPortrait();
        } else {

            if (fullscreen) {
                setOrientation(PORTRAIT)
                setFullscreen(false)
                dispatch(setIsFullScreen(false))
                dispatch(setIsLandScape(false))
                Orientation.lockToPortrait();
            } else {
                navigation.goBack()
                dispatch(setIsGoBack(false))
            }
        }
        return true
    };

    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );

    useEffect(() => {
        return () => backHandler.remove();
    }, [backHandler]);

    useEffect(() => {
        const time = setTimeout(() => {
            handleControls()
        }, 2000)

        return () => clearTimeout(time)
    }, [])

    // if conponent unmount then call  countWatchTime(params.id, played)
    useEffect(() => {
        // now start 1 min timer then run viewCountFunc and clear timer
        //   const viewTimeOut = setTimeout(() => {
        //     if (!viewCounted && streamContentInfo) {
        //         if (streamContentInfo.id && streamContentInfo.type === 'movie') {

        //             viewCountFunc(streamContentInfo.id, null)
        //             setViewCounted(true)
        //         }
        //     }

        //     if (streamContentInfo?.episode && !viewCounted) {
        //         viewCountFunc(streamContentInfo.id, streamContentInfo.episode._id)
        //         setViewCounted(true)
        //     }
        // }, 60000)
        // // 60000
        // return () => {
        //     clearTimeout(viewTimeOut)
        // }
        return () => {

            if (!streamContentInfo) return
            if (streamContentInfo.id && streamContentInfo.type === 'movie') {
                countWatchTime(streamContentInfo.id, '')
            }
            if (streamContentInfo?.episode) {
                countWatchTime(streamContentInfo.id, streamContentInfo.episode._id)
            }
        }
    }, [streamContentInfo?.episode])

    // setting bottom sheet
    const settingBottomSheetModalRef = useRef(null);

    // variables
    const settingSnapPoints = useMemo(() => {
        if (isFullScreen) {
            return ['27%', '27%']
        } else {
            return ['13%', '13%']
        }
    }, [isFullScreen])

    // callbacks
    const settingHandlePresentModalPress = useCallback(() => {
        settingBottomSheetModalRef.current?.present();
    }, []);
    // close bottom sheet
    const settingHandleClose = useCallback(() => {
        settingBottomSheetModalRef.current?.close();
    }, []);
    const settingHandleSheetChanges = useCallback((index: number) => {
    }, []);

    // ref
    const bottomSheetModalRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => {
        if (isFullScreen) {
            return ['50%', '95%']
        } else {
            return ['25%', '50%']
        }
    }, [isFullScreen])

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    // close bottom sheet
    const videoQualityHandleClose = useCallback(() => {
        bottomSheetModalRef.current?.close();
        // dismissAll()
        setTimeout(() => {
            settingHandleClose()
        }, 1000)
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        const timer = setTimeout(() => {
            settingHandleClose()
        }, 1000)
        return () => clearTimeout(timer)
    }, []);

    return (
        <>
            <View style={[styles.container, { flex: isFullScreen ? 1 : 0 }]}>
                {
                    url ?
                        <View style={isFullScreen ? styles.fullscreen : styles.video}>
                            <Video
                                ref={videoRef}
                                fullscreen={fullscreen}
                                onProgress={onProgress}
                                paused={!isPlaying}
                                onBuffer={handleBuffering}
                                onError={(e) => console.log(e)}
                                onLoad={(OnLoadData) => handleOnLoad(OnLoadData)}
                                onLoadStart={() => handleBuffering(true)}
                                style={{ ...StyleSheet.absoluteFill as any }}
                                maxBitRate={bandwidth}
                                source={{
                                    type: streamSourceType,
                                    uri: url,
                                }}
                                resizeMode={resizeMode ? resizeMode : 'contain' as any}
                            />


                            <MediaControlsView
                                showOnStart={true}
                                buffering={isBuffering}
                            >
                                {
                                    !showPlanPopup && <View style={{ ...styles.controlsContainer }}>
                                        <View style={[styles.topControlsRow]}>
                                            {
                                                defaultFullScreen ? <Pressable
                                                    android_ripple={{ color: Colors.white, borderless: true }}
                                                    onPress={() => { fullscreen ? handleOrientationChange() : navigation.goBack() }}
                                                >
                                                    <BackArrowIcon size={fullscreen ? 30 : 25} />
                                                </Pressable>
                                                    : <Pressable onPress={() => { fullscreen ? handleOrientationChange() : navigation.goBack() }}
                                                        android_ripple={{ color: Colors.white, borderless: true }}>
                                                        <BackArrowIcon />
                                                    </Pressable>
                                            }
                                            <Pressable android_ripple={{ color: Colors.white, borderless: true }}
                                                onPress={() => handleOrientationChange()}>
                                                {!fullscreen && <FullscreenIcon />}
                                            </Pressable>

                                        </View>
                                        <View style={tw`w-full justify-center items-center`}>
                                            <View style={styles.middleControlsRow}>
                                                <Pressable onPress={skipBackward}
                                                    android_ripple={{ color: Colors.white, borderless: true }}>
                                                    <BackwardIcon size={fullscreen ? 45 : 35} />
                                                </Pressable>
                                                {
                                                    isBuffering ?
                                                        <ActivityIndicator size={fullscreen ? 100 : 50} color={Colors.white} /> :
                                                        isPlaying ? <Pressable onPress={handlePlayPause} android_ripple={{ color: Colors.white, borderless: true }}>
                                                            <PauseIcon size={fullscreen ? 60 : 50} />
                                                        </Pressable> : <Pressable onPress={handlePlayPause} android_ripple={{ color: Colors.white, borderless: true }}>
                                                            <PlayIcon size={fullscreen ? 60 : 50} />
                                                        </Pressable>
                                                }
                                                <Pressable onPress={skipForward}
                                                    android_ripple={{ color: Colors.white, borderless: true }}>
                                                    <ForwardIcon size={fullscreen ? 45 : 35} />
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View>
                                            {
                                                !fullscreen && <View style={tw`flex-row items-center justify-center`}>
                                                    <Pressable android_ripple={{ color: Colors.white, borderless: true }}
                                                        onPress={() => {
                                                            settingHandlePresentModalPress()
                                                            // getVideoQuality()
                                                        }}>
                                                        <View style={tw`flex-row items-center justify-center`}>
                                                            <AntDesign name={'setting'} size={15} color={Colors.white} />
                                                            <Text style={tw`text-white text-xs ml-1.5`}>
                                                                Settings
                                                            </Text>
                                                        </View>
                                                    </Pressable>
                                                </View>
                                            }

                                            <View style={styles.bottomControlsRow}>
                                                <Slider
                                                    style={styles.slider}
                                                    value={isLive ? 1 : currentTime}
                                                    minimumValue={0}
                                                    maximumValue={isLive ? 1 : duration}
                                                    minimumTrackTintColor={Colors.primaryRed[500]}
                                                    maximumTrackTintColor={'#FFFFFF'}
                                                    thumbTintColor={Colors.primaryRed[500]}
                                                    onValueChange={(value) => handleSeekSlider(value)}
                                                />
                                                <Text style={styles.totalDuration}>

                                                    {isLive ? '🔴 Live' : remainingTime}
                                                </Text>

                                            </View>
                                            {
                                                fullscreen && <View style={tw`flex-row mb-5 items-center justify-center`}>
                                                    <Pressable
                                                        style={tw`mr-5`}
                                                        android_ripple={{ color: Colors.white, borderless: true }}
                                                        onPress={() => {
                                                            settingHandlePresentModalPress()
                                                            //getVideoQuality()
                                                        }}>
                                                        <View style={tw`flex-row items-center justify-center`}>
                                                            <AntDesign name={'setting'} size={15} color={Colors.white} />
                                                            <Text style={tw`text-white text-xs ml-1.5`}>
                                                                Settings
                                                            </Text>
                                                        </View>
                                                    </Pressable>
                                                    <Pressable android_ripple={{ color: Colors.white, borderless: true }}
                                                        onPress={() => {
                                                            setResizeMode(resizeMode === 'contain' ? 'cover' : 'contain')
                                                        }}>
                                                        <View style={tw`flex-row items-center justify-center`}>
                                                            {/* <AntDesign name={'fullscreen'} size={15} color={Colors.white} /> */}
                                                            <Text style={tw`text-white text-xs ml-1.5`}>
                                                                Fullscreen
                                                            </Text>
                                                        </View>
                                                    </Pressable>
                                                </View>
                                            }
                                        </View>

                                    </View>
                                }
                                {
                                    showPlanPopup && <View style={styles.containerpop}>
                                        <View style={styles.popupBox}>
                                            <PremiumICon />
                                            <Text style={styles.popupText}>
                                                Upgrade to Premium to watch this movie.
                                            </Text>
                                            <TouchableOpacity
                                                style={styles.playBtn}
                                                onPress={() => Upgrade()}>
                                                <Text style={styles.btnText}>Upgrade</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                }
                            </MediaControlsView>

                        </View > : <View style={isFullScreen ? styles.fullscreen : styles.video}>

                            {
                                streamContentInfo && <Image
                                    source={{ uri: streamContentInfo.thumbnail }}
                                    style={tw`w-full h-full`}
                                />
                            }
                        </View>
                }

            </View >
            <BottomSheetModal
                ref={settingBottomSheetModalRef}
                index={1}
                snapPoints={settingSnapPoints}
                onChange={settingHandleSheetChanges}
                containerStyle={tw`rounded-[18px] mx-4 mb-5 ${isFullScreen ? 'mx-52' : 'mx-4'}`}
            >
                <View style={tw`px-5`}>
                    <TouchableOpacity style={styles.optionContainer}
                        onPress={() => {
                            settingHandleClose()
                            settingBottomSheetModalRef.current?.close()
                            handlePresentModalPress()

                        }}>
                        <AntDesign name={'setting'} size={20} color={Colors.primary} />
                        <Text style={styles.settingTitle}>Video Quality</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheetModal>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}

                containerStyle={tw`rounded-[18px] mx-4 mb-5 ${isFullScreen ? 'mx-52' : 'mx-4'}`}
            >
                <ScrollView style={[styles.settingContainer]}>
                    {
                        videoQuality.length > 0 && videoQuality.map((item, index) => {
                            // remove
                            return <TouchableOpacity key={index} style={styles.optionContainer}
                                onPress={() => {
                                    settingHandleClose()
                                    videoQualityHandleClose()
                                    //setResolution(item)
                                    dispatch(setBandwidth(item.bitrate))
                                    setActiveVideoQuality(index)

                                }}>
                                <Text style={index === activeVideoQuality ? styles.settingTitleActive : styles.settingTitle}>{item.height}p</Text>
                            </TouchableOpacity>
                        }).reverse()


                    }
                    <TouchableOpacity style={styles.optionContainer}
                        onPress={() => {
                            settingHandleClose()
                            videoQualityHandleClose()
                            dispatch(setBandwidth(undefined))
                            setActiveVideoQuality('auto')
                        }}>
                        <Text style={activeVideoQuality === 'auto' ? styles.settingTitleActive : styles.settingTitle}>Auto</Text>
                    </TouchableOpacity>
                </ScrollView>
            </BottomSheetModal>
        </>
    )
}

export default VideoPlayer