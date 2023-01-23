import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function PremiumSvgIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      style={{
        width: "100%",
        height: "100%"
      }}
      className="style-scope yt-icon"
      width={25}
      height={20}
      pointerEvents="none"
      {...props}
    >
      <G className="style-scope yt-icon" fill="#AAA">
        <Path
          d="M0 1.007C0 .45.45 0 1.007 0H14v14H1.007C.45 14 0 13.55 0 12.993V1.007z"
          fill="#C00"
          className="style-scope yt-icon"
        />
        <Path
          d="M5.52 7.994V11H3.762V2.469H7.09c.64 0 1.204.117 1.69.351.487.235.86.568 1.122 1 .262.431.393.922.393 1.473 0 .836-.286 1.495-.858 1.978-.573.482-1.365.723-2.376.723H5.52zm0-1.424h1.57c.465 0 .82-.11 1.063-.328.244-.219.367-.531.367-.937 0-.418-.124-.756-.37-1.014s-.586-.39-1.02-.398H5.52V6.57z"
          fill="#FFF"
          className="style-scope yt-icon"
        />
      </G>
    </Svg>
  )
}

export default PremiumSvgIcon
