import {Device} from "../lib/Device";

interface Params {
    devices: Device[],
    selectCallback: Function
}

export default function DeviceSelector({devices, selectCallback}: Params) {
    return (
        <div>
            <h2>device selector</h2>
            {devices.map((device: Device) => {
                return (
                    <div>
                        {device.name}
                        <button onClick={() => selectCallback(device)}>Use THIS</button>
                    </div>
                )
            })}
        </div>
    )
}
