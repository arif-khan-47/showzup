import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

export const FullscreenClose = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#FFF">
            <Path d="M18 3h2v4h4v2h-6V3zm6 12v2h-4v4h-2v-6h6zM6 21H4v-4H0v-2h6v6zM0 9V7h4V3h2v6H0z" />
        </Svg>
    )
}

export const FullscreenOpen = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#FFF">
            <Path d="M24 9h-2V5h-4V3h6v6zm-6 12v-2h4v-4h2v6h-6zM0 15h2v4h4v2H0v-6zM6 3v2H2v4H0V3h6z" />
        </Svg>
    )

}

export const FitToScreenIcon = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 64 64"
        >
            <G fill="#FFF">
                <Path d="M6 6.5c0 .4 1.6 8.8 2.6 13.4.5 2.2.6 2.2 2.3.7 2.4-2.1 2.7-2.1 7.2 1.5 3.5 2.8 4 2.9 5.5 1.5 1.4-1.5 1.3-2-1.5-5.5-3.6-4.5-3.6-4.8-1.5-7.2 1.8-2 1.6-2.1-8-3.8C5.7 5.8 6 5.9 6 6.5zM51 7.1c-10 2.1-9.4 1.8-7.6 3.8 2.1 2.4 2.1 2.7-1.5 7.2-2.8 3.5-2.9 4-1.5 5.5 1.5 1.4 2 1.3 5.5-1.5 4.5-3.6 4.8-3.6 7.2-1.5 1.7 1.5 1.8 1.5 2.3-.7 1-4.6 2.6-13 2.6-13.4 0-.6-1.5-.5-7 .6zM17.7 42.2l-3.8 3.1-2.4-2.3-2.3-2.2L8 46.7c-.6 3.2-1.3 7.1-1.7 8.7-.5 2.6-.3 2.8 2.3 2.3 16.2-3.2 15.1-2.8 12.6-4.7-2.8-2.3-2.8-2.5.9-7.1 2.5-3.2 2.9-4.2 1.9-5.4-1.7-2-1.9-1.9-6.3 1.7zM40 40.5c-1 1.2-.6 2.2 1.9 5.4 3.7 4.6 3.8 5.5.9 7.5-1.2.9-2 1.6-1.6 1.6.3 0 4.2.7 8.5 1.5s7.9 1.5 8.1 1.5c.2 0 .1-1.2-.2-2.7-3-16-2.7-14.9-4.6-12.5-2.3 2.8-2.5 2.8-7-.8-4.4-3.5-4.4-3.5-6-1.5z" />
            </G>
        </Svg>
    )
}





export const ThreeDotMenuICon = () => {
    return (
        <Svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            viewBox="0 0 29.96 122.88"
            fill="#FFF"
        >
            <Path
                d="M15 0A15 15 0 1 1 0 15 15 15 0 0 1 15 0Zm0 92.93a15 15 0 1 1-15 15 15 15 0 0 1 15-15Zm0-46.47a15 15 0 1 1-15 15 15 15 0 0 1 15-15Z"
                style={{
                    fillRule: "evenodd",
                }}
            />
        </Svg>
    )
}

