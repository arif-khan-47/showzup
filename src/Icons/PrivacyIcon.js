import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PrivacyIcon = ({
    width = 26,
    height = 26,
    color = "#B4ABAB"
}) => (
    <Svg
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M2.833 2.125h11.334a1.417 1.417 0 0 1 1.416 1.417v4.25a7.083 7.083 0 0 1-14.166 0v-4.25a1.417 1.417 0 0 1 1.416-1.417v0Z"
            stroke={color}
            strokeWidth={1.417}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M5.667 7.083 8.5 9.917l2.833-2.834"
            stroke={color}
            strokeWidth={1.417}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default PrivacyIcon
