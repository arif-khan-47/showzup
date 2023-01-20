import { whoami } from "../http";

export function CheckPremium(type) {
    if (type === 'PREMIUM') {
        return true
    } else if (type === 'FREE') {
        return false
    }
}

export const CheckUserIsPrimium = async () => {
    try {
        const response = await whoami();
        if (response.status === 200) {
            const { data } = response.data;
            return data.isPremium || false;
        }
    } catch (error) {
        console.log(error)
    }
}

export function CheckSourceType(type) {
    // run the switch statement
    switch (type) {
        case 'MP4':
            return 'mp4'
        case 'HLS':
            return 'm3u8'
        default:
            return 'mp4'
    }
}