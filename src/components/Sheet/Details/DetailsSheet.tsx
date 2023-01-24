import React, { useCallback, useMemo, useRef, forwardRef, useImperativeHandle } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, ActivityIndicator, Platform } from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import tw from 'twrnc';
import { PlayIcon } from '../../PlayerControls/PlayerControls';
import Octicons from 'react-native-vector-icons/Octicons';
import { DoneIcon, InfoIcon, PlusIcon } from '../../Icon';
import Feather from 'react-native-vector-icons/Feather';
import { showMessage } from 'react-native-flash-message';
import navgiationStrings from '../../../Constants/navgiationStrings';
import Colors from '../../../Styles/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { ConvertTime, Display } from '../../../Utils';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useDispatch, useSelector } from 'react-redux';
import { callAddToFavorite, callGetFavorite, callRemoveFromFavorite } from '../../../Redux/Slice/favoriteSlice';
import moment from 'moment';
import { format as prettyFormat } from 'pretty-format'; // ES2015 modules
import { RootState } from '../../../Redux/store';
import { IContent } from '../../../Redux/Slice/contentSlice';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { scale, verticalScale } from 'react-native-size-matters';
import { Divider } from 'react-native-paper';

interface IDetailsSheetProps {
    data: IContent['content'];
    time: number;
    currentSeason: string | null;
    currentEpisode: string | null;
}

// update download progress every 5 seconds using _.debounce




