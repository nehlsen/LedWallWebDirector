import {useState} from "react";
import {useDeviceContext} from "../DeviceContext";
import {pushLedWallOtaUpdateUrl} from "../../lib/LedWallApi";
import Button from "../Ui/Button";

export default function OtaUpdater() {
    const [url, setUrl] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const deviceContext = useDeviceContext();

    if (deviceContext.device.readonly) {
        return (
            <div className={"hidden"}>
                readonly mode
            </div>
        );
    }

    let onUpdateButtonClicked = () => {
        if ('' !== url) {
            pushLedWallOtaUpdateUrl(deviceContext.device, url)
                .then((response) => {
                    console.log(response);
                    setResponseMessage(response.msg);
                })
                .catch(() => {setResponseMessage(`Failed to start OTA Update!`)});
        }
    };

    return (
        <div className={"p-4"}>
            <div className={"p-2 rounded-md ring-1 ring-slate-900/10"}>
                <div className={"mt-2"}>
                    <strong>OTA Update</strong>
                </div>
                <div className={"mt-2"}>
                    <input type="text" placeholder={"type URL here"} value={url} onChange={(event) => setUrl(event.target.value) }
                           className={"w-full p-1.5 rounded-md ring-1 ring-slate-900/10 shadow-sm"} />
                </div>
                <div className={"mt-2"}>
                    <Button label={"Go!"} onClick={onUpdateButtonClicked} />
                    <span className={"text-blue-500 font-medium px-2"}>{responseMessage}</span>
                </div>
            </div>
        </div>
    )
}