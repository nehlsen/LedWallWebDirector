import {useDeviceContext} from "../DeviceContext";
import {useState} from "react";
import {activateLedWallMode, saveLedWallPreset, setLedWallModeOptions} from "../../lib/LedWallApi";

interface PresetBackup {
    name: string,
    mode: string,
    options: object
}

export default function PresetRestore() {
    const deviceContext = useDeviceContext();

    const [presets, setPresets] = useState<PresetBackup[]>([]);

    // FIXME move all load,save,restore stuff to preset-manager or something

    let loadPresetsBackup = () => {
        fetch(`/api/preset/load?deviceId=${deviceContext.device.id}`)
            .then(response => response.json())
            .then(json => {setPresets(json.presets)});
    };

    let restorePreset = (preset: PresetBackup) => {
        activateLedWallMode(deviceContext.device, preset.mode)
            .then(() => {
                setLedWallModeOptions(deviceContext.device, preset.options)
                    .then(() => {
                        saveLedWallPreset(deviceContext.device, preset.name)
                    })
            });
    };

    return (
        <div>
            <button onClick={() => loadPresetsBackup()} className={"btn-primary p-2 my-1"}>Load Preset Backup</button>
            {presets.map(((preset: PresetBackup) => {
                return (
                    <div key={preset.name}>
                        {preset.name}
                        <button onClick={() => restorePreset(preset)} className={"btn-primary p-2 my-1"}>Restore Preset</button>
                    </div>
                )
            }))}
        </div>
    )
}