import {activateLedWallPreset, deleteLedWallPreset, url as LedWallApiUrl, useLedWallPresets} from "../lib/LedWallApi";
import {Loading} from "@nextui-org/react";
import {useDeviceContext} from "./DeviceContext";
import {LedWallPreset} from "../lib/LedWallPreset";
import {useSWRConfig} from "swr";
import Button from "./Ui/Button";
import {useState} from "react";

export default function LedWallPresets() {
    const deviceContext = useDeviceContext();
    const {presets, isLoading, isError} = useLedWallPresets(deviceContext.device);
    const { mutate } = useSWRConfig();
    const [deleteMode, setDeleteMode] = useState(false);

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

    let toggleDeleteMode = () => {
        setDeleteMode(!deleteMode);
    };
    let deletePreset = (preset: LedWallPreset) => {
        deleteLedWallPreset(deviceContext.device, preset.name)
            .then(() => {
                mutate(LedWallApiUrl(deviceContext.device).modes);
            });
    };

    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="text-base font-medium">Presets</h2>
            <div className={"flex flex-wrap gap-3"}>
                {presets.map((preset, index) => {
                    if (deleteMode) {
                        return (
                            <button key={index} onClick={() => deletePreset(preset)} className={`btn-primary w-24 h-24 origin-top-left rotate-12 hover:bg-red-500`}>
                                {preset.name}
                            </button>
                        );
                    } else {
                        return (
                            <button key={index} onClick={() => setLedWallPreset(preset)} className={`btn-primary w-24 h-24`}>
                                {preset.name}
                            </button>
                        )
                    }
                })}
            </div>
            { deviceContext.device.readonly ?
                <></> :
                <div className={"fixed bottom-2 pl-1 pr-4 w-full md:w-auto"}>
                    <Button label={"toggle delete mode"} onClick={toggleDeleteMode} />
                </div>
            }
        </div>
    )
}
