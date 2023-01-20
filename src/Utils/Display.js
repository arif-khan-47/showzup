import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

const setHeight = (h) => (height / 100) * h
const setWidth = (w) => (width / 100) * w
const fullWidth = Dimensions.get('window').width
const fullHeight = Dimensions.get('window').height

export default { setHeight, setWidth, fullWidth, fullHeight };