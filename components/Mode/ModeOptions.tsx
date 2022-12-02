import * as modeUtils from "../../lib/LedWallMode/LedWallModeUtils";
import MultiBarsOptions from "./MultiBarsOptions";
import {setLedWallModeOptions, url as LedWallApiUrl} from "../../lib/LedWallApi";
import {useDeviceContext} from "../DeviceContext";
import BubblesOptions from "./BubblesOptions";
import {useSWRConfig} from "swr";
import WaveOptions from "./WaveOptions";
import {LedWallMode} from "../../lib/LedWallMode/LedWallMode";

interface Params {
    mode: LedWallMode
}

export default function ModeOptions({mode}: Params) {
    const deviceContext = useDeviceContext();
    const { mutate } = useSWRConfig();

    const onChangeHandler = (changedOptions: object) => {
        setLedWallModeOptions(deviceContext.device, changedOptions)
            .then((modeWithOptions) => {
                mutate(LedWallApiUrl(deviceContext.device).mode, modeWithOptions, {revalidate: false});
            });
    };

    if (modeUtils.isModeMultiBars(mode)) {
        return (
            <MultiBarsOptions options={mode.options} changeHandler={(options) => onChangeHandler(options)} />
        )
    } else if (modeUtils.isModeBubbles(mode)) {
        return (
            <BubblesOptions options={mode.options} changeHandler={(options) => onChangeHandler(options)} />
        )
    } else if (modeUtils.isModeWave(mode)) {
        return (
            <WaveOptions options={mode.options} changeHandler={(options) => onChangeHandler(options)} />
        )
    } else if (modeUtils.isModeStatus(mode)) {
        return (
            <div>This Mode has no Options</div>
        )
    }

    return (
        <div>options not avail</div>
    );
}
