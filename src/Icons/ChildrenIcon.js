import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ChildrenIcon = ({
    color = "#000",
    height = 28,
    width = 25,
}) => (
    <Svg
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M11.64 17.755c2.572 0 4.748-1.612 5.642-3.865H5.997c.884 2.253 3.07 3.865 5.643 3.865Zm-3.865-7.177a1.656 1.656 0 1 0 0-3.313 1.656 1.656 0 0 0 0 3.313Zm7.73 0a1.656 1.656 0 1 0 0-3.312 1.656 1.656 0 0 0 0 3.312Zm-3.865 9.937a8.833 8.833 0 1 1 0-17.666 8.833 8.833 0 0 1 0 17.666Zm0-19.875C5.534.64.598 5.61.598 11.682A11.041 11.041 0 1 0 11.64.64Z"
            fill={color}
        />
    </Svg>
)

export default ChildrenIcon
