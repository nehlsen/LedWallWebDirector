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
        <>
            <h2>device selector</h2>
            {allDevices.map((device: Device) => {
                return (
                    <button key={device.id} onClick={() => onDeviceSelected(device)} className={'btn-primary'}>
                        {device.name}
                    </button>
                )
            })}
        </>
    )
}
