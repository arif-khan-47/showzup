import * as React from "react"
import { scale } from "react-native-size-matters"
import Svg, { Circle, Path } from "react-native-svg"

const SearchIcon = ({
    color = "#fff",
    height = 28,
    width = 29,
}) => (
    <Svg
        // width={width}
        // height={height}
        style={{ 
            width: scale(28),
            height: scale(25),
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Circle
            cx={14.185}
            cy={13.431}
            r={10.26}
            stroke={color}
            strokeWidth={2.283}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="m21.322 21.1 4.023 4.013"
            stroke={color}
            strokeWidth={2.283}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default SearchIcon
