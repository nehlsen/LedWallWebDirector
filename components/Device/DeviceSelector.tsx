import {Device} from "../../lib/Device";

interface Params {
    devices: Device[],
    selectCallback: Function
}

export default function DeviceSelector({devices, selectCallback}: Params) {
    return (
        <div className="mx-2 text-base">
            <h2>device selector</h2>
            {devices.map((device: Device) => {
                return (
                    <div>
                        {device.name}
                        <button onClick={() => selectCallback(device)} className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm">
                            Use THIS
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
