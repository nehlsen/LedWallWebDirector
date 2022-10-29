export function isModeMultiBars(mode: any): mode is LedWallModeMultiBars {
    return mode.name === 'MultiBars';
}
export function isModeBubbles(mode: any): mode is LedWallModeMultiBars {
    return mode.name === 'Bubbles';
}