const DetailsSheet = forwardRef(({ data, time, currentSeason, currentEpisode }: IDetailsSheetProps, ref) => {
    const { favoriteData, status: favoriteStatus } = useSelector((state: RootState) => state.favorite);
    const { isPrimium } = useSelector((state: RootState) => state.subscription)
    const insets = useSafeAreaInsets();
    React.useEffect(() => {
        dispatch(callGetFavorite() as any)
    }, [])
    const navigation = useNavigation();
    const dispatch = useDispatch()
    // ref
    const bottomSheetModalRef = useRef(null);
    // variables
    const snapPoints = useMemo(() => [
        '25%',
        //'44%'
        Platform.OS === 'ios' ? Display.setHeight(51.5) - insets.top - insets.bottom : insets.bottom !== 0 ? Display.setHeight(48) : Display.setHeight(46) - insets.top - insets.bottom


    ], []);
    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    // dismiss
    const handleDismissModalPress = useCallback(() => {
        bottomSheetModalRef.current?.dismiss();
    }, []);
    const handleSheetChanges = useCallback((index: number) => { }, []);

    const renderBackdrop = useCallback(
        (props: any) => <BottomSheetBackdrop {...props} />,
        []
    );
    // The component instance will be extended
    // with whatever you return from the callback passed
    // as the second argument
    useImperativeHandle(ref, () => ({
        show() {
            handlePresentModalPress();
        },
        hide() {
            handleDismissModalPress();
        }
    }));

    const handler = useCallback(_.debounce(function () {
        console.log('updating progress 2s');
    }, 2000), []);

    const downloadHandler = (uri: string | null) => {
        showMessage({
            message: 'Donwload not available in this version!',
            type: "danger",
            icon: "danger",
            duration: 3000,
            position: 'top',
            animationDuration: 500,
            floating: true,
            statusBarHeight: StatusBar.currentHeight,
        });
        return;
        if (!uri && !data?._id) {
            showMessage({
                message: 'Download not available in this version!',
                type: "danger",
                icon: "danger",
                duration: 3000,
                position: 'top',
                animationDuration: 500,
                floating: true,
                statusBarHeight: StatusBar.currentHeight,
            });
            return;
        };
        // download file in encrypted format using react-native-fs
        // get uri file extension
        const ext = uri?.split('.').pop();
        // get file name without extension
        const fileName = new Date().getTime();
        const downloadDest = `${RNFS.DocumentDirectoryPath}/${fileName}.${ext}`;
        const formatedUri = uri?.replace('https://', 'https://')
        const options = {
            fromUrl: formatedUri,
            toFile: downloadDest,
            background: true,
            // custom data to pass to the download begin callback
            begin: (res: any) => {
                // push data to file download array
                console.log('begin', prettyFormat(res));
                console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
                // store data in AsyncStorage for offline use later in array and new data will be added to the array
                AsyncStorage.getItem('downloaded').then((value) => {
                    if (value) {
                        let arr = JSON.parse(value);
                        // check if the data is already in the array
                        const newData = {
                            jobId: res.jobId,
                            size: res.contentLength,
                            progress: 0,
                            id: data?._id,
                            data: data,
                            path: downloadDest,
                        }
                        arr.push(newData);
                        AsyncStorage.setItem('downloaded', JSON.stringify(arr));
                    } else {
                        const newData = {
                            jobId: res.jobId,
                            size: res.contentLength,
                            progress: 0,
                            id: data?._id,
                            data: data,
                            path: downloadDest,
                        }
                        AsyncStorage.setItem('downloaded', JSON.stringify([newData]));
                    }
                });
            },
            progress: (res: any) => {
                let pro = res.bytesWritten / res.contentLength;
                // update progress in AsyncStorage
                updateprogressdebounced(pro, res.jobId);
            },
        };

        const updateprogressdebounced = _.debounce((pro, jobId) => {
            updateTranscodingStatus(pro, jobId);
        }, 5000, { 'maxWait': 5000 });

        const updateTranscodingStatus = async (pro: number, jobId: number) => {
            console.log('updating progress 5s', pro);
            await AsyncStorage.getItem('downloaded').then((value) => {
                if (value) {
                    let arr = JSON.parse(value);
                    // find the data in the array
                    const index = arr.findIndex((item: any) => item.jobId === jobId);
                    if (index !== -1) {
                        arr[index].progress = Math.round(pro * 100);
                        AsyncStorage.setItem('downloaded', JSON.stringify(arr));
                        console.log('updated progress', arr[index].progress);
                    }
                }
            });
        }
        try {
            const ret = RNFS.downloadFile(options as any);
            ret.promise.then(res => {
                console.log('success', res);
                //updateTranscodingStatus(100, res.jobId);
                showMessage({
                    message: 'Downloaded successfully!',
                    type: "success",
                    icon: "success",
                    duration: 3000,
                    position: 'top',
                    animationDuration: 500,
                    floating: true,
                    statusBarHeight: StatusBar.currentHeight,
                });
            }).catch(err => {
                console.log('err', err);
                showMessage({
                    message: 'Download failed!',
                    type: "danger",
                    icon: "danger",
                    duration: 3000,
                    position: 'top',
                    animationDuration: 500,
                    floating: true,
                    statusBarHeight: StatusBar.currentHeight,
                });
            });
        } catch (e) {
            console.log(e);
        }


    }
    // share handler
    const shareHandler = () => {
        showMessage({
            message: 'Share not available in this version!',
            type: "danger",
            icon: "danger",
            duration: 3000,
            position: 'top',
            animationDuration: 500,
            floating: true,
            statusBarHeight: StatusBar.currentHeight,
        });
    }

    // filter favorite list by id
    const isFavorite = (id: string) => {
        // if id is in favorite list contentID.id return true using filter
        return favoriteData?.length > 0 && favoriteData.filter(favorite => favorite?.content?._id === id).length > 0 ? true : false
    }

    const addToFavoriteList = async (id: string) => {
        // push to favorite list local array
        // if id is already in favorite list, remove it
        if (isFavorite(id)) {
            dispatch(callRemoveFromFavorite(id) as any)
        } else {
            dispatch(callAddToFavorite(id) as any)
        }
    }

    return <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={tw`bg-zinc-900`}
        backdropComponent={renderBackdrop}
    //contentHeight={scale(500)}
    >
        <SafeAreaView
            style={{
                flex: 1,
                position: 'relative',
            }}
        >
            <View style={{
                flex: 1,
                position: 'absolute',
                bottom: insets.bottom + verticalScale(10)
                //marginBottom: insets.bottom !== 0 ? -insets.bottom + verticalScale(-10) : verticalScale(-45)

            }}>
            {
                data ?
                    <View>
                        <View
                            style={{
                                paddingHorizontal: scale(16),
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                }}>
                                <Image
                                    source={{ uri: data?.poster }}
                                    style={{ width: scale(90), height: scale(120), borderRadius: scale(10), marginRight: scale(10) }}
                                    resizeMode="cover"
                                />
                                <View style={tw`w-[65%]`}>
                                    <Text numberOfLines={1}
                                        style={{ fontSize: scale(17), color: Colors.white, fontWeight: 'bold' }}>
                                        {data?.name}
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginTop: scale(4),
                                        }}>
                                        <Text numberOfLines={1}
                                            style={{
                                                fontSize: scale(11),
                                                color: Colors.white,
                                                paddingRight: scale(10),
                                                opacity: 0.5,
                                            }}>
                                            {
                                                moment(data?.createdAt).format('YYYY')
                                            }
                                        </Text>
                                        <Text numberOfLines={1} style={{
                                            fontSize: scale(11),
                                            color: Colors.white,
                                            paddingRight: scale(10),
                                            opacity: 0.5,
                                        }}>
                                            {data?.u_age}
                                        </Text>
                                        <Text numberOfLines={1} style={{
                                            fontSize: scale(12),
                                            color: Colors.white,
                                            paddingRight: scale(10),
                                            opacity: 0.5,
                                        }}>
                                            {
                                                data?.type === 'movie' && ConvertTime(data?.duration, true)
                                            }
                                            {
                                                data?.type === 'series' && `${data?.seasons?.length} Seasons`
                                            }
                                        </Text>
                                    </View>
                                    <Text numberOfLines={3}
                                        style={{
                                            fontSize: scale(12.5),
                                            color: Colors.white,
                                            opacity: 0.9,
                                            marginTop: scale(8),
                                        }}>
                                        {data?.description}
                                    </Text>
                                </View>

                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: scale(18),
                                paddingHorizontal: scale(16),
                            }}
                        >
                            <TouchableOpacity style={tw`items-center`}
                                onPress={() => {
                                    handleDismissModalPress();
                                    navigation.navigate(navgiationStrings.DETAILS, {
                                        id: data._id,
                                        slug: data.slug,
                                        type: data.type,
                                        time: time,
                                        currentSeason: currentSeason,
                                        currentEpisode: currentEpisode,
                                        thumbnail: data.thumbnail
                                    });
                                }}>
                                <View
                                    style={{
                                        backgroundColor: 'black',
                                        borderRadius: scale(100),
                                        width: scale(43),
                                        height: scale(43),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                    }}
                                >
                                    <PlayIcon size={scale(23)} />
                                </View>
                                <Text
                                    style={{
                                        color: Colors.white,
                                        fontSize: scale(12),
                                        marginTop: scale(4),
                                    }}>Play</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`items-center`} onPress={() => downloadHandler(data.source_link)}>
                                <View
                                    style={{
                                        backgroundColor: 'black',
                                        borderRadius: scale(100),
                                        width: scale(43),
                                        height: scale(43),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                    }}
                                >
                                    <Octicons name='download' size={scale(23)} color={Colors.white} />
                                </View>
                                <Text style={{
                                    color: Colors.white,
                                    fontSize: scale(12),
                                    marginTop: scale(4),
                                }}>Download</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`items-center`}
                                onPress={() => {
                                    addToFavoriteList(data._id)
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: 'black',
                                        borderRadius: scale(100),
                                        width: scale(43),
                                        height: scale(43),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                    }}>
                                    {
                                        favoriteStatus === 'loading' ? (
                                            <ActivityIndicator color="#fff" size={'small'} />
                                        ) : (
                                            isFavorite(data._id) ? <DoneIcon size={scale(22)} /> : <PlusIcon size={scale(22)} />
                                        )
                                    }
                                </View>
                                <Text style={{
                                    color: Colors.white,
                                    fontSize: scale(12),
                                    marginTop: scale(4),
                                }}>My List</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`items-center`} onPress={shareHandler}>
                                <View
                                    style={{
                                        backgroundColor: 'black',
                                        borderRadius: scale(100),
                                        width: scale(43),
                                        height: scale(43),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                    }}>
                                    <Feather name='share-2' size={scale(20)} color={Colors.white} />
                                </View>
                                <Text style={{
                                    color: Colors.white,
                                    fontSize: scale(12),
                                    marginTop: scale(4),
                                }}>Share</Text>
                            </TouchableOpacity>
                        </View>
                        <Divider
                            style={{
                                opacity: 0.5,
                                marginVertical: scale(15),
                                width: Display.fullWidth,
                            }}

                        />
                        <TouchableOpacity
                            onPress={() => {
                                handleDismissModalPress();
                                navigation.navigate(navgiationStrings.DETAILS, {
                                    id: data._id,
                                    is_trailer: true,
                                    slug: data.slug,
                                    type: data.type,
                                    time: time,
                                    currentSeason: currentSeason,
                                    currentEpisode: currentEpisode,
                                    thumbnail: data.thumbnail
                                });
                            }}
                            style={tw`px-5 flex-row items-center`}>
                            <View style={tw`flex-row items-center`}>
                                <InfoIcon size={scale(20)} />
                                <Text
                                    //style={tw`ml-2 text-base text-white`}
                                    style={{
                                        color: Colors.white,
                                        fontSize: scale(13),
                                        marginLeft: scale(10),
                                    }}
                                >
                                    Details & More
                                </Text>
                            </View>
                            <Entypo name='chevron-small-right' size={scale(22)} color='white' style={tw`ml-auto`} />
                        </TouchableOpacity>
                    </View> :
                    <SkeletonPlaceholder
                        highlightColor={Colors.primary}
                        backgroundColor={Colors.nonActiveTabColor}>
                        <View style={tw`px-4`}>
                            <View style={tw`flex-row`}>
                                <View style={tw`w-28 h-36 rounded-lg mr-4`} />
                                <View style={tw`w-[65%]`}>
                                    <View style={tw`text-xl font-bold text-white w-full h-5 rounded`} />
                                    <View style={tw`flex-row mt-2`}>
                                        <View style={tw`text-xs text-gray-400 mr-2.5 w-14 h-3 rounded`} />
                                        <View style={tw`text-xs text-gray-400 mr-2.5 w-14 h-3 rounded`} />
                                        <View style={tw`text-xs text-gray-400 mr-2.5 w-14 h-3 rounded`} />
                                    </View>
                                    <View style={tw`mt-2 w-full`}>
                                        <View style={tw`text-xs text-gray-400 mr-2.5 mt-2 w-full h-3 rounded`} />
                                        <View style={tw`text-xs text-gray-400 mr-2.5 mt-2 w-full h-3 rounded`} />
                                        <View style={tw`text-xs text-gray-400 mr-2.5 mt-2 w-[60%] h-3 rounded`} />
                                    </View>
                                </View>

                            </View>
                        </View>
                        <View style={tw`flex-row justify-between items-center mt-5 px-5`}>
                            <View style={tw`items-center`}>
                                <View style={tw`bg-black py-2 px-5 rounded-full w-12 h-12 flex-row justify-center items-center`} />
                                <View style={tw`mt-2 text-white w-10 h-2 rounded`} />
                            </View>
                            <View style={tw`items-center`}>
                                <View style={tw`bg-black py-2 px-5 rounded-full w-12 h-12 flex-row justify-center items-center`} />
                                <View style={tw`mt-2 text-white w-10 h-2 rounded`} />
                            </View>
                            <View style={tw`items-center`}>
                                <View style={tw`bg-black py-2 px-5 rounded-full w-12 h-12 flex-row justify-center items-center`} />
                                <View style={tw`mt-2 text-white w-10 h-2 rounded`} />
                            </View>
                            <View style={tw`items-center`}>
                                <View style={tw`bg-black py-2 px-5 rounded-full w-12 h-12 flex-row justify-center items-center`} />
                                <View style={tw`mt-2 text-white w-10 h-2 rounded`} />
                            </View>
                        </View>
                        <View style={tw`w-full h-0.5 my-4`} />
                        <View style={tw`px-5 flex-row items-center`}>
                            <View style={tw`flex-row items-center`}>
                                <InfoIcon size={22} />
                                <View style={tw`w-6 h-6 rounded-full`} />
                                <View style={tw`ml-2 w-28 h-2.5 rounded`} />
                            </View>
                        </View>
                    </SkeletonPlaceholder>
            }
        </View>
    </SafeAreaView>
    </BottomSheetModal >

});

export default DetailsSheet;