// new Icon start here
export function BackArrowIcon({
    size = 25,
}) {
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
                d="M24 11H3.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7 1.414-1.414L3.414 13H24v-2z"
                fill="#FFF"
            />
        </Svg>
    )
}
// Play Icon
export function PlayIcon({
    size = 25,
    color = "#FFF",
}) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M4 2.691a1 1 0 011.482-.876l16.925 9.309a1 1 0 010 1.752L5.482 22.185A1 1 0 014 21.309V2.69z"
                fill={color}
            />
        </Svg>
    )
}
// Pause Icon
export function PauseIcon({
    size = 25,
}) {
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
                d="M4.5 3a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-5zm10 0a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-5z"
                fill="#FFF"
            />
        </Svg>
    )
}
// back 10 sec Icon
export function BackwardIcon({ size = 25 }) {
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
                d="M11.02 2.048A10 10 0 112 12H0a12 12 0 105-9.747V1H3v4a1 1 0 001 1h4V4H6a10 10 0 015.02-1.952zM2 4v3h3v2H1a1 1 0 01-1-1V4h2zm12.125 12c-.578 0-1.086-.141-1.523-.424-.43-.29-.764-.694-.999-1.215-.235-.527-.353-1.148-.353-1.861 0-.707.118-1.324.353-1.851.236-.527.568-.932.999-1.215.437-.29.945-.434 1.523-.434s1.083.145 1.513.434c.437.283.774.688 1.009 1.215.235.527.353 1.144.353 1.851 0 .713-.118 1.334-.353 1.86-.235.522-.572.927-1.009 1.216-.43.283-.935.424-1.513.424zm0-1.35c.39 0 .696-.186.918-.56.222-.378.333-.909.333-1.59s-.111-1.208-.333-1.581c-.222-.38-.528-.57-.918-.57s-.696.19-.918.57c-.222.373-.333.9-.333 1.581 0 .681.111 1.212.333 1.59.222.374.528.56.918.56zm-5.521 1.205v-5.139L7 11.141V9.82l3.198-.8v6.835H8.604z"
                fill="#FFF"
            />
        </Svg>
    )
}
// forward 10 sec Icon
export function ForwardIcon({ size = 25 }) {
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
                d="M6.444 3.685A10 10 0 0118 4h-2v2h4a1 1 0 001-1V1h-2v1.253A12 12 0 1024 12h-2A10 10 0 116.444 3.685zM22 4v3h-3v2h4a1 1 0 001-1V4h-2zm-9.398 11.576c.437.283.945.424 1.523.424s1.083-.141 1.513-.424c.437-.29.774-.694 1.009-1.215.235-.527.353-1.148.353-1.861 0-.707-.118-1.324-.353-1.851-.235-.527-.572-.932-1.009-1.215-.43-.29-.935-.434-1.513-.434-.578 0-1.086.145-1.523.434-.43.283-.764.688-.999 1.215-.235.527-.353 1.144-.353 1.851 0 .713.118 1.334.353 1.86.236.522.568.927.999 1.216zm2.441-1.485c-.222.373-.528.56-.918.56s-.696-.187-.918-.56c-.222-.38-.333-.91-.333-1.591 0-.681.111-1.208.333-1.581.222-.38.528-.57.918-.57s.696.19.918.57c.222.373.333.9.333 1.581 0 .681-.111 1.212-.333 1.59zm-6.439-3.375v5.14h1.594V9.018L7 9.82v1.321l1.604-.424z"
                fill="#FFF"
            />
        </Svg>
    )

}
// fullscreen Icon
export function FullscreenIcon({ size = 25 }) {
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
                d="M0 5a2 2 0 012-2h7v2H2v4H0V5zm22 0h-7V3h7a2 2 0 012 2v4h-2V5zM2 15v4h7v2H2a2 2 0 01-2-2v-4h2zm20 4v-4h2v4a2 2 0 01-2 2h-7v-2h7z"
                fill="#FFF"
            />
        </Svg>
    )
}

// top 10
export function Top10Icon({ size = 25 }) {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#e50914"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 2a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1H3zm14.23 8.893c-.617-.396-1.339-.593-2.163-.593-.823 0-1.544.197-2.161.593-.618.397-1.095.96-1.43 1.69-.335.732-.503 1.586-.503 2.566 0 .99.168 1.847.503 2.573.335.726.812 1.287 1.43 1.683.617.396 1.338.595 2.161.595.824 0 1.546-.199 2.163-.595.617-.396 1.094-.957 1.43-1.683.334-.726.501-1.584.501-2.573 0-.98-.167-1.834-.502-2.565-.335-.73-.811-1.293-1.43-1.69zM9.48 19.8v-9.473l-4.553 1.11v1.83l2.283-.589V19.8h2.27zm4.28-6.848c.317-.521.752-.78 1.307-.78.557 0 .992.259 1.308.78.316.52.474 1.255.474 2.198 0 .945-.158 1.678-.474 2.198-.316.522-.751.783-1.308.783-.555 0-.99-.261-1.306-.783-.317-.52-.474-1.253-.474-2.198 0-.943.157-1.677.474-2.198zM13.075 4.2A3.153 3.153 0 0011.934 4a3.15 3.15 0 00-1.139.2 2.717 2.717 0 00-.897.556 2.462 2.462 0 00-.586.838 2.623 2.623 0 00-.206 1.045c0 .375.068.723.206 1.044.138.32.332.6.586.838.254.239.554.424.897.557.345.132.724.2 1.14.2a3.17 3.17 0 001.139-.2c.343-.133.642-.318.896-.557.254-.238.45-.517.587-.838.138-.32.207-.669.207-1.044 0-.376-.07-.724-.207-1.045-.138-.32-.333-.6-.587-.838a2.727 2.727 0 00-.896-.557zM8.755 5.31V4.123H4v1.186h1.639v3.846h1.477V5.309h1.64zm10.235-.962c-.322-.149-.7-.224-1.142-.224H15.51v5.03h1.475V7.709h.863c.441 0 .82-.075 1.142-.224.322-.149.57-.36.747-.63.176-.268.263-.585.263-.946 0-.351-.087-.662-.263-.932a1.75 1.75 0 00-.747-.63zm-7.75 1.045c.199-.118.43-.177.694-.177.265 0 .496.059.696.177.2.118.355.285.465.498a1.6 1.6 0 01.168.749c0 .284-.056.533-.168.748a1.21 1.21 0 01-.465.499c-.2.118-.431.176-.696.176a1.34 1.34 0 01-.695-.176 1.22 1.22 0 01-.467-.5 1.608 1.608 0 01-.166-.747c0-.285.056-.534.166-.749.112-.213.268-.38.467-.498zm5.745-.12h.63c.31 0 .537.056.676.167.14.11.21.267.21.47 0 .206-.07.367-.21.48-.14.113-.366.17-.676.17h-.63V5.272z"
                fill="#E50914"
            />
        </Svg>
    )
}