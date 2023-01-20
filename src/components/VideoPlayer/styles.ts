import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Colors from "../../Styles/Colors";
import { Display } from "../../Utils";

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.primary
    },
    video: {
        width: Display.fullWidth,
        height: Display.fullWidth * .6,
        backgroundColor: Colors.primary
    },
    fullscreen: {
        backgroundColor: Colors.primary,
        ...StyleSheet.absoluteFill
    },
    controls: {
        ...StyleSheet.absoluteFillObject,
    },
    topControlsRow: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: scale(12),
        marginTop: scale(10)
    },
    controlsContainer: {
        flex: 1,
        justifyContent: "space-between",
        ...StyleSheet.absoluteFillObject,
    },
    icon: {
        color: Colors.white,
        fontSize: scale(30),
        padding: scale(10),
    },
    middleControlsRow: {
        width: '60%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: scale(5),
        height: scale(50),
        marginTop: scale(20)
    },
    slider: {
        flex: 1,
        height: scale(40),
    },
    currentTime: {
        color: Colors.white,
    },
    totalDuration: {
        color: Colors.white,
        marginRight: scale(10),
        fontSize: scale(12)
    },
    bottomControlsRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    fittoScreen: {
        paddingHorizontal: scale(10),
    },
    fullscreenIcon: {
        paddingHorizontal: scale(10),
    },
    settingContainer: {
        marginHorizontal: scale(18),
        marginVertical: scale(10),
    },
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: verticalScale(5),
    },
    settingTitle: {
        fontSize: scale(15),
        color: Colors.primary,
        marginLeft: scale(10),
        //fontFamily: "Poppins-Regular",
        paddingTop: scale(2.5),
    },
    settingTitleActive: {
        fontSize: scale(17),
        color: Colors.secnederyColor,
        marginLeft: scale(10),
        //fontFamily: "Poppins-Regular",
        paddingTop: scale(2.5),
    },
    trailerContainer: {
        marginVertical: verticalScale(10),
    },
    imageContainer: {
        width: Display.setWidth(100),
        position: "relative",
    },
    trailerImage: {
        height: scale(185),
        marginHorizontal: moderateScale(12),
        borderRadius: scale(5),
        opacity: 0.7,
    },
    trailerImageOpacity: {
        opacity: 0.2,
        height: scale(185),
        marginHorizontal: moderateScale(12),
        borderRadius: scale(5),
    },
    trailerImageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    isPlayingText: {
        fontSize: scale(17),
        color: Colors.white,
        //fontFamily: "Poppins-Regular",
        paddingTop: scale(2.5),

    },
    playBtn: {
        backgroundColor: Colors.secnederyColor,
        width: moderateScale(150),
        height: moderateScale(35),
        marginTop: moderateScale(7),
        borderRadius: moderateScale(100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: moderateScale(13),
        color: Colors.white,
        //fontFamily: 'Popins-Regular',
        opacity: 0.9,
        textTransform: 'uppercase',
    },


    containerpop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupBox: {
        width: moderateScale(300),
        height: moderateScale(160),
        backgroundColor: Colors.primary,
        borderRadius: moderateScale(10),
        elevation: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        padding: moderateScale(5),
    },
    popupText: {
        fontSize: moderateScale(14),
        color: Colors.white,
        marginTop: moderateScale(1),
        //fontFamily: 'Popins-Regular',
        opacity: 0.7,
        textAlign: 'center',
    },
    playBtn: {
        backgroundColor: Colors.secnederyColor,
        width: moderateScale(100),
        height: moderateScale(35),
        marginTop: moderateScale(7),
        borderRadius: moderateScale(100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: moderateScale(15),
        color: Colors.white,
        //fontFamily: 'Popins-Regular',
        opacity: 0.9,
        textTransform: 'uppercase',
    },
})