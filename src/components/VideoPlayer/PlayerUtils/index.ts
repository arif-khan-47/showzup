import Axios from "axios";
import { format as prettyConsoleLog } from "pretty-format";

// read m3u8 manifest file and return the list of resolutions
export const getM3U8Resolutions = async (fileUrl: string) => {
    try {
        const { data } = await Axios.get(fileUrl)
        // now convert text to array
        const lines = data.split('\n')
        const segments = lines.map((line: any) => {
            const segments = line.split('RESOLUTION=')
            
            // select only the line with resolution
            if (segments.length > 1) {
                const resolution = segments[1].split('x')
                return {
                    height: resolution[1].split(',')[0],
                }
            }
        }
        )
        // remove undefined object from segments array useing filter
        const filterdata = segments.filter((item: any) => item !== undefined)
        // create a array of height key
        const heightArray = filterdata.map((item: any) => item.height)
        const uniqueHeight = [...new Set(heightArray)]
        return uniqueHeight;
    } catch (error) {
        // console log only in development mode.
        if (__DEV__) {
            console.log(prettyConsoleLog(error));
        }
    }
};
