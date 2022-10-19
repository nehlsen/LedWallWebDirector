import {Device} from "../../lib/Device";
import {useDeviceContext} from "../DeviceContext";
import {getDevices} from "../../lib/devices";
import {useRouter} from "next/router";

export default function DeviceSelector() {
    const deviceContext = useDeviceContext();
    const allDevices = getDevices()
    const route = useRouter();

    const onDeviceSelected = (device: Device) => {
        deviceContext.setDevice(device);
        route.push('/');
    };

    return (
        <>
            <h2>device selector</h2>
            {allDevices.map((device: Device) => {
                return (
                    <div>
                        {device.name}
                        <button onClick={() => onDeviceSelected(device)} className="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm">
                            Use THIS
                        </button>
                    </div>
                )
            })}
        </>
    )
}
