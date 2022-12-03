import {LedWallModeMultiBars} from "./LedWallModeMultiBars";
import {LedWallModeWave} from "./LedWallModeWave";
import {LedWallModeBubbles} from "./LedWallModeBubbles";
import {LedWallMode} from "./LedWallMode";

export function isModeStatus(mode: any): mode is LedWallMode {
    return mode.name === 'Status';
}
export function isModeBars(mode: any): mode is LedWallModeMultiBars {
    return mode.name === 'Bars';
}
export function isModeMultiBars(mode: any): mode is LedWallModeMultiBars {
    return mode.name === 'MultiBars';
}
export function isModeBubbles(mode: any): mode is LedWallModeBubbles {
    return mode.name === 'Bubbles';
}
export function isModeFireworks(mode: any): mode is LedWallModeBubbles {
    return mode.name === 'Fireworks';
}
export function isModeWave(mode: any): mode is LedWallModeWave {
    return mode.name === 'Wave';
}
export function isModeFire(mode: any): mode is LedWallModeWave {
    return mode.name === 'Fire';
}
export function isModeText(mode: any): mode is LedWallModeWave {
    return mode.name === 'Text';
}
