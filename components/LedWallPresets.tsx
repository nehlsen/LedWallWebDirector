import {activateLedWallPreset, useLedWallPresets} from "../lib/LedWallApi";
import {Loading} from "@nextui-org/react";
import {useDeviceContext} from "./DeviceContext";

export default function LedWallPresets() {
    const deviceContext = useDeviceContext();
    const {presets, isLoading, isError} = useLedWallPresets(deviceContext.device);

    if (isLoading) {
        return (<Loading />)
    }
    if (isError) {
        return (<div>ERROR</div>)
    }

    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="text-base font-medium">Presets</h2>
            {presets.map((preset, index) => {
                return (
                    <button key={index} onClick={() => activateLedWallPreset(deviceContext.device, preset)} className={'btn-primary'}>
                        {preset.name}
                    </button>
                )
            })}
        </div>
    )
}
