import {LedWallMode} from "./LedWallMode";

export interface LedWallModeBubbles extends LedWallMode {
    options: {
        numberOfBubbles: number,
        maximumBubbleSize: number,
        speed: number,
        maximumFrameDelay: number,
    }
}
