import {LedWallMode} from "./LedWallMode";

export interface LedWallModeMultiBars extends LedWallMode {
    options: {
        fadeRate: number,
        barTravelSpeed: number,
        numberOfBars: number,
        maximumFrameDelay: number,
    }
}
