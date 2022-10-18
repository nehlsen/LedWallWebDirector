
interface MultiBarsOptions {
    fadeRate: number,
    barTravelSpeed: number,
    numberOfBars: number,
    maximumFrameDelay: number,
}

interface LedWallModeMultiBars extends LedWallMode {
    options: MultiBarsOptions
}
