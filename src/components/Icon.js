import * as React from "react"
import Svg, { Mask, Path, G, Defs, Pattern, Use, Image, LinearGradient, Stop } from "react-native-svg"



export function InfoIcon({ size = 25 }) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm12-2v8h-2v-8h2zm-1-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                fill="#FFF"
            />
        </Svg>
    )
}
export function PlusIcon({ size = 25 }) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2h-2z"
                fill="#FFF"
            />
        </Svg>
    )
}
export function DoneIcon({ size = 25 }) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.682 19.731l15-14-1.364-1.462-14.294 13.34-5.317-5.316-1.414 1.414 6 6a1 1 0 001.39.024z"
                fill="#FFF"
            />
        </Svg>
    )
}
export function DownloadIcon({
    size = 25,
    color = '#FFF',
}) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M12 14l-.707.707.707.707.707-.707L12 14zm1-9a1 1 0 10-2 0h2zM6.293 9.707l5 5 1.414-1.414-5-5-1.414 1.414zm6.414 5l5-5-1.414-1.414-5 5 1.414 1.414zM13 14V5h-2v9h2z"
                fill={color}
            />
            <Path
                d="M5 16v1a2 2 0 002 2h10a2 2 0 002-2v-1"
                stroke={color}
                strokeWidth={2}
            />
        </Svg>
    )
}

export function BgShadow(props) {
    return (
        <Svg
            width={428}
            height={396}
            viewBox="0 0 428 396"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path fill="url(#paint0_linear_203_217)" d="M0 0H428V396H0z" />
            <Defs>
                <LinearGradient
                    id="paint0_linear_203_217"
                    x1={214}
                    y1={0}
                    x2={214}
                    y2={396}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopOpacity={0} />
                    <Stop offset={0.114583} stopColor="#141414" stopOpacity={0.3125} />
                    <Stop offset={0.213792} stopColor="#141414" stopOpacity={0.52518} />
                    <Stop offset={0.895833}
                        color="#000000"
                    />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}