import {LedWallModeMultiBars} from "./LedWallModeMultiBars";
import {LedWallModeWave} from "./LedWallModeWave";
import {LedWallModeBubbles} from "./LedWallModeBubbles";
import {LedWallMode} from "./LedWallMode";

export function isModeStatus(mode: any): mode is LedWallMode {
    return mode.name === 'Status';
}
export function isModeMultiBars(mode: any): mode is LedWallModeMultiBars {
    return mode.name === 'MultiBars';
}
export function isModeBubbles(mode: any): mode is LedWallModeBubbles {
    return mode.name === 'Bubbles';
}
export function isModeWave(mode: any): mode is LedWallModeWave {
    return mode.name === 'Wave';
}
