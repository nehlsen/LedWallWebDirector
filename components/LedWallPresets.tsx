import {Device} from "../lib/Device";
import {activateLedWallPreset, useLedWallPresets} from "../lib/LedWallApi";
import {Button, Loading} from "@nextui-org/react";

interface Params {
    device: Device
}

export default function LedWallPresets({device}: Params) {
    const {presets, isLoading, isError} = useLedWallPresets(device);

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
                        <Button onClick={() => activateLedWallPreset(device, preset)}>Activate!</Button>
                    </div>
                )
            })}
        </div>
    )
}
