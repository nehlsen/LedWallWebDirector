import {isModeBubbles, isModeMultiBars} from "../../lib/LedWallMode/LedWallModeUtils";
import MultiBarsOptions from "./MultiBarsOptions";
import {setLedWallModeOptions, url as LedWallApiUrl} from "../../lib/LedWallApi";
import {useDeviceContext} from "../DeviceContext";
import BubblesOptions from "./BubblesOptions";
import {useSWRConfig} from "swr";

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

    if (isModeMultiBars(mode)) {
        return (
            <MultiBarsOptions options={mode.options} changeHandler={(options) => onChangeHandler(options)} />
        )
    } else if (isModeBubbles(mode)) {
        return (
            <BubblesOptions options={mode.options} changeHandler={(options) => onChangeHandler(options)} />
        )
    } else {
        console.log('its a .... mode ...')
    }

    return (
        <div>options not avail</div>
    );
}
