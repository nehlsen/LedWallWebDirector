import {activateLedWallMode, useLedWallModes} from "../lib/LedWallApi";
import {useDeviceContext} from "./DeviceContext";
import {Loading} from "@nextui-org/react";

export default function LedWallModeSelector() {
    const deviceContext = useDeviceContext();
    const {modes, isLoading, isError} = useLedWallModes(deviceContext.device);

    const onModeSelected = (mode: LedWallMode) => {
        activateLedWallMode(deviceContext.device, mode);
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
            {modes.map((mode: LedWallMode) => {
                return (
                    <button key={mode.index} onClick={() => onModeSelected(mode)} className="btn-primary">
                        {mode.name}
                    </button>
                )
            })}
        </div>
    );
}
