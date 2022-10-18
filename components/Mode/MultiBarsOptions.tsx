interface Params {
    mode: LedWallModeMultiBars
}

export default function MultiBarsOptions({mode}: Params) {
    return (
        <div>
            <div>
                <span>Fade rate</span><span>{mode.options.fadeRate}</span>
            </div>
            <div>
                <span>Bar travel speed</span><span>{mode.options.barTravelSpeed}</span>
            </div>
            <div>
                <span>Number of Bars</span><span>{mode.options.numberOfBars}</span>
            </div>
            <div>
                <span>Max frame delay</span><span>{mode.options.maximumFrameDelay}</span>
            </div>
        </div>
    )
}
