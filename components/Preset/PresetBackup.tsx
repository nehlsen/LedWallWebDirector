import {useDeviceContext} from "../DeviceContext";

export default function PresetBackup() {
    const deviceContext = useDeviceContext();

    let createPresetsBackup = () => {
        fetch(`/api/preset/backup?deviceId=${deviceContext.device.id}`);
    };

    return (
        <div>
            <button onClick={() => createPresetsBackup()} className={"btn-primary p-2 my-1"}>Create Preset Backup</button>
        </div>
    )
}
