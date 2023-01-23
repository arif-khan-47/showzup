import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ProfileIcon = ({
    width = 26,
    height = 26,
    color = '#B4ABAB'
}) => (
    <Svg
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M21.667 22.75v-2.167a4.334 4.334 0 0 0-4.334-4.333H8.667a4.333 4.333 0 0 0-4.334 4.333v2.167M13 11.917a4.333 4.333 0 1 0 0-8.667 4.333 4.333 0 0 0 0 8.667Z"
            stroke={color}
            strokeWidth={2.167}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default ProfileIcon
