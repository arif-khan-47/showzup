import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DoneIcon({
    color = "#4166E0",
    width = 20,
    height = 20,
}) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M6.75 12.15L3.6 9l-1.05 1.05 4.2 4.2 9-9L14.7 4.2l-7.95 7.95z"
                fill={color}
            />
        </Svg>
    )
}

export default DoneIcon
