import {activateLedWallPreset, useLedWallPresets} from "../lib/LedWallApi";
import {Button, Loading} from "@nextui-org/react";
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
        <div>
            <h2>Presets</h2>
            {presets.map((preset, index) => {
                return (
                    <div key={index}>
                        {preset.name}
                        <Button onClick={() => activateLedWallPreset(deviceContext.device, preset)}>Activate!</Button>
                    </div>
                )
            })}
        </div>
    )
}
