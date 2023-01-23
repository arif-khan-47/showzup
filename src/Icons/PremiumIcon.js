import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const PremiumICon = (props) => (
    <Svg
        width={70}
        height={70}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M64.358 13.909c-2.737 0-4.963 2.415-4.963 5.39 0 1.932.938 3.619 2.345 4.578-2.982 4.473-7.182 9.667-11.515 11.165-5.705 1.98-11.018-10.192-13.636-17.43 1.939-.728 3.353-2.723 3.353-5.09 0-2.974-2.219-5.39-4.949-5.39-2.723 0-4.942 2.416-4.942 5.39 0 2.367 1.407 4.355 3.353 5.09-2.611 7.238-7.924 19.41-13.636 17.43-4.326-1.505-8.54-6.7-11.515-11.165 1.407-.96 2.345-2.64 2.345-4.578 0-2.975-2.226-5.39-4.956-5.39-2.723 0-4.942 2.415-4.942 5.39 0 2.982 2.219 5.397 4.942 5.397.056 0 .09-.014.147-.021l6.685 31.038h45.045l6.685-31.038c.049 0 .091.02.147.02 2.723 0 4.942-2.414 4.942-5.396.007-2.975-2.212-5.39-4.935-5.39Z"
            fill="url(#a)"
        />
        <Path d="M57.288 56.805h-44.59v6.055h44.59v-6.055Z" fill="url(#b)" />
        <Defs>
            <LinearGradient
                id="a"
                x1={0.7}
                y1={31.423}
                x2={69.293}
                y2={31.423}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#00D2FF" />
                <Stop offset={1} stopColor="#3A7BD5" />
            </LinearGradient>
            <LinearGradient
                id="b"
                x1={12.698}
                y1={59.833}
                x2={57.288}
                y2={59.833}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#00D2FF" />
                <Stop offset={1} stopColor="#3A7BD5" />
            </LinearGradient>
        </Defs>
    </Svg>
)

export default PremiumICon
