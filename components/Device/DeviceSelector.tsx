import {Device} from "../../lib/Device";
import {useDeviceContext} from "../DeviceContext";
import {getDevices} from "../../lib/devices";
import {useRouter} from "next/router";

export default function DeviceSelector() {
    const deviceContext = useDeviceContext();
    const allDevices = getDevices()
    const router = useRouter();

    const onDeviceSelected = (device: Device) => {
        deviceContext.setDevice(device);
        router.push('/');
    };

    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="text-base font-medium">Select a Device</h2>
            <div className={"flex flex-wrap gap-3"}>
                {allDevices.map((device: Device) => {
                    return (
                        <button key={device.id} onClick={() => onDeviceSelected(device)} className="btn-primary w-24 h-24">
                            {device.name}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
