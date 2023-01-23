import * as React from "react"
import { scale } from "react-native-size-matters"
import Svg, { Path } from "react-native-svg"

const HomeIcon = ({
    color = "#fff",
}) => (
    <Svg
        fill="none"
        style={{ 
            width: scale(28),
            height: scale(25),
        }}
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M21.144 25.113H7.384c-2.19 0-3.964-1.757-3.964-3.925v-9.947a2.763 2.763 0 0 1 1.098-2.175l7.478-6a3.63 3.63 0 0 1 4.503 0l7.511 5.99a2.784 2.784 0 0 1 1.098 2.174v9.958c0 2.168-1.775 3.925-3.964 3.925Z"
            stroke={color}
            strokeWidth={2.283}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default HomeIcon