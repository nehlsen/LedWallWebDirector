import {saveLedWallPreset} from "../../lib/LedWallApi";
import {useDeviceContext} from "../DeviceContext";
import {useState} from "react";
import Button from "../Ui/Button";

export default function PresetSave() {
    const [saveAsName, setSaveAsName] = useState("");
    const [message, setMessage] = useState("");
    const deviceContext = useDeviceContext();

    let onSaveClicked = () => {
        if ('' !== saveAsName) {
            saveLedWallPreset(deviceContext.device, saveAsName)
                .then(() => {setMessage(`Preset "${saveAsName}" saved`)})
                .catch(() => {setMessage(`Failed to save Preset "${saveAsName}"`)});
        }
    };

    if (deviceContext.device.readonly) {
        return (
            <div className={"hidden"}>
                readonly mode
            </div>
        );
    }

    return (
        <div className={"fixed bottom-2 pl-1 pr-4 w-full md:w-auto"}>
            <div className={"p-2 rounded-md ring-1 ring-slate-900/10"}>
                <div className={"mt-2"}>
                    <strong>Save current mode and options to preset</strong>
                </div>
                <div className={"mt-2"}>
                    <input type="text" placeholder={"type name here"} value={saveAsName} onChange={(event) => setSaveAsName(event.target.value) }
                           className={"w-full p-1.5 rounded-md ring-1 ring-slate-900/10 shadow-sm"} />
                </div>
                <div className={"mt-2"}>
                    <Button label={"save"} onClick={onSaveClicked} />
                    <span className={"text-blue-500 font-medium px-2"}>{message}</span>
                </div>
            </div>
        </div>
    );
}
