import {activateLedWallMode, url as LedWallApiUrl, useLedWallMode, useLedWallModes} from "../lib/LedWallApi";
import {useDeviceContext} from "./DeviceContext";
import {Loading} from "@nextui-org/react";
import {useSWRConfig} from "swr";
import {LedWallMode} from "../lib/LedWallMode/LedWallMode";
import TileButton from "./Ui/TileButton";

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
                        <TileButton key={mode.index} label={mode.name} onClick={() => onModeSelected(mode)} isSelected={activeModeIndex === mode.index} />
                    )
                })}
            </div>
        </div>
    );
}
