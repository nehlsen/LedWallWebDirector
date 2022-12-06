import {activateLedWallMode, url as LedWallApiUrl, useLedWallMode, useLedWallModes} from "../lib/LedWallApi";
import {useDeviceContext} from "./DeviceContext";
import {Loading} from "@nextui-org/react";
import {useSWRConfig} from "swr";
import {LedWallMode} from "../lib/LedWallMode/LedWallMode";

export default function LedWallModeSelector() {
    const deviceContext = useDeviceContext();
    const activeModeState = useLedWallMode(deviceContext.device);
    const {modes, isLoading, isError} = useLedWallModes(deviceContext.device);
    const { mutate } = useSWRConfig();

    const onModeSelected = (mode: LedWallMode) => {
        activateLedWallMode(deviceContext.device, mode)
            .then((returnedMode) => {
                mutate(LedWallApiUrl(deviceContext.device).mode, returnedMode, {revalidate: false});
            });
    };

    if (isLoading) {
        return (<Loading />)
    }
    if (isError) {
        return (<div>ERROR</div>)
    }

    let activeModeIndex = -1;
    if (!activeModeState.isError && !activeModeState.isLoading) {
        activeModeIndex = activeModeState.mode.index;
    }

    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="text-base font-medium">Select a Mode</h2>
            <div className={"flex flex-wrap gap-3 justify-center"}>
                {modes.map((mode: LedWallMode) => {
                    return (
                        <button key={mode.index} onClick={() => onModeSelected(mode)}
                                className={`btn-primary w-24 h-24 ${activeModeIndex === mode.index ? 'outline outline-2 outline-pink-500 outline-offset-1 focus:outline focus:outline-2 focus:outline-pink-500 focus:outline-offset-1' : ''}`}>
                            {mode.name}
                        </button>
                    )
                })}
            </div>
        </div>
    );
}
