export default ConvertTime = (seconds, hideSDisplay, spaceShow) => {

        seconds = Number(seconds);
        var h = Math.floor(seconds / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 3600 % 60);

        if (spaceShow) {
                var hDisplay = h > 0 ? h + (h == 1 ? " h " : " h ") : "";
                var mDisplay = m > 0 ? m + (m == 1 ? " m " : " m ") : "";
                var sDisplay = s > 0 ? s + (s == 1 ? " s " : " s ") : "";
        } else {
                var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
                var mDisplay = m > 0 ? m + (m == 1 ? "m " : "m ") : "";
                var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
        }
        if (hideSDisplay) {
                return hDisplay + mDisplay;
        }
        return hDisplay + mDisplay + sDisplay;
};