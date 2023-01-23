import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HelpIcon = ({
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
            d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666ZM10 6.667V10M10 13.333h.008"
            stroke={color}
            strokeWidth={1.667}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default HelpIcon
