export function isModeMultiBars(mode: any): mode is LedWallModeMultiBars {
    return mode.name === 'MultiBars';
}
