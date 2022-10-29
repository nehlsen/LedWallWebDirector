import {activateLedWallPreset, url as LedWallApiUrl, useLedWallPresets} from "../lib/LedWallApi";
import {Loading} from "@nextui-org/react";
import {useDeviceContext} from "./DeviceContext";
import {LedWallPreset} from "../lib/LedWallPreset";
import {useSWRConfig} from "swr";

export default function LedWallPresets() {
    const deviceContext = useDeviceContext();
    const {presets, isLoading, isError} = useLedWallPresets(deviceContext.device);
    const { mutate } = useSWRConfig();

    let setLedWallPreset = (preset: LedWallPreset) => {
        activateLedWallPreset(deviceContext.device, preset)
            .then(() => {
                mutate(LedWallApiUrl(deviceContext.device).mode);
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
            <h2 className="text-base font-medium">Presets</h2>
            <div className={"flex flex-wrap gap-3"}>
                {presets.map((preset, index) => {
                    return (
                        <button key={index} onClick={() => setLedWallPreset(preset)} className={'btn-primary w-24 h-24'}>
                            {preset.name}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
