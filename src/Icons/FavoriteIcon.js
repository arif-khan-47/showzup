import * as React from "react"
import { scale } from "react-native-size-matters"
import Svg, { Path } from "react-native-svg"

const FavoriteIcon = ({
    color = "#000",
    height = 28,
    width = 28,
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
        <Path
            clipRule="evenodd"
            d="m13.445 21.268-6.77 3.71a1.128 1.128 0 0 1-1.505-.45v0a1.191 1.191 0 0 1-.136-.533V7.559c0-3.134 2.142-4.388 5.224-4.388H17.5c2.988 0 5.224 1.17 5.224 4.18v16.644a1.118 1.118 0 0 1-1.118 1.118 1.233 1.233 0 0 1-.543-.136l-6.813-3.71a.846.846 0 0 0-.804 0Z"
            stroke={color}
            strokeWidth={2.283}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default FavoriteIcon
