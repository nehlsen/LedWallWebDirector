import {LedWallMode} from "./LedWallMode";

export interface LedWallModeWave extends LedWallMode {
    options: {
        waveMode: number,
        waveDirection: number,
        waveLength: number,
        speed: number,
        colorHueLow: number,
        colorHueHigh: number,
        colorSaturationLow: number,
        colorSaturationHigh: number,
        colorValueLow: number,
        colorValueHigh: number,
    }
}
