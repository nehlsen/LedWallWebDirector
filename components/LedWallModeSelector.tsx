import {activateLedWallMode, url as LedWallApiUrl, useLedWallModes} from "../lib/LedWallApi";
import {useDeviceContext} from "./DeviceContext";
import {Loading} from "@nextui-org/react";
import {useSWRConfig} from "swr";
import {LedWallMode} from "../lib/LedWallMode/LedWallMode";

export default function LedWallModeSelector() {
    const deviceContext = useDeviceContext();
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

    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="text-base font-medium">Select a Mode</h2>
            <div className={"flex flex-wrap gap-3"}>
                {modes.map((mode: LedWallMode) => {
                    return (
                        <button key={mode.index} onClick={() => onModeSelected(mode)} className="btn-primary w-24 h-24">
                            {mode.name}
                        </button>
                    )
                })}
            </div>
        </div>
    );
}
