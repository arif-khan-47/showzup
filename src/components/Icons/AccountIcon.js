import * as React from "react"
import { scale } from "react-native-size-matters"
import Svg, { Path, Circle } from "react-native-svg"

const SvgComponent = ({
    color = "#fff",
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
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            clipRule="evenodd"
            d="m24.069 8.702-.711-1.233a2.184 2.184 0 0 0-2.978-.804v0a2.173 2.173 0 0 1-2.978-.773 2.09 2.09 0 0 1-.292-1.045v0A2.184 2.184 0 0 0 14.926 2.6h-1.431a2.173 2.173 0 0 0-2.174 2.184v0a2.184 2.184 0 0 1-2.183 2.153 2.09 2.09 0 0 1-1.045-.293v0a2.184 2.184 0 0 0-2.978.805l-.763 1.253a2.184 2.184 0 0 0 .794 2.978v0a2.184 2.184 0 0 1 0 3.783v0a2.173 2.173 0 0 0-.794 2.967v0l.721 1.243a2.184 2.184 0 0 0 2.978.847v0a2.163 2.163 0 0 1 2.967.794c.188.316.289.677.293 1.044v0c0 1.207.978 2.184 2.184 2.184h1.431a2.184 2.184 0 0 0 2.184-2.173v0a2.174 2.174 0 0 1 2.184-2.184c.367.01.726.11 1.044.293v0c1.042.6 2.373.245 2.978-.794v0l.753-1.254a2.173 2.173 0 0 0-.795-2.978v0a2.174 2.174 0 0 1-.794-2.978c.19-.33.464-.604.794-.794v0a2.184 2.184 0 0 0 .794-2.967v0-.01Z"
            stroke={color}
            strokeWidth={2.283}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Circle
            cx={14.216}
            cy={13.571}
            r={3.009}
            stroke={color}
            strokeWidth={2.283}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default SvgComponent